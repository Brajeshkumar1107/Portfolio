import React, { useState } from 'react';

const FILTERS = [
  { id: 'all', label: 'All Projects', icon: 'fas fa-th-large' },
  { id: 'backend', label: 'Backend', icon: 'fas fa-server' },
  { id: 'android', label: 'Android', icon: 'fas fa-mobile-screen-button' },
  { id: 'others', label: 'Others', icon: 'fas fa-ellipsis' },
];

const PROJECTS = [
  {
    id: 'notification-hub',
    title: 'Notification Hub',
    tag: 'Backend Project',
    category: 'backend',
    accent: 'blue',
    icon: 'fas fa-bell',
    description:
      'An event-driven notification platform supporting Email, SMS, and WhatsApp communication workflows with asynchronous message processing and failure handling.',
    highlights: [
      'Event-driven delivery with Kafka',
      'Retry & failure-handling workflows',
      'RESTful APIs & audit logging',
      'Dockerized & JUnit tested services',
    ],
    tech: ['Java', 'Spring Boot', 'Kafka', 'MySQL', 'Docker', 'JUnit'],
    codeUrl: 'https://github.com/Brajeshkumar1107/PRD-Alerting-Notification-Platform',
    demoUrl: 'https://github.com/Brajeshkumar1107/PRD-Alerting-Notification-Platform',
  },
  {
    id: 'codearena',
    title: 'CodeArena Compiler Platform',
    tag: 'Backend Project',
    category: 'backend',
    accent: 'green',
    icon: 'fas fa-code',
    description:
      'A code compilation and execution platform with isolated Docker-based runtimes, REST APIs for submission, execution, and result retrieval, and status tracking.',
    highlights: [
      'Docker-isolated execution workflows',
      'Submission & execution status tracking',
      'RESTful API + validation & exception handling',
      'MySQL metadata persistence',
    ],
    tech: ['Java', 'Spring Boot', 'Docker', 'MySQL', 'REST APIs'],
    codeUrl: 'https://github.com/Brajeshkumar1107/Code-Arena',
    demoUrl: 'https://github.com/Brajeshkumar1107/Code-Arena',
  },
  {
    id: 'notification-platform',
    title: 'PRD Alerting & Notification Platform',
    tag: 'Backend Project',
    category: 'backend',
    accent: 'purple',
    icon: 'fas fa-bullhorn',
    description:
      'A scalable alerting and notification platform built with Java and Spring Boot to deliver reliable, event-driven notifications across multiple channels.',
    highlights: [
      'Event-driven notification delivery',
      'Configurable alerting rules',
      'RESTful APIs with Spring Boot',
      'Reliable retry & failure handling',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'],
    codeUrl: 'https://github.com/Brajeshkumar1107/PRD-Alerting-Notification-Platform',
    demoUrl: 'https://github.com/Brajeshkumar1107/PRD-Alerting-Notification-Platform',
  },
  {
    id: 'connect4',
    title: 'Connect4 Game',
    tag: 'Full Stack Project',
    category: 'backend',
    accent: 'blue',
    icon: 'fas fa-gamepad',
    description:
      'A full-stack Connect4 game with a Go-powered backend and a TypeScript React frontend, featuring real-time interactive gameplay.',
    highlights: [
      'Game logic & move validation in Go',
      'Interactive TypeScript frontend',
      'RESTful API communication',
      'Clean, responsive game UI',
    ],
    tech: ['Go', 'TypeScript', 'React', 'REST APIs'],
    codeUrl: 'https://github.com/Brajeshkumar1107/Emitrr-Assignment-Backend',
    demoUrl: 'https://emitrr-assignment-frontend.vercel.app',
  },
  {
    id: 'ecommerce',
    title: 'Full Stack E-Commerce',
    tag: 'Internship Project',
    category: 'backend',
    accent: 'green',
    icon: 'fas fa-cart-shopping',
    description:
      'A full-stack e-commerce application built during the Code Alpha internship, allowing users to browse products, manage carts and place orders.',
    highlights: [
      'Product browsing & cart management',
      'User authentication & orders',
      'Full-stack TypeScript architecture',
      'Responsive shopping experience',
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'REST APIs'],
    codeUrl: 'https://github.com/Brajeshkumar1107/Full-stack-e-commerce',
    demoUrl: 'https://github.com/Brajeshkumar1107/Full-stack-e-commerce',
  },
  {
    id: 'config-server',
    title: 'Microservices Config Server',
    tag: 'Backend Project',
    category: 'backend',
    accent: 'purple',
    icon: 'fas fa-gears',
    description:
      'A centralized configuration server for microservices, managing externalized configuration across distributed services with Spring Cloud Config.',
    highlights: [
      'Centralized config management',
      'Spring Cloud Config integration',
      'Environment-specific properties',
      'Supports distributed microservices',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Cloud', 'Microservices'],
    codeUrl: 'https://github.com/Brajeshkumar1107/config-server',
    demoUrl: 'https://github.com/Brajeshkumar1107/config-server',
  },
  {
    id: 'android-app',
    title: 'Android App',
    tag: 'Android Project',
    category: 'android',
    accent: 'green',
    icon: 'fas fa-mobile-screen-button',
    description:
      'An Android application built in Java during the CodeClause internship, focusing on a clean UI and smooth user experience.',
    highlights: [
      'Native Android development in Java',
      'Clean, intuitive user interface',
      'Activity & layout management',
      'Responsive mobile experience',
    ],
    tech: ['Java', 'Android', 'XML'],
    codeUrl: 'https://github.com/Brajeshkumar1107/CodeClauseInternship_ProjectName',
    demoUrl: 'https://github.com/Brajeshkumar1107/CodeClauseInternship_ProjectName',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    tag: 'Personal Project',
    category: 'others',
    accent: 'purple',
    icon: 'fas fa-user',
    description:
      'A modern, responsive personal portfolio website showcasing my projects, skills and experience with smooth animations and a clean design.',
    highlights: [
      'Responsive, mobile-first design',
      'Smooth scroll & animations',
      'Reusable React components',
      'Modern, accessible UI',
    ],
    tech: ['React', 'JavaScript', 'CSS3', 'Bootstrap'],
    codeUrl: 'https://github.com/Brajeshkumar1107/Portfolio',
    demoUrl: 'https://portfolio-eight-steel-57.vercel.app',
  },
];

const BUILD_STATS = [
  { number: '30+', label: 'Repositories on GitHub', icon: 'fas fa-folder-open', color: 'blue' },
  { number: '8', label: 'Featured Projects', icon: 'fas fa-star', color: 'green' },
  { number: '15+', label: 'Technologies Worked With', icon: 'fas fa-code', color: 'purple' },
  { number: '100%', label: 'Passion for Building', icon: 'fas fa-heart', color: 'orange' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const INITIAL_SHOWN = 3;

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const visibleProjects =
    showAll || activeFilter !== 'all'
      ? filteredProjects
      : filteredProjects.slice(0, INITIAL_SHOWN);

  const hasMore = filteredProjects.length > INITIAL_SHOWN;

  const handleFilterChange = (id) => {
    setActiveFilter(id);
    setShowAll(false);
  };

  return (
    <section id="projects" className="py-5" data-aos="fade-up">
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="projects-eyebrow">
            <span className="projects-eyebrow-dot"></span>
            <span>MY PROJECTS</span>
          </div>
          <h2 className="section-title">
            Projects That <span className="text-accent">Solve Problems</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects where I applied my skills to build impactful and real-world solutions.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="project-filters">
          {FILTERS.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              className={`project-filter ${activeFilter === id ? 'active' : ''}`}
              onClick={() => handleFilterChange(id)}
            >
              <i className={icon}></i>
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="row g-4">
          {visibleProjects.length === 0 ? (
            <div className="col-12">
              <p className="projects-empty">No projects in this category yet — check back soon!</p>
            </div>
          ) : (
            visibleProjects.map((project) => (
              <div className="col-lg-4 col-md-6" key={project.id}>
                <div className={`project-card accent-${project.accent}`} data-aos="fade-up">
                  <div className="project-card-body">
                    <div className="project-card-head">
                      <div className="project-icon-box">
                        <i className={project.icon}></i>
                      </div>
                      <div>
                        <h3 className="project-title">{project.title}</h3>
                        <span className="project-tag">{project.tag}</span>
                      </div>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-highlights">
                      <h4 className="project-highlights-title">Key Highlights</h4>
                      <ul>
                        {project.highlights.map((h) => (
                          <li key={h}>
                            <i className="fas fa-circle-check"></i>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-tech">
                      {project.tech.map((t) => (
                        <span className="tech-tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-footer">
                    <a
                      href={project.codeUrl}
                      className="project-footer-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <i className="fab fa-github"></i>
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.demoUrl}
                      className="project-footer-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <i className="fas fa-arrow-up-right-from-square"></i>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Show more / less */}
        {hasMore && (
          <div className="projects-show-more text-center mt-4">
            <button
              type="button"
              className="projects-toggle-btn"
              onClick={() => setShowAll((s) => !s)}
              aria-expanded={showAll}
            >
              <i className={`fas ${showAll ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              {showAll ? 'Show Less' : `View All Projects (${filteredProjects.length})`}
            </button>
          </div>
        )}

        {/* Always Building banner */}
        <div className="build-banner mt-4">
          <div className="build-intro">
            <span className="build-icon"><i className="fas fa-rocket"></i></span>
            <div>
              <h5 className="build-title">Always Building, Always Learning</h5>
              <p className="build-text">
                I enjoy turning ideas into meaningful products and continuously exploring new technologies.
              </p>
            </div>
          </div>
          <div className="build-stats">
            {BUILD_STATS.map(({ number, label, icon, color }) => (
              <div className="build-stat" key={label}>
                <span className={`build-stat-icon build-stat-icon--${color}`}>
                  <i className={icon}></i>
                </span>
                <div className="build-stat-text">
                  <span className="build-stat-number">{number}</span>
                  <span className="build-stat-label">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;