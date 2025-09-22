import React, { useState } from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Map project types to their corresponding image paths in public folder
  const projectImages = {
    'Mood Movie Recommender': '/mood.png',
    'Spam Email Classifier': '/spam.jpg',
    // Add more mappings as needed
  };

  // Get the appropriate image for this project
  const getProjectImage = () => {
    return projectImages[project.title] || project.image;
  };

  return (
    <div
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="project-image-container">
        <img 
          src={getProjectImage()} 
          alt={project.title} 
          className="project-image"
        />
        {/* Overlay that appears on hover */}
        {isHovered && (
          <div className="image-overlay">
            <div className="overlay-content">
              <i className="fas fa-external-link-alt"></i>
              <span>View Project</span>
            </div>
          </div>
        )}
      </div>

      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>

        {isHovered && (
          <div className="project-details">
            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;