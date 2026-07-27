import React from 'react';

const TECHNICAL_SKILLS = [
  { name: 'Java', level: 90, icon: 'fab fa-java' },
  { name: 'Spring Boot', level: 90, icon: 'fas fa-leaf' },
  { name: 'MySQL', level: 85, icon: 'fas fa-database' },
  { name: 'REST APIs', level: 88, icon: 'fas fa-code' },
  { name: 'HTML, CSS, JavaScript', level: 80, icon: 'fab fa-html5' },
  { name: 'Git & GitHub', level: 85, icon: 'fab fa-github' },
];

const TOOLS = [
  { name: 'IntelliJ IDEA', icon: 'fas fa-lightbulb' },
  { name: 'VS Code', icon: 'fas fa-laptop-code' },
  { name: 'Postman', icon: 'fas fa-paper-plane' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Maven', icon: 'fas fa-cubes' },
  { name: 'JUnit', icon: 'fas fa-vial' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'Swagger', icon: 'fas fa-file-code' },
  { name: 'Linux', icon: 'fab fa-linux' },
];

const CORE_STRENGTHS = [
  { name: 'Problem Solving', icon: 'fas fa-puzzle-piece' },
  { name: 'Clean Code', icon: 'fas fa-code' },
  { name: 'System Design', icon: 'fas fa-sitemap' },
  { name: 'Continuous Learning', icon: 'fas fa-book-open' },
];

const IMPROVEMENT_STATS = [
  { number: '500+', label: 'DSA Problems Solved' },
  { number: '9+', label: 'Months of Experience' },
  { number: '15+', label: 'Technologies Worked With' },
  { number: '5+', label: 'Projects Completed' },
];

const Skills = () => (
  <section id="skills" className="py-5" data-aos="fade-up">
    <div className="container">
      <div className="text-center mb-5">
        <div className="skills-eyebrow">
          <span className="skills-eyebrow-dot"></span>
          <span>MY SKILLS</span>
        </div>
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <p className="section-subtitle">Technologies and tools I work with to build scalable, efficient and reliable applications.</p>
      </div>

      <div className="row g-4">
        {/* Technical Skills with progress bars */}
        <div className="col-lg-6">
          <div className="skills-panel h-100">
            <div className="skills-panel-header">
              <span className="skills-panel-icon"><i className="fas fa-code"></i></span>
              <h4 className="skills-panel-title">Technical Skills</h4>
            </div>
            <div className="tskill-list">
              {TECHNICAL_SKILLS.map(({ name, level, icon }) => (
                <div className="tskill" key={name}>
                  <div className="tskill-top">
                    <span className="tskill-name">
                      <i className={`${icon} tskill-icon`}></i>
                      {name}
                    </span>
                    <span className="tskill-pct">{level}%</span>
                  </div>
                  <div className="tskill-track">
                    <div className="tskill-fill" style={{ width: `${level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools + Core Strengths */}
        <div className="col-lg-6">
          <div className="skills-panel mb-4">
            <div className="skills-panel-header">
              <span className="skills-panel-icon"><i className="fas fa-cog"></i></span>
              <h4 className="skills-panel-title">Tools &amp; Technologies</h4>
            </div>
            <div className="tools-grid">
              {TOOLS.map(({ name, icon }) => (
                <div className="tool-chip" key={name}>
                  <i className={`${icon} tool-chip-icon`}></i>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-panel">
            <div className="skills-panel-header">
              <span className="skills-panel-icon"><i className="fas fa-shield-alt"></i></span>
              <h4 className="skills-panel-title">Core Strengths</h4>
            </div>
            <div className="strengths-grid">
              {CORE_STRENGTHS.map(({ name, icon }) => (
                <div className="strength-item" key={name}>
                  <span className="strength-icon"><i className={icon}></i></span>
                  <span className="strength-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Always Improving banner */}
      <div className="improve-banner mt-4">
        <div className="improve-intro">
          <span className="improve-icon"><i className="fas fa-star"></i></span>
          <div>
            <h5 className="improve-title">Always Improving</h5>
            <p className="improve-text">I'm constantly learning new technologies and improving my skills to stay up-to-date and deliver better solutions.</p>
          </div>
        </div>
        <div className="improve-stats">
          {IMPROVEMENT_STATS.map(({ number, label }) => (
            <div className="improve-stat" key={label}>
              <span className="improve-stat-number">{number}</span>
              <span className="improve-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;