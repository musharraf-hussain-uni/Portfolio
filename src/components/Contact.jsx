import React, { useState } from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>
          If you have any questions or would like to discuss a project, feel
          free to reach out to me through the contact form below or via my
          social profiles.
        </p>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
            {submitted && (
              <p className="success-message">
                Thank you for your message! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/musharraf-hussain-uni"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/syed-musharraf-hussain-sqa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          {/* Add other social links as needed */}
        </div>

        {/* Optional: Add a location map if relevant */}
        {/* <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.500543684866!2d-122.41941868468156!3d37.77492927975956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d6e16cf0b%3A0x4e4fefc03a91f1e0!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1626330743565!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
