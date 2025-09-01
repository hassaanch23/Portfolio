import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "/assets/img/portfolio/portfolio-1.jpg",
      demo: "https://demo-ecommerce.com",
      github: "https://github.com/hassaanch23/ecommerce-platform",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      features: ["User authentication", "Product catalog", "Shopping cart", "Payment integration"]
    },
    {
      id: 2,
      title: "Task Management App",
      category: "app",
      image: "/assets/img/portfolio/portfolio-2.jpg",
      demo: "https://demo-taskapp.com",
      github: "https://github.com/hassaanch23/task-management",
      technologies: ["React Native", "Firebase", "Redux"],
      features: ["Task creation", "Priority levels", "Team collaboration", "Real-time updates"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      category: "web",
      image: "/assets/img/portfolio/portfolio-3.jpg",
      demo: "https://demo-weather.com",
      github: "https://github.com/hassaanch23/weather-dashboard",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
      features: ["Current weather", "5-day forecast", "Interactive charts", "Location search"]
    },
    {
      id: 4,
      title: "Social Media Analytics",
      category: "data",
      image: "/assets/img/portfolio/portfolio-4.jpg",
      demo: "https://demo-analytics.com",
      github: "https://github.com/hassaanch23/social-analytics",
      technologies: ["Python", "Django", "PostgreSQL", "D3.js"],
      features: ["Data visualization", "Trend analysis", "Report generation", "Real-time monitoring"]
    },
    {
      id: 5,
      title: "AI Chatbot",
      category: "ai",
      image: "/assets/img/portfolio/portfolio-5.jpg",
      demo: "https://demo-chatbot.com",
      github: "https://github.com/hassaanch23/ai-chatbot",
      technologies: ["Python", "TensorFlow", "Flask", "NLTK"],
      features: ["Natural language processing", "Context awareness", "Multi-language support", "Learning capabilities"]
    },
    {
      id: 6,
      title: "Mobile Banking App",
      category: "app",
      image: "/assets/img/portfolio/portfolio-6.jpg",
      demo: "https://demo-banking.com",
      github: "https://github.com/hassaanch23/mobile-banking",
      technologies: ["Flutter", "Node.js", "MySQL", "AWS"],
      features: ["Account management", "Fund transfers", "Transaction history", "Security features"]
    }
  ];

  const filters = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Apps" },
    { id: "app", name: "Mobile Apps" },
    { id: "data", name: "Data Science" },
    { id: "ai", name: "AI/ML" }
  ];

  const cardsPerScreen = 3;
  const totalSlides = Math.ceil(portfolioItems.length / cardsPerScreen);

  const goToPrevious = () => {
    setCurrentIndex(current => 
      current === 0 ? totalSlides - 1 : current - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(current => 
      current === totalSlides - 1 ? 0 : current + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleProjects = () => {
    const startIndex = currentIndex * cardsPerScreen;
    return portfolioItems.slice(startIndex, startIndex + cardsPerScreen);
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>A showcase of my projects demonstrating full-stack development skills, from web applications to mobile apps and AI solutions.</p>
        </div>

        <div className="portfolio-carousel">
          <button 
            className="carousel-arrow carousel-arrow-left" 
            onClick={goToPrevious}
            aria-label="Previous projects"
          >
            <i className="bi bi-chevron-left"></i>
            <span>‹</span>
          </button>

          <div className="portfolio-container">
            {getVisibleProjects().map((project) => (
              <div key={project.id} className="portfolio-item" data-aos="fade-up">
                <div className="portfolio-wrap">
                  <div className="portfolio-image">
                    <img src={project.image} alt={project.title} />
                    <div className="portfolio-overlay">
                      <div className="overlay-content">
                        <h4>{project.title}</h4>
                        <div className="overlay-buttons">
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="demo-btn"
                          >
                            <i className="bi bi-eye"></i> Live Demo
                          </a>
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="github-btn"
                          >
                            <i className="bi bi-github"></i> GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <h4>{project.title}</h4>
                    <div className="technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="features">
                      <h5>Key Features:</h5>
                      <ul>
                        {project.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="portfolio-buttons">
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <i className="bi bi-eye"></i> Live Demo
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        <i className="bi bi-github"></i> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="carousel-arrow carousel-arrow-right" 
            onClick={goToNext}
            aria-label="Next projects"
          >
            <i className="bi bi-chevron-right"></i>
            <span>›</span>
          </button>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
