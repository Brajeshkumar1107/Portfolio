import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Footer from './Footer';


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [downloadState, setDownloadState] = useState('idle');

  const fullText = "Hi, I'm Brajesh Kumar";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Add scroll detection for navbar + active section highlighting
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'education'];
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      const offset = scrollTop + 120;
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    setDownloadState('downloading');
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Brajesh Resume.pdf`;
    link.download = 'Brajesh Kumar Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setDownloadState('success');
      setTimeout(() => {
        setDownloadState('idle');
      }, 2000);
    }, 500);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Function to close mobile navbar menu
  const closeMobileMenu = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
      const togglerButton = document.querySelector('.navbar-toggler');
      if (togglerButton) {
        togglerButton.setAttribute('aria-expanded', 'false');
      }
    }
  };

  // Enhanced scroll function that also closes mobile menu
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    closeMobileMenu();
  };

  return (
    <>
      {/* Floating Bubbles Background */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <Navbar isScrolled={isScrolled} handleNavClick={handleNavClick} scrollToSection={scrollToSection} activeSection={activeSection} handleDownload={handleDownload} downloadState={downloadState} />
      <Hero displayText={displayText} handleDownload={handleDownload} downloadState={downloadState} /> 
      <div className="divider"></div>
      <About /> 
      <div className="divider"></div>
      <Skills />
      <div className="divider"></div>
      <Experience />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
      <Education />
      <Footer />
    </>
  );
}

export default App;
