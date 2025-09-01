import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Preloader from './components/Preloader/Preloader';

function App() {
  useEffect(() => {
    // Initialize AOS
    const initAOS = async () => {
      try {
        const AOS = await import('aos');
        AOS.default.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      } catch (error) {
        console.warn('AOS initialization failed:', error);
      }
    };
    
    initAOS();
  }, []);

  return (
    <div className="App">
      <Preloader />
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
