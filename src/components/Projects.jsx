import React from "react";
import "../styles/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce platform with real-time data.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing my work and skills.",
      link: "#",
    },
    {
      title: "Automation Testing Framework",
      description: "A robust test automation framework built with Cypress.",
      link: "#",
    },
    {
      title: "Mobile App UI/UX",
      description:
        "Designed a seamless user interface for a mobile application.",
      link: "#",
    },
    {
      title: "API Testing",
      description: "Extensive testing of APIs using Postman and JMeter.",
      link: "#",
    },
    {
      title: "Data Visualization Dashboard",
      description: "A React-based dashboard for visualizing complex data.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>My Awesome Projects</h2>
        <p>Here’s a glimpse of some of my best works.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
      <div className="github-link">
        <a
          href="https://github.com/musharraf-hussain-uni"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} /> View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
