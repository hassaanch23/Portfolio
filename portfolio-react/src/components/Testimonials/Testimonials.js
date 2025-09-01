import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      name: "Full Stack Web Development",
      company: "Coursera",
      image: "/assets/img/certificates/coursera-fullstack.jpg",
      link: "https://coursera.org/verify/example1",
      description: "Comprehensive course covering frontend and backend development technologies."
    },
    {
      id: 2,
      name: "React.js Development",
      company: "Udemy",
      image: "/assets/img/certificates/udemy-react.jpg",
      link: "https://udemy.com/certificate/example2",
      description: "Advanced React.js course with hooks, context, and modern practices."
    },
    {
      id: 3,
      name: "Node.js Backend Development",
      company: "freeCodeCamp",
      image: "/assets/img/certificates/freecodecamp-nodejs.jpg",
      link: "https://freecodecamp.org/certification/example3",
      description: "Backend development with Node.js, Express, and MongoDB."
    },
    {
      id: 4,
      name: "Python Programming",
      company: "edX",
      image: "/assets/img/certificates/edx-python.jpg",
      link: "https://edx.org/certificate/example4",
      description: "Python programming fundamentals and data structures."
    },
    {
      id: 5,
      name: "Machine Learning Basics",
      company: "Stanford Online",
      image: "/assets/img/certificates/stanford-ml.jpg",
      link: "https://stanford.edu/certificate/example5",
      description: "Introduction to machine learning algorithms and applications."
    },
    {
      id: 6,
      name: "AWS Cloud Practitioner",
      company: "Amazon Web Services",
      image: "/assets/img/certificates/aws-cloud.jpg",
      link: "https://aws.amazon.com/certification/example6",
      description: "AWS cloud fundamentals and best practices."
    }
  ];

  const cardsPerScreen = 3;
  const totalSlides = Math.ceil(certificates.length / cardsPerScreen);

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

  const getVisibleCertificates = () => {
    const startIndex = currentIndex * cardsPerScreen;
    return certificates.slice(startIndex, startIndex + cardsPerScreen);
  };

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-title">
          <h2>Certificates</h2>
          <p>Professional certifications and achievements that demonstrate my expertise in various technologies and methodologies.</p>
        </div>

        <div className="certificates-carousel">
          <button 
            className="carousel-arrow carousel-arrow-left" 
            onClick={goToPrevious}
            aria-label="Previous certificates"
          >
            <i className="bi bi-chevron-left"></i>
            <span>‹</span>
          </button>

          <div className="certificates-container">
            {getVisibleCertificates().map((certificate) => (
              <div key={certificate.id} className="certificate-card" data-aos="fade-up">
                <div className="certificate-image">
                  <img src={certificate.image} alt={certificate.name} />
                </div>
                <div className="certificate-content">
                  <h4>{certificate.name}</h4>
                  <p className="company">{certificate.company}</p>
                  <p className="description">{certificate.description}</p>
                  <a 
                    href={certificate.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-certificate-btn"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>

          <button 
            className="carousel-arrow carousel-arrow-right" 
            onClick={goToNext}
            aria-label="Next certificates"
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

export default Testimonials;
