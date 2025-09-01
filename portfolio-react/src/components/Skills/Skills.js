import React from 'react';
import './Skills.css';

const Skills = () => {
  const frontendSkills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'XML', 'Dart'
  ];

  const backendSkills = [
    'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Firebase', 'C++', 'C', 'Java'
  ];

  const otherSkills = [
    'Digital Marketing', 'Problem Solving', 'Git', 'REST APIs', 'Agile Development'
  ];

  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Technical skills and technologies I've worked with throughout my academic and professional journey</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="skills-category">
              <h3 className="skills-heading">
                <i className="bi bi-display"></i> Frontend Skills
              </h3>
              <div className="skills-list">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <i className="bi bi-check-circle"></i>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="skills-category">
              <h3 className="skills-heading">
                <i className="bi bi-server"></i> Backend Skills
              </h3>
              <div className="skills-list">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <i className="bi bi-check-circle"></i>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="skills-category">
              <h3 className="skills-heading">
                <i className="bi bi-tools"></i> Other Skills
              </h3>
              <div className="skills-list">
                {otherSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <i className="bi bi-check-circle"></i>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
