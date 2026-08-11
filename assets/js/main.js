/* ==========================================================================
   REAL ESTATE PHOTOGRAPHY DIRECTION — UI
   Renders every repeated component from BRIEF (assets/js/data.js).
   Nothing in the shot lists is written in markup by hand.
   ========================================================================== */
(function () {
  'use strict';

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  var ar = function (ratio) { return String(ratio).replace(':', ' / '); };
  var set = function (target, html) { var n = $(target); if (n) n.innerHTML = html; };

  /* ================================================== reusable partials == */

  /**
   * ImageReference — renders a real photo once one is registered in IMAGES
   * (keyed by slot code), otherwise a wireframe placeholder in the same
   * aspect ratio. Nothing else has to change when the images arrive.
   */
  function Frame(ref, extra) {
    var src = (typeof IMAGES !== 'undefined') ? IMAGES[ref.code] : null;

    var box = src
      ? '<div class="frame__box frame__box--img" style="--ar:' + ar(ref.ratio) + '">' +
          '<img src="' + esc(src) + '" alt="' + esc(ref.label) + '" loading="lazy">' +
        '</div>'
      : '<div class="frame__box" style="--ar:' + ar(ref.ratio) + '">' +
          '<span class="frame__code">' + esc(ref.code) + '</span>' +
          '<span class="frame__tag">' + esc(ref.label) + '</span>' +
          '<span class="frame__ratio">' + esc(ref.ratio) + '</span>' +
        '</div>';

    return '' +
      '<figure class="frame rv' + (extra ? ' ' + extra : '') + '">' +
        box +
        (ref.note ? '<figcaption class="frame__cap">' + esc(ref.note) + '</figcaption>' : '') +
      '</figure>';
  }

  /** ShotCard */
  function ShotCard(shot) {
    return '' +
      '<article class="shot">' +
        '<div class="shot__top">' +
          '<span class="shot__code">' + esc(shot.code) + '</span>' +
          '<span class="shot__qty"><b>' + shot.qty + '</b> frames</span>' +
        '</div>' +
        '<h4 class="shot__t">' + esc(shot.title) + '</h4>' +
        '<span class="shot__type">' + esc(shot.type) + '</span>' +
        '<p class="shot__row"><b>Composition</b>' + esc(shot.composition) + '</p>' +
        (shot.notes ? '<p class="shot__note">' + esc(shot.notes) + '</p>' : '') +
        '<div class="shot__use">' +
          shot.usage.map(function (u) { return '<span class="use">' + esc(u) + '</span>'; }).join('') +
        '</div>' +
      '</article>';
  }

  /** SectionHeader for a category */
  function CatHead(cat) {
    var total = quotaOf(cat);
    return '' +
      '<div class="cathead__l rv">' +
        '<div class="cathead__eyebrow">' +
          '<span class="cathead__num">' + esc(cat.num) + ' / ' + esc(cat.nav.toUpperCase()) + '</span>' +
          '<span class="cathead__tier" data-tier="' + esc(cat.tier) + '">' + esc(cat.tier) + '</span>' +
        '</div>' +
        '<h2 class="cathead__h">' + esc(cat.title) + '</h2>' +
        '<p class="cathead__lede">' + esc(cat.lede) + '</p>' +
      '</div>' +
      '<div class="cathead__r rv">' +
        '<p class="cathead__purpose">' + esc(cat.purpose) + '</p>' +
        '<div class="cathead__quota">' +
          '<span class="cathead__quotan">' + total + '</span>' +
          '<span class="cathead__quotal">images required<br>for this category</span>' +
        '</div>' +
      '</div>';
  }

  function quotaOf(cat) {
    return cat.groups.reduce(function (n, g) {
      return n + g.shots.reduce(function (m, s) { return m + s.qty; }, 0);
    }, 0);
  }
  function shotsOf(cat) {
    return cat.groups.reduce(function (all, g) { return all.concat(g.shots); }, []);
  }

  /* ============================================================ meta ==== */

  function renderMeta() {
    var m = BRIEF.meta;
    var ver = m.version + ' · ' + m.date;
    var v1 = $('#heroVer'); if (v1) v1.textContent = ver;
    var v2 = $('#footVer'); if (v2) v2.textContent = 'Photography Brief ' + ver;

    set('#heroFacts',
      [['Project', m.project], ['Client', m.client], ['Document', m.document],
       ['Version', ver]]
      .map(function (r) { return '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join(''));

    set('#footMeta',
      [['Project', m.project], ['Document', m.document], ['Type', m.type],
       ['Prepared by', m.owner], ['Version', m.version], ['Date', m.date]]
      .map(function (r) { return '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join(''));
  }

  /* ====================================================== objectives ==== */

  function renderObjectives() {
    set('#objectives', BRIEF.objectives.map(function (o, i) {
      return '<article class="ocard rv" style="--d:' + (i * 55) + 'ms">' +
        '<span class="ocard__n">' + esc(o.n) + '</span>' +
        '<h3 class="ocard__t">' + esc(o.title) + '</h3>' +
        '<p class="ocard__b">' + esc(o.body) + '</p>' +
      '</article>';
    }).join(''));
  }

  /* ========================================================== volume ==== */

  function renderVolume() {
    set('#volumeGrid', BRIEF.categories.map(function (c, i) {
      return '<article class="volcard rv" style="--d:' + (i * 40) + 'ms">' +
        '<span class="volcard__n">' + esc(c.num) + '</span>' +
        '<h3 class="volcard__t">' + esc(c.nav) + '</h3>' +
        '<span class="volcard__q">' + quotaOf(c) + '<em>images</em></span>' +
      '</article>';
    }).join(''));
  }

  /* ================================================ visual language ==== */

  function renderLanguage() {
    set('#languageGrid', BRIEF.language.map(function (l, i) {
      return '<article class="langcard rv" style="--d:' + (i * 55) + 'ms">' +
        '<div class="langcard__head">' +
          '<span class="langcard__n">' + esc(l.n) + '</span>' +
          '<h3 class="langcard__t">' + esc(l.title) + '</h3>' +
        '</div>' +
        Frame({ ratio: l.ratio, code: 'REF-' + l.n, label: l.title }) +
        '<p class="langcard__b">' + esc(l.body) + '</p>' +
      '</article>';
    }).join(''));
  }

  /* ====================================================== priorities ==== */

  function renderPriorities() {
    set('#tiers', BRIEF.priorities.map(function (p) {
      var cards = p.items.map(function (id) {
        var c = BRIEF.byId[id];
        var suggested = shotsOf(c).slice(0, 3).map(function (s) { return s.title; }).join(' · ');
        var usage = {};
        shotsOf(c).forEach(function (s) { s.usage.forEach(function (u) { usage[u] = 1; }); });
        return '<article class="pcard">' +
          '<div class="pcard__top">' +
            '<span class="pcard__n">' + esc(c.num) + '</span>' +
            '<h4 class="pcard__t">' + esc(c.nav) + '</h4>' +
          '</div>' +
          '<p class="pcard__b">' + esc(c.purpose) + '</p>' +
          '<p class="pcard__b"><b>Suggested:</b> ' + esc(suggested) + '</p>' +
          '<div class="pcard__meta">' +
            '<span class="pcard__q">' + quotaOf(c) + ' images</span>' +
            '<span>' + esc(Object.keys(usage).join(' · ')) + '</span>' +
          '</div>' +
        '</article>';
      }).join('');

      return '<section class="tier tier--' + esc(p.rank) + ' rv">' +
        '<header class="tier__head">' +
          '<span class="tier__rank">Priority ' + esc(p.rank) + '</span>' +
          '<h3 class="tier__t">' + esc(p.tier) + '</h3>' +
          '<span class="tier__note">' + esc(p.note) + '</span>' +
        '</header>' +
        '<div class="tier__body">' + cards + '</div>' +
      '</section>';
    }).join(''));
  }

  /* ====================================================== categories ==== */

  function renderCategories() {
    BRIEF.categories.forEach(function (cat) {
      var head = $('[data-cathead="' + cat.id + '"]');
      if (head) head.innerHTML = CatHead(cat);

      var refs = $('[data-refs="' + cat.id + '"]');
      if (refs && cat.refs) {
        refs.innerHTML = cat.refs.map(function (r, i) {
          return Frame(r).replace('class="frame rv"', 'class="frame rv" style="--d:' + (i * 70) + 'ms"');
        }).join('');
      }

      var wrap = $('[data-shots="' + cat.id + '"]');
      if (wrap) {
        wrap.innerHTML = cat.groups.map(function (g) {
          return '<section class="shotgroup rv">' +
            '<h3 class="shotgroup__label">' + esc(g.label) +
              ' <span>' + g.shots.reduce(function (n, s) { return n + s.qty; }, 0) + ' frames</span></h3>' +
            '<div class="shots">' + g.shots.map(ShotCard).join('') + '</div>' +
          '</section>';
        }).join('');
      }

      var avoid = $('[data-avoid="' + cat.id + '"]');
      if (avoid && cat.avoid) {
        avoid.innerHTML = '<h3 class="avoid__h">Avoid</h3><ul class="avoid__list">' +
          cat.avoid.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul>';
      }

      var style = $('[data-style="' + cat.id + '"]');
      if (style && cat.style) {
        style.innerHTML = cat.style.map(function (s) { return '<span class="chip">' + esc(s) + '</span>'; }).join('');
      }

      var note = $('[data-note="' + cat.id + '"]');
      if (note && cat.note) {
        note.innerHTML = '<h3 class="note__h">' + esc(cat.note.title) + '</h3>' +
                         '<p class="note__b">' + esc(cat.note.body) + '</p>';
      }
    });
  }

  /* =========================================================== drone ==== */

  function renderDrone() {
    var shots = shotsOf(BRIEF.byId.drone);
    set('#droneGrid', shots.map(function (s, i) {
      return '<article class="dcell rv" style="--d:' + (i * 30) + 'ms">' +
        '<span class="dcell__n">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<h3 class="dcell__t">' + esc(s.title) + '</h3>' +
        '<span class="dcell__m">' + esc(s.type) + ' · ' + s.qty + ' frames</span>' +
      '</article>';
    }).join(''));
  }

  /* =========================================================== usage ==== */

  function renderUsage() {
    set('#usageGrid', BRIEF.usage.map(function (u, i) {
      return '<article class="ucard rv" style="--d:' + (i * 60) + 'ms">' +
        '<span class="ucard__n">' + esc(u.n) + '</span>' +
        '<h3 class="ucard__t">' + esc(u.title) + '</h3>' +
        '<div class="ucard__ratios">' +
          u.ratios.map(function (r) { return '<span class="rchip">' + esc(r) + '</span>'; }).join('') +
        '</div>' +
        '<ul class="ucard__list">' +
          u.req.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') +
        '</ul>' +
      '</article>';
    }).join(''));

    var ratios = [
      { r: '21:9', l: 'Website ultra wide' },
      { r: '16:9', l: 'Website / Ads' },
      { r: '4:5',  l: 'Social feed' },
      { r: '1:1',  l: 'Square safe' },
      { r: '9:16', l: 'Stories / Reels' }
    ];
    set('#ratioRow', ratios.map(function (x, i) {
      return '<figure class="rframe rv" style="--d:' + (i * 60) + 'ms">' +
        '<div class="rframe__box" style="--ar:' + ar(x.r) + '">' + esc(x.r) + '</div>' +
        '<figcaption class="rframe__lbl">' + esc(x.l) + '</figcaption>' +
      '</figure>';
    }).join(''));
  }

  /* ========================================================== matrix ==== */

  function renderMatrix() {
    set('#matrixGrid', BRIEF.matrix.map(function (m, i) {
      return '<div class="mcol rv" style="--d:' + (i * 60) + 'ms">' +
        '<h3 class="mcol__h">' + esc(m.g) + '</h3>' +
        '<ul class="mcol__list">' +
          m.items.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') +
        '</ul>' +
      '</div>';
    }).join(''));
  }

  /* ======================================================== timeline ==== */

  function renderTimeline() {
    set('#timeline', BRIEF.timeOfDay.map(function (t, i) {
      return '<article class="tcard tcard--' + esc(t.n) + ' rv" style="--d:' + (i * 70) + 'ms">' +
        '<span class="tcard__n">' + esc(t.n) + '</span>' +
        '<h3 class="tcard__t">' + esc(t.title) + '</h3>' +
        '<span class="tcard__w">' + esc(t.window) + '</span>' +
        '<p class="tcard__b">' + esc(t.body) + '</p>' +
        '<div class="tcard__best"><b>Best for</b><ul>' +
          t.best.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') +
        '</ul></div>' +
      '</article>';
    }).join(''));
  }

  /* ======================================================= technical ==== */

  function renderTechnical() {
    set('#techList', BRIEF.technical.map(function (t, i) {
      return '<li class="rv" style="--d:' + (i * 30) + 'ms"><div><b>' + esc(t.t) + '</b><span>' + esc(t.d) + '</span></div></li>';
    }).join(''));

    set('#specList', BRIEF.delivery.map(function (d) {
      return '<div><dt>' + esc(d.k) + '</dt><dd>' + esc(d.v) + '</dd></div>';
    }).join(''));
  }

  /* ======================================================= checklist ==== */

  var STORE = 'repd.checklist.v1';
  var state = {};

  function load() {
    try { state = JSON.parse(localStorage.getItem(STORE) || '{}') || {}; }
    catch (e) { state = {}; }
  }
  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* private mode */ }
  }

  function renderChecklist() {
    var html = BRIEF.categories.map(function (cat) {
      var shots = shotsOf(cat);
      var items = shots.map(function (s) {
        return '<label class="clitem">' +
          '<input type="checkbox" data-code="' + esc(s.code) + '" data-qty="' + s.qty + '" data-cat="' + esc(cat.id) + '">' +
          '<span class="clbox" aria-hidden="true"></span>' +
          '<span class="clitem__txt">' +
            '<span class="clitem__t">' + esc(s.title) + '</span>' +
            '<span class="clitem__m">' + esc(s.code) + ' · ' + esc(s.type) + '</span>' +
          '</span>' +
          '<span class="clitem__q">' + s.qty + '</span>' +
        '</label>';
      }).join('');

      return '<section class="clcat rv" data-cat="' + esc(cat.id) + '">' +
        '<button type="button" class="clcat__head" aria-expanded="false">' +
          '<span class="clcat__num">' + esc(cat.num) + '</span>' +
          '<span class="clcat__t">' + esc(cat.nav) + '</span>' +
          '<span class="clcat__bar"><span class="clcat__barfill"></span></span>' +
          '<span class="clcat__n"><b>0</b> / ' + quotaOf(cat) + '</span>' +
          '<span class="clcat__chev" aria-hidden="true"></span>' +
        '</button>' +
        '<div class="clcat__body">' + items + '</div>' +
      '</section>';
    }).join('');

    set('#checklistWrap', html);

    // restore ticks
    $$('#checklistWrap input[type=checkbox]').forEach(function (cb) {
      cb.checked = !!state[cb.dataset.code];
      cb.addEventListener('change', function () {
        if (cb.checked) { state[cb.dataset.code] = 1; } else { delete state[cb.dataset.code]; }
        save(); updateProgress();
      });
    });

    // accordion
    $$('#checklistWrap .clcat__head').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var card = btn.closest('.clcat');
        var open = card.classList.toggle('is-open');
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
        if (!window.confirm('Clear every ticked shot? This cannot be undone.')) return;
        state = {}; save();
        $$('#checklistWrap input[type=checkbox]').forEach(function (cb) { cb.checked = false; });
        updateProgress();
      });
    }

    updateProgress();
  }

  function updateProgress() {
    var frames = 0, shots = 0, catsDone = 0;
    var totalFrames = BRIEF.quota.total;
    var totalShots = BRIEF.allShots.length;

    BRIEF.categories.forEach(function (cat) {
      var list = shotsOf(cat), cFrames = 0, cShots = 0;
      list.forEach(function (s) {
        if (state[s.code]) { cFrames += s.qty; cShots++; }
      });
      frames += cFrames; shots += cShots;
      if (cShots === list.length && list.length) catsDone++;

      var card = $('.clcat[data-cat="' + cat.id + '"]');
      if (card) {
        var q = quotaOf(cat);
        var fill = $('.clcat__barfill', card);
        var num = $('.clcat__n b', card);
        if (fill) fill.style.width = (q ? (cFrames / q) * 100 : 0) + '%';
        if (num) num.textContent = cFrames;
        card.classList.toggle('is-done', cShots === list.length && list.length > 0);
      }
    });

    var pct = totalFrames ? Math.round((frames / totalFrames) * 100) : 0;
    var n = $('#progNum');   if (n) n.textContent = frames + ' / ' + totalFrames;
    var f = $('#progFill');  if (f) f.style.width = pct + '%';
    var s = $('#progShots'); if (s) s.textContent = shots;
    var c = $('#progCats');  if (c) c.textContent = catsDone;
    var p = $('#progPct');   if (p) p.textContent = pct + '%';
    var nav = $('#navCount');if (nav) nav.textContent = frames + '/' + totalFrames;

    var st = $('#progShotsTotal'); if (st) st.textContent = totalShots;
    var ct = $('#progCatsTotal');  if (ct) ct.textContent = BRIEF.categories.length;
  }

  /* ============================================================= nav ==== */

  function initNav() {
    var nav = $('#nav'), toggle = $('#navToggle'), drawer = $('#drawer');
    var links = $$('.nav__link');
    var sections = $$('[data-nav]');
    var fill = $('#progress');

    if (toggle && drawer) {
      toggle.addEventListener('click', function () {
        var on = drawer.classList.toggle('is-on');
        toggle.classList.toggle('is-on', on);
        toggle.setAttribute('aria-expanded', on ? 'true' : 'false');
        toggle.setAttribute('aria-label', on ? 'Close menu' : 'Open menu');
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

        var current = '';
        var line = y + window.innerHeight * 0.32;
        sections.forEach(function (sec) {
          if (sec.offsetTop <= line) current = sec.dataset.nav;
        });
        links.forEach(function (a) {
          a.classList.toggle('is-on', a.getAttribute('href') === '#' + current);
        });

        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  }

  /* ========================================================== reveal ==== */

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
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    nodes.forEach(function (n) { io.observe(n); });

    // Safety net: if the observer never ran (background tab, print, unusual
    // browser) nothing would ever become visible. Reveal everything instead.
    setTimeout(function () {
      if (!document.querySelector('.rv.in')) {
        nodes.forEach(function (n) { n.classList.add('in'); });
      }
    }, 2500);
  }

  // Printing a hidden section would print blank space.
  window.addEventListener('beforeprint', function () {
    $$('.rv').forEach(function (n) { n.classList.add('in'); });
  });

  /* ============================================================ boot ==== */

  function init() {
    if (typeof BRIEF === 'undefined') return;
    renderMeta();
    renderObjectives();
    renderVolume();
    renderLanguage();
    renderPriorities();
    renderCategories();
    renderDrone();
    renderUsage();
    renderMatrix();
    renderTimeline();
    renderTechnical();
    load();
    renderChecklist();
    initNav();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
