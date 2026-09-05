import React from 'react';

const About = () => (
  <section id="about" className="py-5" data-aos="fade-up">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A quick introduction to who I am and what I do</p>
      </div>

      <div className="row align-items-center g-5">
        <div className="col-lg-5">
          <div className="about-visual">
            <div className="about-image-wrapper">
              <img
                src={process.env.PUBLIC_URL + '/profile.jpg'}
                alt="Brajesh Kumar"
                className="about-image"
              />
            </div>
            <div className="about-stats-card">
              <div className="about-stat">
                <span className="about-stat-icon"><i className="fas fa-briefcase"></i></span>
                <span className="about-stat-number">1+</span>
                <span className="about-stat-label">Years Experience</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-icon"><i className="fas fa-folder-open"></i></span>
                <span className="about-stat-number">10+</span>
                <span className="about-stat-label">Projects Completed</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-icon"><i className="fas fa-trophy"></i></span>
                <span className="about-stat-number">500+</span>
                <span className="about-stat-label">DSA Problems Solved</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-icon"><i className="fas fa-users"></i></span>
                <span className="about-stat-number">Always</span>
                <span className="about-stat-label">Learning &amp; Improving</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="about-content">
            <div className="about-badge">
              <span className="about-badge-dot"></span>
              <span>ABOUT ME</span>
            </div>

            <h3 className="about-subtitle">
              Building reliable backend systems with Java &amp; Spring Boot
            </h3>

            <p className="about-text">
              I'm a Java Backend Engineer with 1 year of full-time experience developing
              and supporting enterprise applications using Java, Spring Boot, J2EE, JDBC,
              JPA, REST APIs, and MySQL at YourDOST.
            </p>
            <p className="about-text">
              Experienced in backend development, application debugging, log analysis,
              defect resolution, API troubleshooting, automated testing, and microservices.
              Strong understanding of SQL, OOP, SDLC, Agile, and backend architecture with
              hands-on experience building reliable and maintainable backend services.
            </p>

            <div className="about-feature-row">
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="feature-content">
                  <h5>Scalable &amp; Reliable</h5>
                  <p>Robust APIs designed for growth, performance and reliability</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="feature-content">
                  <h5>Clean Code &amp; Best Practices</h5>
                  <p>Writing maintainable code with clean architecture and tests</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="feature-content">
                  <h5>Team Collaboration</h5>
                  <p>Working closely with cross-functional teams to deliver impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;