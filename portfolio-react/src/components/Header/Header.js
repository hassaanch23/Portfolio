import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'resume', 'portfolio', 'testimonials', 'contact']; // Added 'skills'
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header id="header" className={`header dark-background ${isMenuOpen ? 'header-show' : ''}`}>
      <div className="header-toggle d-xl-none" onClick={toggleMenu}>
        {isMenuOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
      </div>

      <div className="profile-img">
        <img src="/assets/img/my-profile-img.jpg" alt="Profile" className="img-fluid rounded-circle" />
      </div>

      <a href="#hero" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Muhammad Hassaan</h1>
      </a>

      <div className="social-links text-center">
        <a href="https://github.com/hassaanch23" target="_blank" rel="noopener noreferrer" className="github" title="GitHub">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://linkedin.com/in/muhammad-hassaan-4063b2247" target="_blank" rel="noopener noreferrer" className="linkedin" title="LinkedIn">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://deviserstech.com/" target="_blank" rel="noopener noreferrer" className="website" title="Website">
          <i className="bi bi-globe"></i>
        </a>
        <a href="mailto:imhassaan04@gmail.com" className="email" title="Email">
          <i className="bi bi-envelope"></i>
        </a>
        <a href="tel:03284488438" className="phone" title="Phone">
          <i className="bi bi-telephone"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a 
              href="#hero" 
              className={activeSection === 'hero' ? 'active' : ''}
              onClick={() => scrollToSection('hero')}
            >
              <i className="bi bi-house navicon"></i>Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => scrollToSection('about')}
            >
              <i className="bi bi-person navicon"></i> About
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={() => scrollToSection('skills')}
            >
              <i className="bi bi-gear navicon"></i> Skills
            </a>
          </li>
          <li>
            <a 
              href="#resume" 
              className={activeSection === 'resume' ? 'active' : ''}
              onClick={() => scrollToSection('resume')}
            >
              <i className="bi bi-file-text navicon"></i> Resume
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              className={activeSection === 'portfolio' ? 'active' : ''}
              onClick={() => scrollToSection('portfolio')}
            >
              <i className="bi bi-images navicon"></i> Portfolio
            </a>
          </li>
          <li>
            <a 
              href="#testimonials" 
              className={activeSection === 'testimonials' ? 'active' : ''}
              onClick={() => scrollToSection('testimonials')}
            >
              <i className="bi bi-award navicon"></i> Certificates
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => scrollToSection('contact')}
            >
              <i className="bi bi-envelope navicon"></i> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
