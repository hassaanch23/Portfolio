import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">Muhammad Hassaan</strong> <span>All Rights Reserved</span> {currentYear}</p>
        </div>
        <div className="credits text-center">
          <p>Software Engineering Student & Full Stack Developer</p>
          <p>Contact: <a href="mailto:imhassaan04@gmail.com">imhassaan04@gmail.com</a> | <a href="tel:+923284488438">+92 328 4488438</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
