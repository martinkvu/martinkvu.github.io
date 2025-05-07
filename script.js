document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
  const desktopNav = document.querySelector(".desktop-nav");
  const typedTarget = document.getElementById("typed");
  const preloader = document.getElementById("preloader");

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
      // Close menu on mobile
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
    }, 1500); // Adjust to match your preloader duration
  }
});
