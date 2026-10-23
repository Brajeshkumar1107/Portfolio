import React from 'react';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const Navbar = ({ isScrolled, handleNavClick, scrollToSection, activeSection, handleDownload, downloadState }) => (
  <nav className={`navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm ${isScrolled ? 'scrolled' : ''}`}>
    <div className="container">
      <a
        className="navbar-brand fw-bold d-flex align-items-center gap-2"
        href="#home"
        onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
      >
        <span className="brand-logo">
          <img src={`${process.env.PUBLIC_URL}/brand-logo.png`} alt="Brajesh Kumar logo" width="42" height="42" />
        </span>
        <span className="brand-name">Brajesh</span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          {NAV_LINKS.map(({ id, label }) => (
            <li className="nav-item" key={id}>
              <a
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`btn btn-primary nav-resume-btn ${downloadState}`}
          onClick={() => handleDownload('navbar')}
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
              Download Resume
              <i className="fas fa-download ms-2"></i>
            </>
          )}
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;