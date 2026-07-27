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
                <span className="about-stat-icon"><i className="fas fa-code"></i></span>
                <span className="about-stat-number">100%</span>
                <span className="about-stat-label">Dedication &amp; Commitment</span>
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
              Building reliable software with Java &amp; Spring Boot
            </h3>

            <p className="about-text">
              I'm a backend engineer specializing in backend development, currently working as a
              Backend Engineer Intern at YourDOST. I build scalable RESTful APIs and
              production-grade services using Java, Spring Boot, and modern tooling.
            </p>
            <p className="about-text">
              My focus is on clean architecture, data integrity, and writing well-tested,
              maintainable code. I enjoy turning complex requirements into simple, robust
              solutions and collaborating closely with teams to ship features that matter.
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