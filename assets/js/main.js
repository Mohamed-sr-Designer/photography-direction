/* ==========================================================================
   REAL ESTATE PHOTOGRAPHY DIRECTION — UI
   Four sections. Each one: description, keywords, a formula that computes
   the photo count, and a uniform image grid. Everything comes from data.js.
   ========================================================================== */
(function () {
  'use strict';

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (v) {
    return String(v == null ? '' : v)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  var set = function (sel, html) { var n = $(sel); if (n) n.innerHTML = html; };

  /* ---------------------------------------------------------- sections --- */

  function Formula(f) {
    var parts = f.parts.map(function (p, i) {
      return (i ? '<span class="fx__op">&times;</span>' : '') +
        '<span class="fx__part"><b>' + esc(p.v) + '</b><i>' + p.l + '</i></span>';
    }).join('');

    return '<div class="fx rv">' + parts +
      '<span class="fx__op fx__op--eq">=</span>' +
      '<span class="fx__total"><b>' + f.total + '</b><i>Photos</i></span>' +
    '</div>';
  }

  function renderSections() {
    set('#sections', SECTIONS.map(function (s) {
      var tiles = s.images.map(function (src, i) {
        return '<figure class="tile rv" style="--d:' + (i * 45) + 'ms">' +
          '<img src="' + esc(src) + '" alt="' + esc(s.title) + ' reference" loading="lazy">' +
          (s.source === 'ai' ? '<figcaption class="tile__ai">AI reference</figcaption>' : '') +
        '</figure>';
      }).join('');

      return '<section class="sec sec--pad sect" id="s' + esc(s.n) + '" data-nav="s' + esc(s.n) + '">' +
        '<div class="shell">' +
          '<header class="shead rv">' +
            '<span class="shead__n">' + esc(s.n) + '.</span>' +
            '<h2 class="shead__t">' + esc(s.title) + '</h2>' +
            '<p class="shead__b">' + esc(s.body) + '</p>' +
            '<ul class="keys">' +
              s.keywords.map(function (k) { return '<li>' + esc(k) + '</li>'; }).join('') +
            '</ul>' +
          '</header>' +
          Formula(s.formula) +
          '<div class="grid">' + tiles + '</div>' +
        '</div>' +
      '</section>';
    }).join(''));
  }

  /* --------------------------------------------------------------- nav --- */

  function renderNav() {
    var items = SECTIONS.map(function (s) {
      return '<a class="nav__link" href="#s' + esc(s.n) + '">' +
        '<em>' + esc(s.n) + '</em>' + esc(s.title) + '</a>';
    }).join('') + '<a class="nav__link" href="#rules"><em>—</em>Rules</a>';
    set('#navLinks', items);
    set('#drawerList', SECTIONS.map(function (s) {
      return '<li><a href="#s' + esc(s.n) + '"><em>' + esc(s.n) + '</em>' + esc(s.title) +
             '<b>' + s.formula.total + '</b></a></li>';
    }).join('') + '<li><a href="#rules"><em>—</em>Rules</a></li>');
  }

  /* ------------------------------------------------------------- rules --- */

  function renderRules() {
    set('#light', RULES.light.map(function (l) {
      return '<li><b>' + esc(l.t) + '</b><i>' + esc(l.f) + '</i></li>';
    }).join(''));

    set('#ratios', RATIOS.map(function (r) {
      return '<figure class="rf"><div class="rf__box" style="--ar:' + r.r.replace(':', ' / ') + '">' +
        esc(r.r) + '</div><figcaption>' + esc(r.l) + '</figcaption></figure>';
    }).join(''));

    var li = function (t) { return '<li>' + esc(t) + '</li>'; };
    set('#deliver', RULES.deliver.map(li).join(''));

    var cast = $('#casting'); if (cast) cast.textContent = CASTING;

    var k = $('#heroKick');
    if (k) k.textContent = META.document + ' · ' + META.version + ' · ' + META.date;

    // Counted from the data so adding a section can never leave this stale.
    var words = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'];
    var lede = $('#heroLede');
    if (lede) {
      lede.textContent = (words[SECTIONS.length] || SECTIONS.length) + ' sections. ' +
                         SECTIONS[0].formula.total + ' photos each.';
    }

    // Final tally, added up from the sections rather than typed in.
    set('#total',
      '<div class="total__sum rv">' +
        '<span class="total__part"><b>' + SECTIONS.length + '</b><i>Sections</i></span>' +
        '<span class="total__op">&times;</span>' +
        '<span class="total__part"><b>' + SECTIONS[0].formula.total + '</b><i>Photos each</i></span>' +
        '<span class="total__op total__op--eq">=</span>' +
        '<span class="total__grand"><b>' + TOTAL + '</b><i>Photos per project</i></span>' +
      '</div>' +
      '<ul class="total__rows rv">' +
        SECTIONS.map(function (s) {
          return '<li><em>' + esc(s.n) + '</em>' + esc(s.title) + '<b>' + s.formula.total + '</b></li>';
        }).join('') +
      '</ul>');
  }

  /* --------------------------------------------------------- behaviour --- */

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
        sections.forEach(function (s) { if (s.offsetTop <= line) cur = s.dataset.nav; });
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
    if (typeof SECTIONS === 'undefined') return;
    renderNav();
    renderSections();
    renderRules();
    initNav();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
