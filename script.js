/* JAS Robotics — accessible mobile-nav toggle.
   This is the only JavaScript on the site (brief §10).
   No storage, no network, no other behaviour. */
(function () {
  'use strict';

  // Mark JS availability so CSS collapses the mobile nav only
  // when the toggle can actually open it again.
  document.documentElement.classList.add('js');

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    document.body.classList.toggle('nav-open', !open);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
})();
