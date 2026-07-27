import React from 'react';

const experiences = [
  {
    company: 'YourDOST',
    logoTop: 'Your',
    logoBottom: 'DOST',
    role: 'Java Developer Intern',
    duration: 'Jan 2026 - Jul 2026',
    period: '7 Months',
    accent: 'blue',
    description:
      'Working on backend development using Java, Spring Boot, Spring JDBC and REST APIs. Built appointment booking, communication routing, and multi-channel notification systems. Involved in production issue resolution, integration testing, automated workflows and compliance modules.',
    technologies: ['Java', 'Spring Boot', 'Spring JDBC', 'REST APIs', 'MySQL', 'JUnit', 'Mockito'],
  },
  {
    company: 'Netlink',
    logoTop: 'net',
    logoBottom: 'link',
    role: 'Software Developer Intern',
    duration: 'Dec 2024 - Mar 2025',
    period: '4 Months',
    accent: 'blue',
    description:
      'Developed backend modules for IDP and Gateway projects using Spring Boot and JPA Criteria API. Implemented Spring Cloud Gateway for secure request routing and created an HTML-to-PDF module. Increased test coverage from 30% to 96% using JUnit and Mockito.',
    technologies: ['Java', 'Spring Boot', 'Spring Cloud Gateway', 'JPA', 'MySQL', 'JUnit', 'Mockito'],
  },
];

const EXP_STATS = [
  { number: '1+', label: 'Year of Internship Experience', icon: 'fas fa-briefcase', color: 'blue' },
  { number: '2', label: 'Companies Worked With', icon: 'fas fa-building', color: 'green' },
  { number: '10+', label: 'Projects Contributed To', icon: 'fas fa-code', color: 'purple' },
  { number: '100%', label: 'Learning & Growth', icon: 'fas fa-user', color: 'orange' },
  { number: 'Always', label: 'Building Better Solutions', icon: 'fas fa-chart-line', color: 'blue' },
];

const Experience = () => (
  <section id="experience" className="py-5" data-aos="fade-up">
    <div className="container">
      <div className="text-center mb-5">
        <div className="exp-eyebrow">
          <i className="fas fa-user-tie"></i>
          <span>MY EXPERIENCE</span>
        </div>
        <h2 className="section-title">
          My <span className="text-accent">Professional</span> Journey
        </h2>
        <p className="section-subtitle">
          A timeline of my professional experience, where I've contributed, learned and grown as a backend engineer.
        </p>
      </div>

      <div className="exp-timeline">
        {experiences.map((exp, index) => (
          <div className="exp-item" data-aos="fade-up" key={exp.company}>
            <div className="exp-marker">
              <span className="exp-dot"></span>
              {index !== experiences.length - 1 && <span className="exp-line"></span>}
            </div>

            <div className="exp-card">
              <div className="exp-logo">
                <span className="exp-logo-top">{exp.logoTop}</span>
                <span className="exp-logo-bottom">{exp.logoBottom}</span>
              </div>

              <div className="exp-body">
                <div className="exp-card-header">
                  <div className="exp-heading">
                    <h4 className="exp-role">{exp.role}</h4>
                    <p className="exp-meta">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-dot-sep">•</span>
                      <span className="exp-dates">{exp.duration}</span>
                    </p>
                  </div>
                  <div className="exp-badges">
                    <span className="exp-duration">
                      <i className="far fa-calendar"></i>
                      {exp.duration}
                    </span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                </div>

                <p className="exp-description">{exp.description}</p>

                <div className="exp-tech">
                  {exp.technologies.map((tech) => (
                    <span className="skill-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Experience stats banner */}
      <div className="exp-stats-banner">
        {EXP_STATS.map(({ number, label, icon, color }) => (
          <div className="exp-stat" key={label}>
            <span className={`exp-stat-icon exp-stat-icon--${color}`}>
              <i className={icon}></i>
            </span>
            <div className="exp-stat-text">
              <span className="exp-stat-number">{number}</span>
              <span className="exp-stat-label">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;