// Toggle nav menu on hamburger click
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

// Smooth scroll behavior
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    document.getElementById("nav-links").classList.remove("active");
  });
});

// Highlight active link while scrolling
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
