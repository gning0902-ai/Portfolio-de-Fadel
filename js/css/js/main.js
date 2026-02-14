// Menu mobile
var menuBtn = document.getElementById('menu-btn');
var mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
});

// Fermer menu mobile
var mobileLinks = mobileMenu.querySelectorAll('a');
for (var i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].addEventListener('click', function () {
    mobileMenu.classList.add('hidden');
  });
}

// Scroll to top
var scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    scrollBtn.style.opacity = '1';
  } else {
    scrollBtn.style.opacity = '0';
  }
});

scrollBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Active navigation
var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function () {
  var current = '';
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
