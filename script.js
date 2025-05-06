// === Toggle nav menu on hamburger or close (×) click ===
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");

  // Prevent background scroll when menu is open
  document.body.classList.toggle("no-scroll", nav.classList.contains("active"));
}

// === DOM Ready ===
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  // Hamburger menu toggle
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  // Smooth scroll and auto-close on nav link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      nav.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });

  // Highlight active nav link based on scroll position
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-links a');
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Hide preloader if exists
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
  document.body.classList.add('loaded');

  // Initialize Typed.js
  const typedTarget = document.getElementById("typed");
  if (typedTarget) {
    new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 0,
      loop: false,
       onComplete: () => {
    document.getElementById("typed").classList.add("done-typing");
  }
    });
  }
});
