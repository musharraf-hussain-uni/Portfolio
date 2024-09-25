import React from "react";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1 className="home-title">
          Hi, I'm <span>Musharraf Hussain</span>
        </h1>
        <p className="home-description">
          Specialized in creating <span>Manual</span> and{" "}
          <span>Automated Test</span> to ensure quality and efficiency in
          software development.
        </p>
        <div className="skills-overview">
          <h3 className="skills-title">What I Do</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <h4>Web Development</h4>
              <p>
                Creating modern, responsive web applications using React. I turn
                ideas into interactive and user-friendly websites.
              </p>
            </div>
            <div className="skill-item">
              <h4>UI/UX Design</h4>
              <p>
                Designing intuitive and engaging user interfaces. I focus on
                creating seamless experiences that delight users.
              </p>
            </div>
            <div className="skill-item">
              <h4>QA Test Automation</h4>
              <p>
                Ensuring the reliability and performance of web and mobile
                applications through thorough testing and automation.
              </p>
            </div>
          </div>
        </div>

        <a href="#about" className="home-cta">
          Learn More
          <FontAwesomeIcon icon={faChevronDown} className="home-icon" />
        </a>
      </div>
      <div className="home-bg"></div>
    </section>
  );
};

export default Home;
