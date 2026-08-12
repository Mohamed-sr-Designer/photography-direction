/* ==========================================================================
   REAL ESTATE PHOTOGRAPHY DIRECTION — UI
   Image led. Every category is a strip of frames, not a page of prose.
   All content comes from assets/js/data.js.
   ========================================================================== */
(function () {
  'use strict';

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  var ar  = function (r) { return String(r).replace(':', ' / '); };
  var set = function (sel, html) { var n = $(sel); if (n) n.innerHTML = html; };

  var quotaOf = function (c) {
    return c.groups.reduce(function (n, g) {
      return n + g.shots.reduce(function (m, s) { return m + s.qty; }, 0);
    }, 0);
  };
  var shotsOf = function (c) {
    return c.groups.reduce(function (a, g) { return a.concat(g.shots); }, []);
  };

  /* ------------------------------------------------------------ tiles --- */

  /** One reference frame: the image is the message, the label is a whisper. */
  function Tile(ref) {
    var src = (typeof IMAGES !== 'undefined') ? IMAGES[ref.code] : null;
    var inner = src
      ? '<img src="' + esc(src) + '" alt="' + esc(ref.label) + '" loading="lazy">' +
        '<span class="tile__ai">AI</span>'
      : '<span class="tile__wire">' + esc(ref.ratio) + '</span>';

    // flex-grow is set to the aspect ratio so a row of mixed formats
    // justifies to one common height, like a contact sheet.
    var p = String(ref.ratio).split(':');
    var w = (Number(p[0]) / Number(p[1])).toFixed(3);

    return '<figure class="tile rv" style="--ar:' + ar(ref.ratio) + ';--w:' + w + '">' +
      '<div class="tile__box">' + inner +
        '<span class="tile__ratio">' + esc(ref.ratio) + '</span>' +
      '</div>' +
      '<figcaption class="tile__cap">' +
        '<b>' + esc(ref.label) + '</b>' +
        (ref.note ? '<span>' + esc(ref.note) + '</span>' : '') +
      '</figcaption>' +
    '</figure>';
  }

  /** A real supplied reference photo in the masterplan gallery. */
  function PlanTile(src, label) {
    return '<figure class="ptile rv">' +
      '<img src="' + esc(src) + '" alt="' + esc(label) + '" loading="lazy">' +
    '</figure>';
  }

  /* ------------------------------------------------------- categories --- */

  function renderCategories() {
    var html = BRIEF.categories.map(function (c) {
      var dark = (c.id === 'drone' || c.id === 'night');

      var plan = '';
      if (c.id === 'masterplan' && typeof PLAN !== 'undefined') {
        plan = '<div class="plan">' + PLAN.map(function (g) {
          return '<section class="plan__g rv">' +
            '<h3 class="plan__h">' + esc(g.title) +
              '<em>' + g.files.length + '</em>' +
              '<span>' + esc(g.note) + '</span>' +
            '</h3>' +
            '<div class="plan__row">' +
              g.files.map(function (f) { return PlanTile(f, g.title); }).join('') +
            '</div>' +
          '</section>';
        }).join('') + '</div>';
      }

      return '<section class="cat' + (dark ? ' cat--dark' : '') + '" id="' + esc(c.id) + '" data-nav="' + esc(c.id) + '">' +
        '<div class="shell">' +
          '<header class="chead rv">' +
            '<span class="chead__num">' + esc(c.num) + '</span>' +
            '<h2 class="chead__t">' + esc(c.nav) + '</h2>' +
            '<span class="chead__tier" data-tier="' + esc(c.tier) + '">' + esc(c.tier) + '</span>' +
            '<span class="chead__q">' + quotaOf(c) + '</span>' +
            '<p class="chead__l">' + esc(c.lede) + '</p>' +
          '</header>' +
          '<div class="tiles">' + c.refs.map(Tile).join('') + '</div>' +
          plan +
        '</div>' +
      '</section>';
    }).join('');

    set('#cats', html);
  }

  /* ------------------------------------------------------------- nav ---- */

  function renderNav() {
    var links = BRIEF.categories.map(function (c) {
      return '<a class="nav__link" href="#' + esc(c.id) + '">' + esc(c.nav) + '</a>';
    }).join('') + '<a class="nav__link" href="#checklist">List</a>';
    set('#navLinks', links);

    set('#drawerList', BRIEF.categories.map(function (c) {
      return '<li><a href="#' + esc(c.id) + '"><em>' + esc(c.num) + '</em>' + esc(c.nav) +
             '<b>' + quotaOf(c) + '</b></a></li>';
    }).join('') + '<li><a href="#rules"><em>—</em>Rules</a></li>' +
                  '<li><a href="#checklist"><em>—</em>Checklist</a></li>');
  }

  /* ----------------------------------------------------------- strips --- */

  function renderStrips() {
    var m = BRIEF.meta;
    var v = $('#heroVer'); if (v) v.textContent = m.version + ' · ' + m.date;
    var f = $('#footMeta');
    if (f) f.textContent = m.project + ' · ' + m.document + ' · ' + m.version + ' · ' + m.date;

    set('#timeline', BRIEF.timeOfDay.map(function (t, i) {
      return '<article class="tcard tcard--' + esc(t.n) + ' rv" style="--d:' + (i * 50) + 'ms">' +
        '<h3 class="tcard__t">' + esc(t.title) + '</h3>' +
        '<span class="tcard__w">' + esc(t.window) + '</span>' +
        '<ul class="tcard__best">' +
          t.best.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') +
        '</ul>' +
      '</article>';
    }).join(''));

    var ratios = [
      { r: '21:9', l: 'Web hero' }, { r: '16:9', l: 'Web / Ads' },
      { r: '4:5',  l: 'Feed' },     { r: '1:1',  l: 'Square' },
      { r: '9:16', l: 'Reels' }
    ];
    set('#ratioRow', ratios.map(function (x, i) {
      return '<figure class="rframe rv" style="--d:' + (i * 50) + 'ms">' +
        '<div class="rframe__box" style="--ar:' + ar(x.r) + '">' + esc(x.r) + '</div>' +
        '<figcaption>' + esc(x.l) + '</figcaption>' +
      '</figure>';
    }).join(''));

    var li = function (t) { return '<li>' + esc(t) + '</li>'; };
    set('#ruleFrame', BRIEF.rules.frame.map(li).join(''));
    set('#ruleFiles', BRIEF.rules.files.map(li).join(''));
    set('#ruleNo',    BRIEF.rules.never.map(li).join(''));
  }

  /* -------------------------------------------------------- checklist --- */

  var STORE = 'repd.checklist.v1';
  var state = {};

  function load() {
    try { state = JSON.parse(localStorage.getItem(STORE) || '{}') || {}; } catch (e) { state = {}; }
  }
  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* private mode */ }
  }

  function renderChecklist() {
    set('#checklistWrap', BRIEF.categories.map(function (cat) {
      var items = shotsOf(cat).map(function (s) {
        return '<label class="clitem">' +
          '<input type="checkbox" data-code="' + esc(s.code) + '" data-qty="' + s.qty + '">' +
          '<span class="clbox" aria-hidden="true"></span>' +
          '<span class="clitem__t">' + esc(s.title) + '</span>' +
          '<span class="clitem__q">' + s.qty + '</span>' +
        '</label>';
      }).join('');

      return '<section class="clcat rv" data-cat="' + esc(cat.id) + '">' +
        '<button type="button" class="clcat__head" aria-expanded="false">' +
          '<span class="clcat__num">' + esc(cat.num) + '</span>' +
          '<span class="clcat__t">' + esc(cat.nav) + '</span>' +
          '<span class="clcat__bar"><span class="clcat__barfill"></span></span>' +
          '<span class="clcat__n"><b>0</b>/' + quotaOf(cat) + '</span>' +
          '<span class="clcat__chev" aria-hidden="true"></span>' +
        '</button>' +
        '<div class="clcat__body">' + items + '</div>' +
      '</section>';
    }).join(''));

    $$('#checklistWrap input[type=checkbox]').forEach(function (cb) {
      cb.checked = !!state[cb.dataset.code];
      cb.addEventListener('change', function () {
        if (cb.checked) { state[cb.dataset.code] = 1; } else { delete state[cb.dataset.code]; }
        save(); updateProgress();
      });
    });

    $$('#checklistWrap .clcat__head').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var open = btn.closest('.clcat').classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });

    var expand = $('#expandAll');
    if (expand) {
      expand.addEventListener('click', function () {
        var cards = $$('#checklistWrap .clcat');
        var anyClosed = cards.some(function (c) { return !c.classList.contains('is-open'); });
        cards.forEach(function (c) {
          c.classList.toggle('is-open', anyClosed);
          var b = $('.clcat__head', c); if (b) b.setAttribute('aria-expanded', anyClosed ? 'true' : 'false');
        });
        expand.textContent = anyClosed ? 'Collapse all' : 'Expand all';
      });
    }

    var reset = $('#resetAll');
    if (reset) {
      reset.addEventListener('click', function () {
        if (!window.confirm('Clear every ticked shot?')) return;
        state = {}; save();
        $$('#checklistWrap input[type=checkbox]').forEach(function (cb) { cb.checked = false; });
        updateProgress();
      });
    }

    updateProgress();
  }

  function updateProgress() {
    var frames = 0, shots = 0, catsDone = 0;
    var total = BRIEF.quota.total;

    BRIEF.categories.forEach(function (cat) {
      var list = shotsOf(cat), cf = 0, cs = 0;
      list.forEach(function (s) { if (state[s.code]) { cf += s.qty; cs++; } });
      frames += cf; shots += cs;
      if (list.length && cs === list.length) catsDone++;

      var card = $('.clcat[data-cat="' + cat.id + '"]');
      if (card) {
        var q = quotaOf(cat);
        var fill = $('.clcat__barfill', card), num = $('.clcat__n b', card);
        if (fill) fill.style.width = (q ? (cf / q) * 100 : 0) + '%';
        if (num) num.textContent = cf;
        card.classList.toggle('is-done', list.length > 0 && cs === list.length);
      }
    });

    var pct = total ? Math.round((frames / total) * 100) : 0;
    var n = $('#progNum');   if (n) n.textContent = frames + ' / ' + total;
    var f = $('#progFill');  if (f) f.style.width = pct + '%';
    var s = $('#progShots'); if (s) s.textContent = shots;
    var c = $('#progCats');  if (c) c.textContent = catsDone;
    var p = $('#progPct');   if (p) p.textContent = pct + '%';
    var v = $('#navCount');  if (v) v.textContent = frames + '/' + total;
    var st = $('#progShotsTotal'); if (st) st.textContent = BRIEF.allShots.length;
    var ct = $('#progCatsTotal');  if (ct) ct.textContent = BRIEF.categories.length;
  }

  /* -------------------------------------------------------- behaviour --- */

  function initNav() {
    var nav = $('#nav'), toggle = $('#navToggle'), drawer = $('#drawer');
    var links = $$('.nav__link'), sections = $$('[data-nav]'), fill = $('#progress');

    if (toggle && drawer) {
      toggle.addEventListener('click', function () {
        var on = drawer.classList.toggle('is-on');
        toggle.classList.toggle('is-on', on);
        toggle.setAttribute('aria-expanded', on ? 'true' : 'false');
      });
      $$('a', drawer).forEach(function (a) {
        a.addEventListener('click', function () {
          drawer.classList.remove('is-on');
          toggle.classList.remove('is-on');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY || document.documentElement.scrollTop;
        if (nav) nav.classList.toggle('is-stuck', y > 8);
        if (fill) {
          var h = document.documentElement.scrollHeight - window.innerHeight;
          fill.style.width = (h > 0 ? Math.min(1, y / h) * 100 : 0) + '%';
        }
        var cur = '', line = y + window.innerHeight * 0.3;
        sections.forEach(function (sec) { if (sec.offsetTop <= line) cur = sec.dataset.nav; });
        links.forEach(function (a) { a.classList.toggle('is-on', a.getAttribute('href') === '#' + cur); });
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  }

  function initReveal() {
    var nodes = $$('.rv');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.04 });
    nodes.forEach(function (n) { io.observe(n); });

    // If the observer never runs (background tab, print) nothing would show.
    setTimeout(function () {
      if (!document.querySelector('.rv.in')) nodes.forEach(function (n) { n.classList.add('in'); });
    }, 2500);
  }

  window.addEventListener('beforeprint', function () {
    $$('.rv').forEach(function (n) { n.classList.add('in'); });
  });

  function init() {
    if (typeof BRIEF === 'undefined') return;
    renderNav();
    renderCategories();
    renderStrips();
    load();
    renderChecklist();
    initNav();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
