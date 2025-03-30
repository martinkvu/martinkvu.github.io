// Smooth scroll to sections on clicking navigation links
document.querySelectorAll('.nav-container a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Function to highlight the active navigation link based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-container a');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

// Optional: Adding active class to navigation links when scrolling
document.querySelectorAll('.nav-container a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-container a').forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});
