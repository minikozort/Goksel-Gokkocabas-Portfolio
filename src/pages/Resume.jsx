import React from 'react';

export default function Resume() {
  return (
    <div className="resume-container">
      {/* Title of the resume section */}
      <h2 className="resume-title">Skills</h2>
      
      {/* Section for coding skills */}
      <div className="skills-section">
        <h3 className="section-title">Coding</h3>
        <ul className="skill-list">
          {/* List of coding skills */}
          <li className="skill-item">HTML</li>
          <li className="skill-item">CSS</li>
          <li className="skill-item">JavaScript</li>
          <li className="skill-item">Node.js</li>
          <li className="skill-item">Express</li>
          <li className="skill-item">PostgreSQL</li>
          <li className="skill-item">NoSQL</li>
          <li className="skill-item">PWA (Progressive Web App)</li>
          <li className="skill-item">MongoDB</li>
          <li className="skill-item">React</li>
          <li className="skill-item">MERN</li>
          <li className="skill-item">RESTful API</li>
        </ul>
      </div>
      
      {/* Section for professional skills */}
      <div className="skills-section">
        <h3 className="section-title">Professional Skills</h3>
        <ul className="skill-list">
          {/* List of professional skills */}
          <li className="skill-item">Communication</li>
          <li className="skill-item">Teamwork</li>
          <li className="skill-item">Leadership</li>
          <li className="skill-item">Microsoft Office Suite</li>
          <li className="skill-item">Enterprise Systems (IFS, SAP)</li>
          <li className="skill-item">Inventory</li>
          <li className="skill-item">Operations</li>
          <li className="skill-item">Supply Chain</li>
          <li className="skill-item">Marketing</li>
        </ul>
      </div>
      
      {/* Section to download the resume */}
      <div className="resume-download">
        <ul>
          <li>
            <a
              className="download-link"
              href="https://docs.google.com/document/d/1tr7-36QPmStgYDY69mZBk1LlICV8tRee/edit?usp=drive_link&ouid=113478191430447452414&rtpof=true&sd=true"
              download
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
