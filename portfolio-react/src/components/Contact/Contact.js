import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Get in touch with me for collaboration opportunities, project discussions, or any inquiries about my work</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Me</h3>
                  <p>+92 328 4488438</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Me</h3>
                  <p>imhassaan04@gmail.com</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-linkedin flex-shrink-0"></i>
                <div>
                  <h3>LinkedIn</h3>
                  <p><a href="https://linkedin.com/in/muhammad-hassaan-4063b2247" target="_blank" rel="noopener noreferrer">muhammad-hassaan-4063b2247</a></p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="600">
                <i className="bi bi-github flex-shrink-0"></i>
                <div>
                  <h3>GitHub</h3>
                  <p><a href="https://github.com/hassaanch23" target="_blank" rel="noopener noreferrer">hassaanch23</a></p>
                </div>
              </div>

              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905c4e0c0b5b5%3A0x4c0b8c0b8c0b8c0b!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890!5m2!1sen!2s" 
                frameBorder="0" 
                style={{border:0, width: '100%', height: '270px'}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7">
            <form className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" className="form-control" required="" />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email-field" required="" />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject-field" required="" />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea className="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
