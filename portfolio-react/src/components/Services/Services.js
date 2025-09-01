import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <i className="bi bi-code-slash"></i>,
      title: 'Full Stack Development',
      description: 'Building complete web applications using modern technologies like React.js, Node.js, MongoDB, and Express.js. Creating responsive and scalable solutions from frontend to backend.'
    },
    {
      icon: <i className="bi bi-phone"></i>,
      title: 'Web Application Development',
      description: 'Developing interactive web applications with modern UI/UX principles. Specializing in React.js for frontend development and creating seamless user experiences.'
    },
    {
      icon: <i className="bi bi-database"></i>,
      title: 'Database Design & Management',
      description: 'Designing and implementing database solutions using MongoDB, MySQL, and Firebase. Ensuring data integrity and optimal performance for applications.'
    },
    {
      icon: <i className="bi bi-gear"></i>,
      title: 'API Development',
      description: 'Creating robust REST APIs using Node.js and Express.js. Implementing authentication, data validation, and integration with various services and databases.'
    },
    {
      icon: <i className="bi bi-lightbulb"></i>,
      title: 'Problem Solving',
      description: 'Analyzing complex technical challenges and developing efficient solutions. Applying algorithmic thinking and software engineering principles to solve real-world problems.'
    },
    {
      icon: <i className="bi bi-graph-up"></i>,
      title: 'AI & Machine Learning',
      description: 'Exploring and implementing AI/ML solutions. Currently learning and working on projects involving data science, machine learning algorithms, and AI applications.'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Areas of expertise and services I can provide based on my technical skills and experience in software development</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="icon flex-shrink-0">{service.icon}</div>
              <div>
                <h4 className="title">{service.title}</h4>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
