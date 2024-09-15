import React from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Musharraf Hussain</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-100}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-100}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-100}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-100}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="cv-download">
        <a
          href="/path-to-your-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
