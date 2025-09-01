import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>My educational background and professional experience in software development and engineering</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>BS Software Engineering</h4>
              <h5>2022 - Present</h5>
              <p><em>FAST NUCES, Lahore, Pakistan</em></p>
              <p>Currently pursuing my degree with focus on software development, algorithms, and modern web technologies. Completed several university projects in web development and programming.</p>
            </div>
            <div className="resume-item">
              <h4>Intermediate Pre-Engineering</h4>
              <h5>2020 - 2022</h5>
              <p><em>The Leaders College, Bahawalpur, Pakistan</em></p>
              <p>Completed intermediate studies with focus on mathematics, physics, and computer science fundamentals.</p>
            </div>
            <div className="resume-item">
              <h4>Matriculation</h4>
              <h5>2018 - 2020</h5>
              <p><em>Alpina School, Bahawalpur, Pakistan</em></p>
              <p>Completed secondary education with strong foundation in science and mathematics.</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Full Stack Developer Intern</h4>
              <h5>06/2025 - 07/2025</h5>
              <p><em>DevisersTech, Lahore, Pakistan</em></p>
              <ul>
                <li>Worked on fintech applications using Spring Boot and React.js for a project with Ziraat Bank (Saudi Arabia)</li>
                <li>Developed and tested REST APIs, implemented user and statement management modules</li>
                <li>Wrote unit tests using JUnit and Mockito for robust code quality</li>
                <li>Collaborated in an agile team using Git for version control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
