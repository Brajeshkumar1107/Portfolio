import React from 'react';

const EDUCATION = [
  {
    degree: 'B.Tech — Computer Science & Engineering in Data Science',
    school: 'Oriental Institute of Science and Technology',
    location: 'Bhopal, Madhya Pradesh',
    period: 'Oct 2021 – Jun 2025',
    score: '79.90%',
    icon: 'fas fa-graduation-cap',
  },
  {
    degree: '12th — PCM',
    school: 'Sushant Public School Noonfara',
    location: 'Muzaffarpur, Bihar',
    period: 'Apr 2019 – May 2021',
    score: '81.6%',
    icon: 'fas fa-school',
  },
];

const CERTIFICATIONS = [
  { title: 'DSA Using Java', issuer: 'NPTEL', icon: 'fas fa-certificate' },
  { title: 'SQL for Data Analytics', issuer: 'Internshala', icon: 'fas fa-database' },
  { title: 'Spring Boot', issuer: 'LinkedIn Learning', icon: 'fas fa-leaf' },
];

const ACHIEVEMENTS = [
  { text: 'Solved 500+ DSA problems across coding platforms', icon: 'fas fa-code' },
  { text: 'Developed and integrated RESTful APIs for mobile and enterprise workflows', icon: 'fas fa-server' },
  { text: 'Improved backend reliability by debugging issues and implementing scalable solutions', icon: 'fas fa-shield-halved' },
];

const Education = () => (
  <section id="education" className="py-5" data-aos="fade-up">
    <div className="container">
      <div className="text-center mb-5">
        <div className="edu-eyebrow">
          <i className="fas fa-graduation-cap"></i>
          <span>MY BACKGROUND</span>
        </div>
        <h2 className="section-title">
          Education &amp; <span className="text-accent">Certifications</span>
        </h2>
        <p className="section-subtitle">
          My academic background, certifications, and key achievements.
        </p>
      </div>

      <div className="row g-4">
        {/* Education */}
        <div className="col-lg-6">
          <div className="edu-panel h-100">
            <div className="edu-panel-header">
              <span className="edu-panel-icon"><i className="fas fa-graduation-cap"></i></span>
              <h4 className="edu-panel-title">Education</h4>
            </div>
            <div className="edu-list">
              {EDUCATION.map(({ degree, school, location, period, score, icon }) => (
                <div className="edu-item" key={degree}>
                  <div className="edu-item-icon">
                    <i className={icon}></i>
                  </div>
                  <div className="edu-item-content">
                    <h5 className="edu-degree">{degree}</h5>
                    <p className="edu-school">{school}</p>
                    <div className="edu-meta">
                      <span className="edu-location"><i className="fas fa-location-dot"></i> {location}</span>
                      <span className="edu-period"><i className="far fa-calendar"></i> {period}</span>
                      <span className="edu-score"><i className="fas fa-star"></i> {score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="col-lg-6">
          <div className="edu-panel mb-4">
            <div className="edu-panel-header">
              <span className="edu-panel-icon"><i className="fas fa-certificate"></i></span>
              <h4 className="edu-panel-title">Certifications</h4>
            </div>
            <div className="edu-cert-grid">
              {CERTIFICATIONS.map(({ title, issuer, icon }) => (
                <div className="edu-cert-card" key={title}>
                  <span className="edu-cert-icon"><i className={icon}></i></span>
                  <div>
                    <h5 className="edu-cert-title">{title}</h5>
                    <span className="edu-cert-issuer">{issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="edu-panel">
            <div className="edu-panel-header">
              <span className="edu-panel-icon"><i className="fas fa-trophy"></i></span>
              <h4 className="edu-panel-title">Achievements</h4>
            </div>
            <div className="edu-achieve-list">
              {ACHIEVEMENTS.map(({ text, icon }) => (
                <div className="edu-achieve-item" key={text}>
                  <span className="edu-achieve-icon"><i className={icon}></i></span>
                  <p className="edu-achieve-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
