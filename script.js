document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");
    const desktopNav = document.querySelector(".desktop-nav");
    const typedTarget = document.getElementById("typed");
    const preloader = document.getElementById("preloader");
    const navbar = document.querySelector('.navbar');

    // === Toggle navigation menu (Mobile) ===
    function toggleMenu() {
        nav.classList.toggle("active");
        menuToggle.classList.toggle("open");
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
                nav.classList.remove("active");
                menuToggle.classList.remove("open");
                document.body.classList.remove("no-scroll");
            }
        });
    });

    // === Close the menu when clicking outside (Mobile) ===
    document.addEventListener("click", function (e) {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove("active");
            menuToggle.classList.remove("open");
            document.body.classList.remove("no-scroll");
        }
    });

    // === Highlight current nav link based on scroll position ===
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

        // Toggle the navbar background on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
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

    // === Navbar background change on section scroll ===
    const sectionsToObserve = ['#about', '#skills', '#experience', '#projects', '#contact'];
    sectionsToObserve.forEach(sectionId => {
        const section = document.querySelector(sectionId);
        if (section) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            navbar.classList.add('scrolled');
                        } 
                    });
                },
                { root: null, threshold: 0.1 }
            );
            observer.observe(section);
        }
    });
});
