import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isVisible ? 'fade-in' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <h1>Ishani Chakravarty</h1>
        </div>
        
        <nav className="nav">
          <ul>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('resume')}>Resume</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;