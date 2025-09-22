import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectRow from './components/ProjectRow';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import { projects } from './data';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      
      <main className="main-content">
        <ProjectRow 
          title="Featured Projects" 
          projects={projects} 
        />
        
        <ResumeSection />
        
        <ProjectRow 
          title="All Projects" 
          projects={projects} 
        />
        
        <Contact />
      </main>
    </div>
  );
}

export default App;