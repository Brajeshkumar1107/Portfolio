import React, { useState } from 'react';

const QUICK_LINKS = [
  { id: 'home', label: 'Home', icon: 'fas fa-house' },
  { id: 'about', label: 'About', icon: 'fas fa-user' },
  { id: 'skills', label: 'Skills', icon: 'fas fa-layer-group' },
  { id: 'projects', label: 'Projects', icon: 'fas fa-briefcase' },
  { id: 'experience', label: 'Experience', icon: 'fas fa-laptop' },
];

const WHAT_I_DO = [
  { label: 'Backend Development', icon: 'fas fa-code' },
  { label: 'RESTful APIs', icon: 'fas fa-database' },
  { label: 'System Design', icon: 'fas fa-shield-halved' },
  { label: 'Database Design', icon: 'fas fa-cloud' },
  { label: 'Performance Optimization', icon: 'fas fa-gauge-high' },
  { label: 'Testing & Debugging', icon: 'fas fa-flask' },
];

const TECH_STACK = [
  { label: 'Java', icon: 'fab fa-java' },
  { label: 'Spring Boot', icon: 'fas fa-leaf' },
  { label: 'MySQL', icon: 'fas fa-database' },
  { label: 'REST APIs', icon: 'fas fa-code' },
  { label: 'Spring MVC', icon: 'fas fa-leaf' },
  { label: 'JPA / Hibernate', icon: 'fas fa-cubes' },
  { label: 'JUnit', icon: 'fas fa-vial' },
  { label: 'Mockito', icon: 'fas fa-flask' },
  { label: 'Git', icon: 'fab fa-git-alt' },
  { label: 'Docker', icon: 'fab fa-docker' },
  { label: 'Maven', icon: 'fas fa-cube' },
  { label: 'Postman', icon: 'fas fa-paper-plane' },
];

const scrollTo = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const top = el.offsetTop - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeState, setSubscribeState] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscribeState('error');
      setTimeout(() => setSubscribeState('idle'), 3000);
      return;
    }
    setSubscribeState('sending');
    try {
      const response = await fetch('https://formspree.io/f/mpwreozq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'New newsletter subscription' }),
      });
      if (response.ok) {
        setSubscribeState('success');
        setEmail('');
        setTimeout(() => setSubscribeState('idle'), 3000);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (err) {
      setSubscribeState('error');
      setTimeout(() => setSubscribeState('idle'), 3000);
    }
  };

  return (
  <footer id="connect" className="footer">
    <div className="container">
      <div className="footer-grid">
        {/* Brand + contact */}
        <div className="footer-col footer-about">
          <a className="footer-brand" href="#home" onClick={(e) => scrollTo(e, 'home')}>
            <span className="footer-brand-logo"><i className="fas fa-code"></i></span>
            <span className="footer-brand-name">Bra<span className="text-accent">jesh</span></span>
          </a>
          <p className="footer-desc">
            Backend Engineer &amp; Full Stack Developer who loves building scalable, efficient and
            impactful web applications.
          </p>
          <ul className="footer-contact">
            <li>
              <span className="footer-contact-icon"><i className="fas fa-envelope"></i></span>
              <a href="mailto:brajeshsharma112004@gmail.com">brajeshsharma112004@gmail.com</a>
            </li>
            <li>
              <span className="footer-contact-icon"><i className="fas fa-phone"></i></span>
              <a href="tel:+917061290269">+91 7061290269</a>
            </li>
            <li>
              <span className="footer-contact-icon"><i className="fas fa-location-dot"></i></span>
              <span>Begusarai, Bihar, India</span>
            </li>
            <li>
              <span className="footer-contact-icon"><i className="fas fa-globe"></i></span>
              <span>brajesh.in</span>
            </li>
          </ul>
          <div className="footer-socials">
            <a href="https://github.com/Brajeshkumar1107" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/brajeshsharma1107/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://leetcode.com/u/Brajesh-Kumar/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <i className="fas fa-code"></i>
            </a>
            <a href="mailto:brajeshsharma112004@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading"><span className="footer-heading-dot"></span>Quick Links</h4>
          <ul className="footer-list">
            {QUICK_LINKS.map(({ id, label, icon }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => scrollTo(e, id)}>
                  <i className={icon}></i>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* What I Do */}
        <div className="footer-col">
          <h4 className="footer-heading"><span className="footer-heading-dot"></span>What I Do</h4>
          <ul className="footer-list">
            {WHAT_I_DO.map(({ label, icon }) => (
              <li key={label}>
                <span className="footer-list-static">
                  <i className={icon}></i>
                  <span>{label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="footer-col">
          <h4 className="footer-heading"><span className="footer-heading-dot"></span>Tech Stack</h4>
          <div className="footer-tech-grid">
            {TECH_STACK.map(({ label, icon }) => (
              <span className="footer-tech-chip" key={label}>
                <i className={icon}></i>
                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Connect band */}
      <div className="footer-band">
        <div className="footer-band-item">
          <span className="footer-band-icon"><i className="fas fa-heart"></i></span>
          <div>
            <h5>Let's Connect!</h5>
            <p>I'm always open to discussing new opportunities, collaborations, or just a friendly chat.</p>
          </div>
        </div>

        <div className="footer-band-item footer-newsletter">
          <div>
            <h5>Stay Updated</h5>
            <p>Get the latest updates about my projects and experience.</p>
            <form className="footer-subscribe" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe" disabled={subscribeState === 'sending'}>
                {subscribeState === 'sending' ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : subscribeState === 'success' ? (
                  <i className="fas fa-check"></i>
                ) : (
                  <i className="fas fa-paper-plane"></i>
                )}
              </button>
            </form>
            {subscribeState === 'success' && (
              <span className="footer-subscribe-msg footer-subscribe-msg--success">
                Thanks for subscribing!
              </span>
            )}
            {subscribeState === 'error' && (
              <span className="footer-subscribe-msg footer-subscribe-msg--error">
                Please enter a valid email.
              </span>
            )}
          </div>
        </div>

        <div className="footer-band-item footer-thanks">
          <span className="footer-thanks-icon"><i className="fas fa-laptop-code"></i></span>
          <div>
            <h5>Thanks for visiting!</h5>
            <p>Let's build something amazing together. <i className="fas fa-heart footer-heart"></i></p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Brajesh Kumar. All rights reserved.</span>
        <span className="footer-made">
          Built with <i className="fas fa-heart footer-heart"></i> using React
        </span>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
