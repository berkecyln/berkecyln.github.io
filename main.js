/* Theme toggle, sticky nav border, scroll spy, footer year.
   No dependencies. Everything works without JS, just less politely. */
(function () {
  'use strict';

  var root = document.documentElement;

  /* Theme */
  var KEY = 'bc-theme';
  var toggle = document.getElementById('themeToggle');

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (toggle) {
      toggle.setAttribute('aria-label',
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) { /* private mode */ }
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(stored || (prefersDark ? 'dark' : 'light'));

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) { /* ignore */ }
    });
  }

  /* Hairline under the nav once the page scrolls */
  var nav = document.getElementById('nav');
  function onScroll() { if (nav) nav.classList.toggle('is-stuck', window.scrollY > 4); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Scroll spy */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__links a'));
  var sections = links
    .map(function (link) { return document.querySelector(link.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var onScreen = Object.create(null);
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        onScreen[entry.target.id] = entry.isIntersecting;
      });
      var current = sections.filter(function (s) { return onScreen[s.id]; })[0];
      links.forEach(function (link) {
        link.classList.toggle('is-active',
          !!current && link.getAttribute('href') === '#' + current.id);
      });
    }, { rootMargin: '-60px 0px -55% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* Footer year */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
