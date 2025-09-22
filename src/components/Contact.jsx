import React from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Using react-icons for logos

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Name</h3>
              <p>Ishani Chakravarty</p>
            </div>
            
            <div className="contact-item">
              <h3>Phone</h3>
              <p>8017954051</p>
            </div>
            
            <div className="contact-item">
              <h3>Email</h3>
              <p>ishani25.c@gmail.com</p>
            </div>
            
            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-buttons">
                <a 
                  href="https://linkedin.com/in/ishanichakravarty/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn linkedin"
                >
                  <FaLinkedin style={{ marginRight: '5px' }} /> LinkedIn
                </a>
                <a 
                  href="https://github.com/ishaniigit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn github"
                >
                  <FaGithub style={{ marginRight: '5px' }} /> GitHub
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send me a message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Ishani Chakravarty. All rights reserved.</p>
        <div className="footer-social">
          <a 
            href="https://linkedin.com/in/ishanichakravarty/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="https://github.com/ishaniigit" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
