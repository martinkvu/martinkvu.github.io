 document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
  const desktopNav = document.querySelector(".desktop-nav");
  const typedTarget = document.getElementById("typed");
  const preloader = document.getElementById("preloader");

  // === Toggle navigation menu ===
  function toggleMenu() {
    menuToggle.classList.toggle("open");
    nav.classList.toggle("active");
    document.body.classList.toggle("no-scroll", nav.classList.contains("active"));
  }

  // === Hamburger click toggle ===
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  // === Smooth scroll + close dropdown on click ===
  document.querySelectorAll('.dropdown-menu a, .desktop-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (window.innerWidth <= 1024) {
        menuToggle.classList.remove("open");
        nav.classList.remove("active");
        document.body.classList.remove("no-scroll");
      }
    });
  });

  // === Highlight current nav link ===
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.desktop-nav a, .dropdown-menu a');
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
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

  // === Preloader + Typed.js animation ===
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.style.display = "none";
        document.body.classList.add("loaded");

        if (typedTarget) {
          typedTarget.textContent = "";
          new Typed("#typed", {
            stringsElement: "#typed-strings",
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: false,
            showCursor: false,
            onComplete: () => {
              typedTarget.classList.add("done-typing");
              const cursor = document.querySelector(".typed-cursor");
              if (cursor) cursor.style.display = "none";
            }
          });
        }
      }, 1500);
    });
  }

  // === Close menu on outside click (for mobile) ===
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove("active");
      menuToggle.classList.remove("open");
      document.body.classList.remove("no-scroll");
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const aboutSection = document.querySelector('#about');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbar.classList.add('scrolled'); // Solid navy when "About" appears
        } else {
          navbar.classList.remove('scrolled'); // Transparent when not in view
        }
      });
    },
    {
      root: null,       // Use the viewport as the root
      threshold: 0.1,   // Trigger when 10% of the element is visible
    }
  );

  // Observe the about section
  observer.observe(aboutSection);
});

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const aboutSection = document.querySelector('#skills');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbar.classList.add('scrolled'); // Solid navy when "About" appears
        } else {
          navbar.classList.remove('scrolled'); // Transparent when not in view
        }
      });
    },
    {
      root: null,       // Use the viewport as the root
      threshold: 0.1,   // Trigger when 10% of the element is visible
    }
  );

  // Observe the about section
  observer.observe(aboutSection);
});
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const aboutSection = document.querySelector('#experience');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbar.classList.add('scrolled'); // Solid navy when "About" appears
        } else {
          navbar.classList.remove('scrolled'); // Transparent when not in view
        }
      });
    },
    {
      root: null,       // Use the viewport as the root
      threshold: 0.1,   // Trigger when 10% of the element is visible
    }
  );

  // Observe the about section
  observer.observe(aboutSection);
});
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const aboutSection = document.querySelector('#projects');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbar.classList.add('scrolled'); // Solid navy when "About" appears
        } else {
          navbar.classList.remove('scrolled'); // Transparent when not in view
        }
      });
    },
    {
      root: null,       // Use the viewport as the root
      threshold: 0.1,   // Trigger when 10% of the element is visible
    }
  );

  // Observe the about section
  observer.observe(aboutSection);
});

document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const aboutSection = document.querySelector('#contact');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbar.classList.add('scrolled'); // Solid navy when "About" appears
        } else {
          navbar.classList.remove('scrolled'); // Transparent when not in view
        }
      });
    },
    {
      root: null,       // Use the viewport as the root
      threshold: 0.1,   // Trigger when 10% of the element is visible
    }
  );

  // Observe the about section
  observer.observe(aboutSection);
});