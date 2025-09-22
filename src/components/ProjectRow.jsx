import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/ProjectRow.css';

const ProjectRow = ({ title, projects }) => {
  return (
    <section id="projects" className="project-row">
      <h2 className="row-title">{title}</h2>
      <div className="projects-container">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectRow;
