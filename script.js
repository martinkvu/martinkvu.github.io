import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef({});

  // Toggle menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = Object.keys(sectionRefs.current);

      for (let id of sections) {
        const section = sectionRefs.current[id];
        if (section) {
          const top = section.offsetTop - 120;
          if (scrollY >= top) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuActive(false);
  };

  // Sections for demo
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <>
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {sections.map((id) => (
        <section
          id={id}
          key={id}
          ref={(el) => (sectionRefs.current[id] = el)}
          style={{ height: '100vh', paddingTop: '120px' }}
        >
          <h2>{id.charAt(0).toUpperCase() + id.slice(1)}</h2>
        </section>
      ))}
    </>
  );
};

export default Navbar;
