import React from 'react';
import '../styles/Hero.css';
import heroImg from '../assets/Ishani_portfolioImg.jpg'; 

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Full-Stack Developer & AI/ML Engineer in Making</h1>
        <p className="hero-description">
          Passionate about creating innovative solutions using cutting-edge technologies. 
          Specializing in React, Python, and machine learning applications.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={scrollToProjects}>View Projects</button>
          
          {/* Resume download link */}
          <a 
            href="/Ishani_Chakravarty_Resume.pdf" 
            download="Ishani_Chakravarty_Resume.pdf" 
            className="btn-secondary"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img 
          src={heroImg} 
          alt="Ishani Chakravarty" 
        />
      </div>

      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
