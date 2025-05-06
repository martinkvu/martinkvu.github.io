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

  // === Handle Preloader ===
  const preloader = document.getElementById('preloader');
  const typedTarget = document.getElementById('typed');

  if (preloader) {
    setTimeout(() => {
      // Hide the preloader
      preloader.style.display = 'none';
      document.body.classList.add('loaded');

      // Start typing animation AFTER preloader disappears
      if (typedTarget) {
        typedTarget.textContent = ""; // Clear existing text
        new Typed("#typed", {
          stringsElement: "#typed-strings",
          typeSpeed: 1,
          backSpeed: 0,
          backDelay: 0,
          loop: false,
          showCursor: false,
          onComplete: () => {
            typedTarget.classList.add("done-typing");
            const cursor = document.querySelector(".typed-cursor");
            if (cursor) cursor.style.display = "none";
          }
        });
      }
    }, 300); // Delay matches any fade-out animation (adjust as needed)
  } else {
    // If no preloader exists, initialize Typed.js immediately
    if (typedTarget) {
      typedTarget.textContent = "";
      new Typed("#typed", {
        stringsElement: "#typed-strings",
        typeSpeed: 0,
        backSpeed: 0,
        backDelay: 0,
        loop: false,
        showCursor: true,
        onComplete: () => {
          typedTarget.classList.add("done-typing");
          const cursor = document.querySelector(".typed-cursor");
          if (cursor) cursor.style.display = "none";
        }
      });
    }
  }
});
