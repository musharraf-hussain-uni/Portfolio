import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <p>
          Hi, I'm Musharraf Hussain, a dedicated QA Automation Engineer with
          extensive experience in test automation and manual testing. My
          expertise lies in developing robust testing frameworks, executing
          detailed test plans, and ensuring software quality across various
          platforms. With a solid background in QA, I focus on identifying
          defects early in the development cycle, improving test efficiency, and
          delivering high-quality software solutions. I also have hands-on
          experience in web development, which enhances my ability to understand
          and test complex applications.
        </p>

        <div className="experience">
          <h3>PROFESSIONAL EXPERIENCE</h3>
          <ul>
            <li>
              <h4 className="company-name">QA Engineer at 10Pearls</h4>
              <p>
                Developed and executed automated and manual test cases, ensured
                comprehensive test coverage, and collaborated with development
                teams to enhance software quality.
              </p>
            </li>
          </ul>
        </div>

        <div className="skills">
          <h3>SKILLS</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>API Testing</li>
            <li>GIT and GitHub</li>
            <li>Web Development and Testing</li>
            <li>Database (Oracle), SQL Server</li>
            <li>Firebase and Express server</li>
            <li>Planning, Execution, and Estimation</li>
            <li>Quality Documentation</li>
            <li>Testing Types</li>
            <li>Testing Tools and Methodologies</li>
            <li>Cypress for Automation</li>
            <li>Test Plan and Test Cases</li>
            <li>Postman & Apache JMeter</li>
            <li>Defect Management</li>
            <li>Jira</li>
          </ul>
        </div>

        <div className="education">
          <h3>EDUCATION</h3>
          <p>2020-2024 (Completed)</p>
          <p>BS in Information Technology</p>
          <p>Sir Syed University of Engineering and Technology</p>
        </div>
      </div>
    </section>
  );
};

export default About;
