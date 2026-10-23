import React from 'react';

const Hero = ({ displayText, handleDownload, downloadState }) => (
  <section id="home" className="py-5" data-aos="fade-up">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-7 order-2 order-lg-1">
          <span className="hero-availability">
            <span className="hero-availability-dot"></span>
            Available for new opportunities
          </span>
          <h1 className="display-4 fw-bold mb-2 selectable-text typewriter-text">
            {displayText}
            <span className="cursor">|</span>
          </h1>
          <span className="hero-name-underline"></span>
          <h2 className="hero-role mb-3 selectable-text">
            <span className="hero-role-icon">
              <i className="fas fa-laptop-code"></i>
            </span>
            Java Backend Engineer &amp; Full Stack Developer
          </h2>
          <p className="lead hero-lead mb-4 selectable-text">
            Java Backend Engineer with 1+ year of experience building and supporting
            enterprise applications with Java, Spring Boot, REST APIs, and Microservices.
            Passionate about clean architecture, reliable APIs, and solving
            real-world problems with maintainable code.
          </p>

          <div className="hero-cta mb-4">
            <button
              className={`btn btn-primary btn-lg ${downloadState}`}
              onClick={() => handleDownload('hero')}
              disabled={downloadState === 'downloading'}
            >
              {downloadState === 'downloading' ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Downloading...
                </>
              ) : downloadState === 'success' ? (
                <>
                  <i className="fas fa-check me-2"></i>
                  Downloaded!
                </>
              ) : (
                <>
                  <i className="fas fa-download me-2"></i>
                  Download Resume
                </>
              )}
            </button>
            <a
              href="#connect"
              className="btn btn-outline-primary btn-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <i className="fas fa-paper-plane me-2"></i>
              Get In Touch
            </a>
          </div>

          <div className="hero-socials">
            <a
              className="hero-social-link"
              href="https://github.com/Brajeshkumar1107"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="hero-social-link"
              href="https://www.linkedin.com/in/brajeshsharma1107/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="hero-social-link"
              href="https://leetcode.com/u/Brajesh-Kumar/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              title="LeetCode"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              className="hero-social-link"
              href="mailto:brajeshsharma112004@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="col-lg-5 order-1 order-lg-2 text-center">
          <div className="hero-visual mx-auto">
            <span className="hero-blob"></span>
            <span className="hero-dots"></span>
            <span className="hero-ring"></span>
            <span className="hero-orbit-dot hero-orbit-dot--top"></span>
            <span className="hero-orbit-dot hero-orbit-dot--bottom"></span>
            <div className="profile-photo-wrapper mx-auto">
              <img
                src={process.env.PUBLIC_URL + '/profile.jpg'}
                alt="Brajesh Kumar"
                className="img-fluid rounded-circle profile-photo"
                width="320"
              />
            </div>
            <div className="hero-open-card">
              <span className="hero-open-icon">
                <i className="fas fa-rocket"></i>
              </span>
              <div className="hero-open-text">
                <span className="hero-open-title">Open to Work</span>
                <span className="hero-open-sub">Full-time opportunities</span>
              </div>
              <span className="hero-open-status"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;