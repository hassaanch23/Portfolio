import React, { useState, useEffect } from 'react';
import './ScrollTop.css';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="#" 
      id="scroll-top" 
      className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
    >
             <i className="bi bi-arrow-up"></i>
    </a>
  );
};

export default ScrollTop;
