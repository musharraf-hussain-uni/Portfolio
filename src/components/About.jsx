import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        {/* About Me Section */}
        <div className="about-me">
          <h2 className="about-heading">About Me</h2>
          <p className="about-description">
            Hi, I'm Musharraf Hussain, a dedicated QA Automation Engineer with
            extensive experience in test automation and manual testing. My
            expertise lies in developing robust testing frameworks, executing
            detailed test plans, and ensuring software quality across various
            platforms. I also have hands-on experience in web development, which
            enhances my ability to understand and test complex applications.
          </p>
        </div>

        {/* Professional Experience Section */}
        <div className="experience-section">
          <h3 className="section-heading">Professional Experience</h3>
          <div className="experience-item">
            <h4 className="company-name">QA Engineer at 10Pearls</h4>
            <p className="experience-description">
              Developed and executed automated and manual test cases, ensured
              comprehensive test coverage, and collaborated with development
              teams to enhance software quality.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h3 className="section-heading">Skills</h3>
          <div className="skills-grid">
            <div className="skill-item">HTML, CSS, JavaScript</div>
            <div className="skill-item">API Testing</div>
            <div className="skill-item">GIT and GitHub</div>
            <div className="skill-item">Web Development and Testing</div>
            <div className="skill-item">Database (Oracle), SQL Server</div>
            <div className="skill-item">Firebase and Express server</div>
            <div className="skill-item">
              Planning, Execution, and Estimation
            </div>
            <div className="skill-item">Quality Documentation</div>
            <div className="skill-item">Testing Types</div>
            <div className="skill-item">Testing Tools and Methodologies</div>
            <div className="skill-item">Cypress for Automation</div>
            <div className="skill-item">Test Plan and Test Cases</div>
            <div className="skill-item">Postman & Apache JMeter</div>
            <div className="skill-item">Defect Management</div>
            <div className="skill-item">Jira</div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h3 className="section-heading">Education</h3>
          <div className="education-item">
            <p>2020-2024 (Completed)</p>
            <p>BS in Information Technology</p>
            <p>Sir Syed University of Engineering and Technology</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
