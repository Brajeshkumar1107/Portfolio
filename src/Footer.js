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
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [formError, setFormError] = useState(''); // '' | 'email' | 'message' | 'server'

  const resetForm = () => {
    setFormState('idle');
    setFormError('');
  };

  const clearError = () => {
    if (formState === 'error') {
      resetForm();
    }
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setFormState('error');
      setFormError('email');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setFormState('error');
      setFormError('message');
      return;
    }

    setFormState('sending');
    setFormError('');
    try {
      const response = await fetch('https://formspree.io/f/mpwreozq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          message,
          _subject: 'New message from Portfolio visitor',
        }),
      });
      if (response.ok) {
        setFormState('success');
        setEmail('');
        setMessage('');
        setTimeout(resetForm, 6000);
      } else {
        throw new Error('Send failed');
      }
    } catch (err) {
      setFormState('error');
      setFormError('server');
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

        <div className="footer-band-item footer-connect">
          <div className="connect-card">
            <div className="connect-head">
              <span className="connect-icon"><i className="fas fa-envelope-open-text"></i></span>
              <div>
                <h5>Send a Message</h5>
                <p>Questions, collabs, or a friendly hello — I reply to every mail.</p>
              </div>
            </div>
            <form className="connect-form" onSubmit={handleMessageSubmit} noValidate>
              <div className="connect-field">
                <label htmlFor="connect-email" className="connect-label">Your email</label>
                <input
                  type="email"
                  id="connect-email"
                  className="connect-input"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clearError();
                  }}
                  aria-invalid={formState === 'error' && formError === 'email'}
                  aria-describedby="connect-msg"
                />
              </div>
              <div className="connect-field">
                <label htmlFor="connect-message" className="connect-label">Message</label>
                <textarea
                  id="connect-message"
                  className="connect-input connect-textarea"
                  rows="3"
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    clearError();
                  }}
                  aria-invalid={formState === 'error' && formError === 'message'}
                  aria-describedby="connect-msg"
                />
              </div>
              <button type="submit" className="connect-submit" disabled={formState === 'sending'}>
                {formState === 'sending' ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Sending…
                  </>
                ) : formState === 'success' ? (
                  <>
                    <i className="fas fa-circle-check"></i>
                    Sent!
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send it
                  </>
                )}
              </button>
              <div id="connect-msg" className="connect-msg-wrap" aria-live="polite">
                {formState === 'success' && (
                  <span className="connect-msg connect-msg--success">
                    <i className="fas fa-circle-check"></i>
                    Message sent — I'll get back to you soon!
                  </span>
                )}
                {formState === 'error' && formError === 'email' && (
                  <span className="connect-msg connect-msg--error">
                    <i className="fas fa-circle-exclamation"></i>
                    Please enter a valid email address.
                  </span>
                )}
                {formState === 'error' && formError === 'message' && (
                  <span className="connect-msg connect-msg--error">
                    <i className="fas fa-circle-exclamation"></i>
                    Please write a short message first.
                  </span>
                )}
                {formState === 'error' && formError === 'server' && (
                  <span className="connect-msg connect-msg--error">
                    <i className="fas fa-circle-exclamation"></i>
                    Could not send right now. Please try again later.
                  </span>
                )}
              </div>
              <p className="connect-note">
                <i className="fas fa-lock"></i>
                Delivered straight to my inbox — never shared.
              </p>
            </form>
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
