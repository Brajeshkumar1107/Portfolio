import React, { useState } from 'react';

const QUICK_LINKS = [
  { id: 'home', label: 'Home', icon: 'fas fa-house' },
  { id: 'about', label: 'About', icon: 'fas fa-user' },
  { id: 'skills', label: 'Skills', icon: 'fas fa-layer-group' },
  { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
  { id: 'projects', label: 'Projects', icon: 'fas fa-code-branch' },
  { id: 'footer-contact-card', label: 'Contact', icon: 'fas fa-envelope' },
];

const SKILLS = [
  { label: 'Java', icon: 'fab fa-java' },
  { label: 'Spring Boot', icon: 'fas fa-leaf' },
  { label: 'MySQL', icon: 'fas fa-database' },
  { label: 'Docker', icon: 'fab fa-docker' },
  { label: 'AWS', icon: 'fab fa-aws' },
  { label: 'REST APIs', icon: 'fas fa-code' },
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
  const [form, setForm] = useState({ email: '', message: '' });
  const [formState, setFormState] = useState('idle');

  const year = new Date().getFullYear();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (formState === 'error') setFormState('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email) || !form.message.trim()) {
      setFormState('error');
      return;
    }
    setFormState('sending');
    try {
      const res = await fetch('https://formspree.io/f/mpwreozq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.email}`,
        }),
      });
      if (res.ok) {
        setFormState('success');
        setForm({ email: '', message: '' });
        setTimeout(() => setFormState('idle'), 6000);
      } else {
        throw new Error('Request failed');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <footer id="connect" className="footer">
      <div className="container">

        {/* Top CTA */}
        <div className="footer-cta">
          <div className="footer-cta-line" aria-hidden="true"></div>
          <div className="footer-cta-content">
            <span className="footer-cta-kicker">Let's Connect</span>
            <h2 className="footer-cta-heading">
              Let's Build Something <span className="text-accent">Amazing</span> Together
            </h2>
            <p className="footer-cta-sub">
              Open to new opportunities, collaborations, and interesting ideas.
            </p>
            <span className="footer-cta-heart" aria-hidden="true"><i className="fas fa-heart"></i></span>
          </div>
          <div className="footer-cta-line" aria-hidden="true"></div>
        </div>

        {/* Main card */}
        <div className="footer-card">

          {/* Left — Branding */}
          <div className="footer-card-section footer-card--brand">
            <a className="footer-brand" href="#home" onClick={(e) => scrollTo(e, 'home')}>
              <span className="footer-brand-logo"><img src={`${process.env.PUBLIC_URL}/brand-logo.png`} alt="Brajesh Kumar logo" width="42" height="42" /></span>
              <span className="footer-brand-name">Bra<span className="text-accent">jesh</span></span>
            </a>
            <p className="footer-brand-desc">
              Building scalable solutions, learning continuously, and turning ideas into reality.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/Brajeshkumar1107" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/brajeshsharma1107/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://portfolio-eight-steel-57.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" title="Portfolio">
                <i className="fas fa-globe"></i>
              </a>
              <a href="mailto:brajeshsharma112004@gmail.com" aria-label="Email" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <div className="footer-location">
              <i className="fas fa-location-dot footer-location-icon" aria-hidden="true"></i>
              <span>Begusarai, Bihar, India</span>
            </div>
            <div className="footer-status">
              <span className="footer-status-dot"></span>
              <span>Open to opportunities</span>
            </div>
            <div className="footer-quote">
              <i className="fas fa-quote-left footer-quote-icon" aria-hidden="true"></i>
              <p>
                Always open to meaningful conversations and exciting opportunities.
              </p>
            </div>
          </div>

          {/* Middle — Quick Links + Skills */}
          <div className="footer-card-section footer-card--middle">
            <div className="footer-middle-cols">
              <div className="footer-middle-col">
                <h4 className="footer-col-title">Quick Links</h4>
                <ul className="footer-links">
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
              <div className="footer-middle-col">
                <h4 className="footer-col-title">Featured Skills</h4>
                <ul className="footer-skill-list">
                  {SKILLS.map(({ label, icon }) => (
                    <li key={label}>
                      <i className={icon}></i>
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer-motivation">
              <i className="fas fa-rocket" aria-hidden="true"></i>
              <span>Constantly learning, constantly building.</span>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="footer-card-section footer-card--contact" id="footer-contact-card">
            <h4 className="footer-contact-title">Send a Message</h4>
            <p className="footer-contact-desc">
              Questions, opportunities, or just a friendly hello — I'd love to hear from you.
            </p>
            <form className="footer-contact-form" onSubmit={handleSubmit} noValidate>
              <div className="footer-field">
                <label htmlFor="footer-email">Your Email</label>
                <div className="footer-field-wrap">
                  <i className="fas fa-envelope footer-field-icon" aria-hidden="true"></i>
                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    className="footer-input"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={formState === 'sending'}
                  />
                </div>
              </div>
              <div className="footer-field">
                <label htmlFor="footer-message">Message</label>
                <div className="footer-field-wrap">
                  <i className="fas fa-comment-dots footer-field-icon" aria-hidden="true"></i>
                  <textarea
                    id="footer-message"
                    name="message"
                    className="footer-textarea"
                    placeholder="Write your message here..."
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    disabled={formState === 'sending'}
                  ></textarea>
                </div>
              </div>
              <div className="footer-submit-msg" aria-live="polite">
                {formState === 'success' && (
                  <span className="footer-submit-msg--success">
                    <i className="fas fa-circle-check"></i> Thanks! Your message has been sent.
                  </span>
                )}
                {formState === 'error' && (
                  <span className="footer-submit-msg--error">
                    <i className="fas fa-circle-exclamation"></i> Please add a valid email and your message.
                  </span>
                )}
              </div>
              <button type="submit" className="footer-submit-btn" disabled={formState === 'sending'}>
                {formState === 'sending' ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    <span>Send Message</span>
                  </>
                )}
              </button>
              <p className="footer-contact-note">
                <i className="fas fa-lock" aria-hidden="true"></i>
                Delivered straight to my inbox — never shared.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>&copy; {year} Brajesh Kumar. All rights reserved.</span>
            <span className="footer-built">
              Built with <i className="fas fa-heart footer-heart" aria-hidden="true"></i> using React
            </span>
          </div>
          <div className="footer-bottom-right">
            <a href="#privacy">Privacy Policy</a>
            <span className="footer-bottom-sep">|</span>
            <a href="#terms">Terms of Service</a>
            <span className="footer-bottom-sep">|</span>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;