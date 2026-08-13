/* ==========================================================================
   REAL ESTATE PHOTOGRAPHY DIRECTION — UI
   One page per project. The page sets PROJECT_ID before this script runs;
   everything else is rendered from PROJECTS in data.js, so all three pages
   share this file and no markup is duplicated.
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

  var project = null;

  /* ------------------------------------------------------------ switcher */

  function renderSwitcher() {
    set('#projects', PROJECTS.map(function (p) {
      return '<a class="pswitch__i' + (p.id === project.id ? ' is-on' : '') + '" href="' + esc(p.file) + '">' +
        '<b>' + esc(p.name) + '</b><span>' + esc(p.type) + '</span></a>';
    }).join(''));
  }

  /* -------------------------------------------------------------- header */

  function renderHead() {
    var k = $('#heroKick');
    if (k) k.textContent = META.document + ' · ' + META.version + ' · ' + META.date;

    var t = $('#heroTitle');
    if (t) t.innerHTML = esc(project.name) + '<br><span class="is-accent">' + esc(project.nameAr) + '</span>';

    var l = $('#heroLede'); if (l) l.textContent = project.lede;

    set('#heroFacts', [project.type, project.place].concat(project.facts)
      .map(function (f) { return '<li>' + esc(f) + '</li>'; }).join(''));

    document.title = project.name + ' — Photography Direction';
  }

  /* ------------------------------------------------------------ sections */

  function Formula(f) {
    return '<div class="fx rv">' +
      f.parts.map(function (p, i) {
        return (i ? '<span class="fx__op">&times;</span>' : '') +
          '<span class="fx__part"><b>' + esc(p.v) + '</b><i>' + p.l + '</i></span>';
      }).join('') +
      '<span class="fx__op fx__op--eq">=</span>' +
      '<span class="fx__total"><b>' + f.total + '</b><i>Photos</i></span>' +
    '</div>';
  }

  function renderSections() {
    set('#sections', project.sections.map(function (s) {
      var tiles = s.images.map(function (src, i) {
        return '<figure class="tile rv" style="--d:' + (i * 45) + 'ms">' +
          '<img src="' + esc(src) + '" alt="' + esc(s.title) + ' reference" loading="lazy">' +
          '<figcaption class="tile__ai">Reference</figcaption>' +
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

  /* ---------------------------------------------------------------- nav */

  function renderNav() {
    set('#navLinks', project.sections.map(function (s) {
      return '<a class="nav__link" href="#s' + esc(s.n) + '"><em>' + esc(s.n) + '</em>' + esc(s.title) + '</a>';
    }).join('') + '<a class="nav__link" href="#rules"><em>—</em>Rules</a>');

    set('#drawerList',
      PROJECTS.map(function (p) {
        return '<li class="drawer__p' + (p.id === project.id ? ' is-on' : '') + '">' +
          '<a href="' + esc(p.file) + '"><em>' + (p.id === project.id ? '●' : '○') + '</em>' +
          esc(p.name) + '<b>' + p.total + '</b></a></li>';
      }).join('') +
      '<li class="drawer__sep"></li>' +
      project.sections.map(function (s) {
        return '<li><a href="#s' + esc(s.n) + '"><em>' + esc(s.n) + '</em>' + esc(s.title) +
               '<b>' + s.formula.total + '</b></a></li>';
      }).join('') +
      '<li><a href="#rules"><em>—</em>Rules</a></li>');
  }

  /* -------------------------------------------------------------- strips */

  function renderStrips() {
    set('#ratios', RATIOS.map(function (x) {
      return '<figure class="rf"><div class="rf__box" style="--ar:' + x.r.replace(':', ' / ') + '">' +
        esc(x.r) + '</div><figcaption>' + esc(x.l) + '</figcaption></figure>';
    }).join(''));

    var cast = $('#casting'); if (cast) cast.textContent = CASTING;

    set('#light', RULES.light.map(function (l) {
      return '<li><b>' + esc(l.t) + '</b><i>' + esc(l.f) + '</i></li>';
    }).join(''));
    set('#deliver', RULES.deliver.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join(''));

    // Totals, added up from the sections rather than typed in.
    set('#total',
      '<div class="total__sum rv">' +
        '<span class="total__part"><b>' + project.sections.length + '</b><i>Sections</i></span>' +
        '<span class="total__op">&times;</span>' +
        '<span class="total__part"><b>' + project.sections[0].formula.total + '</b><i>Photos each</i></span>' +
        '<span class="total__op total__op--eq">=</span>' +
        '<span class="total__grand"><b>' + project.total + '</b><i>Photos · ' + esc(project.name) + '</i></span>' +
      '</div>' +
      '<ul class="total__rows rv">' +
        project.sections.map(function (s) {
          return '<li><em>' + esc(s.n) + '</em>' + esc(s.title) + '<b>' + s.formula.total + '</b></li>';
        }).join('') +
      '</ul>' +
      '<p class="total__all rv">All three projects together: <b>' +
        PROJECTS.reduce(function (n, p) { return n + p.total; }, 0) + '</b> photos.</p>');
  }

  /* ----------------------------------------------------------- behaviour */

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
    if (typeof PROJECTS === 'undefined') return;
    var id = (typeof PROJECT_ID !== 'undefined') ? PROJECT_ID : PROJECTS[0].id;
    project = PROJECTS.filter(function (p) { return p.id === id; })[0] || PROJECTS[0];

    renderSwitcher();
    renderHead();
    renderNav();
    renderSections();
    renderStrips();
    initNav();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
