import React from "react";
import "../styles/Home.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="hero-content">
        <h1>Hi, I'm Musharraf Hussain</h1>
        <h2>Quality Assurance Automation Engineer</h2>
        <p>
          Specializing in creating automated tests to ensure quality and
          efficiency in software development.
        </p>
        <div className="cta-buttons">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-100}
            className="cta-btn"
          >
            View My Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            className="cta-btn secondary-btn"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="skills-overview">
        <h3>What I Do</h3>
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

      <div className="social-links">
        <a
          href="https://github.com/musharraf-hussain-uni"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/syed-musharraf-hussain-sqa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        {/* Add other social links as needed */}
      </div>

      <div className="scroll-down">
        <Link to="about" smooth={true} duration={500} offset={-100}>
          <i className="fas fa-chevron-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default Home;
