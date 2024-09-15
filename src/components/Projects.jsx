import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of the project...</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of the project...</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
