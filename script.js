document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("nav-links");
  const desktopNav = document.querySelector(".desktop-nav");
  const typedTarget = document.getElementById("typed");
  const preloader = document.getElementById("preloader");
  const navbar = document.querySelector(".navbar");
  const header = document.querySelector("header");

  // Lock scroll during preloading
  document.body.classList.add("preloading");

  // ✅ Calculate scrollbar width early to prevent layout shift
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty('--scrollbar-width', `0px`);

  // === Toggle navigation menu (Mobile) ===
  function toggleMenu() {
    if (nav.classList.contains("active")) {
      nav.classList.add("closing");
      nav.classList.remove("active");
      menuToggle.classList.remove("open");
      document.body.classList.remove("no-scroll");
      setTimeout(() => {
        nav.classList.remove("closing");
      }, 400);
    } else {
      nav.classList.remove("closing");
      nav.classList.add("active");
      menuToggle.classList.add("open");
      document.body.classList.add("no-scroll");
    }
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  // === Smooth scroll + close dropdown ===
  document.querySelectorAll(".dropdown-menu a, .desktop-nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute("href"));
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (window.innerWidth <= 1024 && nav.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // === Close menu when clicking outside (Mobile) ===
  document.addEventListener("click", function (e) {
    const isMenuClick = nav.contains(e.target) || menuToggle.contains(e.target);
    if (!isMenuClick && nav.classList.contains("active")) {
      toggleMenu();
    }
  });

  // === Highlight nav link based on scroll position ===
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".desktop-nav a, .dropdown-menu a");
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

  // === Navbar background change based on scroll ===
  function updateNavbar() {
    const scrollY = window.scrollY;
    const headerHeight = header.offsetHeight;
    if (scrollY > headerHeight - 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateNavbar);
  updateNavbar();

  // === Preloader: finalize layout after full load ===
 window.addEventListener("load", () => {
  // Scrollbar width (already set early in DOMContentLoaded)
  if (preloader) {
    preloader.style.transition = "opacity 0.5s ease";
  }

  // Apply temporary padding to body to simulate scrollbar
  document.body.style.paddingRight = `${scrollbarWidth}px`;

  setTimeout(() => {
    if (preloader) {
      preloader.style.opacity = "0";
      document.body.classList.add("loaded");

      setTimeout(() => {
        preloader.style.display = "none";
        document.body.classList.remove("preloading");

        // ✅ Remove fake scrollbar padding after layout is stable
        document.body.style.paddingRight = "0px";
      }, 500);
    }

    // Start Typed.js
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
  }, 300);
});
});
