import React from 'react';
import '../styles/ResumeSection.css';

const ResumeSection = () => {
  const resumeData = {
    education: [
      {
        degree: "Bachelor of Technology in Computer Science and Engineering Specialization in Artificial Intelligence and Machine Learning",
        institution: "Techno Main Saltlake",
        period: "2024 - 2028",
        details: "CGPA: 7.9, Relevant coursework: Data Structures, Algorithms, Python, Machine Learning"
      }
    ],
    projects: [   // 👈 changed 'Projects' to lowercase to match usage
      {
        title: "Mood Movie Recommender",
        period: "2025",
        description: "Developed a chatbot that recommends movies based on user mood using machine learning",
        technologies: ["Python", "Machine Learning"],
        image: "/mood.png"
      },
      {
        title: "Spam Email Classifier",
        period: "2025",
        description: "Built a Streamlit web app for email spam classification using ML algorithms",
        technologies: ["Python", "Streamlit", "Machine Learning"],
        image: "/spam.jpg"
      }
    ],
    skills: {
      technical: ["Python", "JavaScript", "React.js", "Node.js", "Machine Learning", "Git"],
      soft: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Time Management"]
    },
    certifications: [
      "SoftWare Engineering Certificate: Accenture Nordics (Forage)",
      "Data Analytics Certificate: Tata (Forage)",
      "Generative AI Certificate: Microsoft"
    ]
  };

  return (
    <section id="resume" className="resume-section">
      <h2 className="section-title">My Resume</h2>
      
      <div className="resume-grid">
        {/* Education */}
        <div className="resume-card">
          <h3>EDUCATION</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <h4>{edu.degree}</h4>
              <p className="institution">{edu.institution}</p>
              <p className="period">{edu.period}</p>
              <p className="details">{edu.details}</p>
            </div>
          ))}
        </div>

        {/* Project Experience */}
        <div className="resume-card">
          <h3>PROJECT EXPERIENCE</h3>
          {resumeData.projects.map((proj, index) => (
            <div key={index} className="project-item">
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="project-image"
              />
              <h4>{proj.title}</h4>
              <p className="period">{proj.period}</p>
              <p className="description">{proj.description}</p>
              <div className="technologies">
                {proj.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="resume-card">
          <h3>SKILLS</h3>
          <div className="skills-grid">
            <div>
              <h4>Technical</h4>
              <ul>
                {resumeData.skills.technical.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Soft Skills</h4>
              <ul>
                {resumeData.skills.soft.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="resume-card">
          <h3>CERTIFICATIONS</h3>
          <ul className="certifications-list">
            {resumeData.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
