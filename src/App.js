import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectRow from './components/ProjectRow';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import { projects } from './data';
import './App.css';

function App() {
  
  const projectsWithImages = projects.map(project => {
    
    if (project.title === 'Mood Movie Recommender') {
      return { ...project, image: '/mood.png' };
    } else if (project.title === 'Spam Email Classifier') {
      return { ...project, image: '/spam.jpg' };
    }
    return project;
  });

  return (
    <div className="app">
      <Header />
      <Hero />
      
      <main className="main-content">
        <ProjectRow 
          title="Featured Projects" 
          projects={projectsWithImages} 
        />
        
        <ResumeSection />
        
        <ProjectRow 
          title="All Projects" 
          projects={projectsWithImages} 
        />
        
        <Contact />
      </main>
    </div>
  );
}

export default App;