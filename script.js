// === Toggle nav menu on hamburger click ===
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

document.getElementById("menu-toggle").addEventListener("click", toggleMenu);

// === Smooth scroll behavior and close menu after click ===
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

// === Highlight active link while scrolling ===
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

// === Preloader & Typing Animation ===
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }

  document.body.classList.add('loaded');

  const typedTarget = document.getElementById("typed");
  if (typedTarget) {
    typeText("Hi, I'm Martin Vu", typedTarget, 100);
  }
});

function typeText(text, element, speed) {
  let i = 0;
  function typeChar() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    }
  }
  typeChar();
}
