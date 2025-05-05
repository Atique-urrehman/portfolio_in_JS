import React from "react";
import "../Contact/Contact.css"; // Import the specific CSS for this component

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>

      <div className="contact-form-wrapper">
        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h4>Other Ways to Reach Me:</h4>
          <p>
            <strong>Phone:</strong> +92 312 3456789
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/atique-ur-rehman-95972428b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com
            </a>
          </p>
          <p>
            <strong>Email:</strong> matiquerehman98@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
