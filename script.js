document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("nav-links");
  const desktopNav = document.querySelector(".desktop-nav");
  const typedTarget = document.getElementById("typed");
  const preloader = document.getElementById("preloader");
  const navbar = document.querySelector(".navbar");
  const header = document.querySelector("header");
// === Step 1: Dynamically set scrollbar width as CSS variable ===
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

  // === Toggle navigation menu (Mobile) ===
function toggleMenu() {
  if (nav.classList.contains("active")) {
    // Start closing animation
    nav.classList.add("closing");
    nav.classList.remove("active");
    menuToggle.classList.remove("open");
    document.body.classList.remove("no-scroll");

    // Fully remove after animation
    setTimeout(() => {
      nav.classList.remove("closing");
    }, 400); // match CSS transition time
  } else {
    // Ensure clean state
    nav.classList.remove("closing");
    nav.classList.add("active");
    menuToggle.classList.add("open");
    document.body.classList.add("no-scroll");
  }
}


  // ✅ Attach click only once after function is defined
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", toggleMenu);
  } else {
    console.error("menuToggle or nav not found");
  }

  // === Smooth scroll + close dropdown on link click ===
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

  // === Highlight current nav link based on scroll position ===
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

  // === Navbar background change based on scroll position ===
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
});
