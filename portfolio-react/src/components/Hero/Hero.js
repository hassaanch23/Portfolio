import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <img src="/assets/img/hero-bg.jpg" alt="Hero Background" data-aos="fade-in" />
      
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Muhammad Hassaan</h2>
        <p>
          I'm{' '}
          <span className="typed">
            Software Engineer
          </span>
          <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
