import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>I am a passionate coder and a Software Engineering student at FAST NUCES. I have completed several university projects in web development. While I excel in C++ and React, I have also gained proficiency in Java through coursework. Recently, I've developed a strong interest in AI and Machine Learning, and I am actively exploring opportunities in this domain through internships and hands-on projects.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="/assets/img/my-profile-img.jpg" className="img-fluid" alt="Profile" />
          </div>
          <div className="col-lg-8 content">
            <h2>Software Engineering Student &amp; Full Stack Developer.</h2>
            <p className="fst-italic py-3">
              Passionate about creating innovative solutions and exploring new technologies. Currently pursuing my degree while gaining practical experience through internships and personal projects.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Muhammad Hassaan</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>deviserstech.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+92 328 4488438</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Lahore, Pakistan</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BS Software Engineering</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>University:</strong> <span>FAST NUCES</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>imhassaan04@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              I am currently a Software Engineering student at FAST NUCES with a strong foundation in both front-end and back-end development. My expertise includes React.js, Node.js, MongoDB, and various programming languages. I have completed several university projects and recently worked as a Full Stack Developer Intern at DevisersTech, where I contributed to fintech applications using Spring Boot and React.js. I am particularly interested in AI and Machine Learning and am actively seeking opportunities to expand my knowledge in these domains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
