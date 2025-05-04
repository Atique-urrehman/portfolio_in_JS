import React from "react";

function Contact() {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2>Contact Me</h2>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{ padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{ padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            style={{ padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
          ></textarea>
          <button type="submit" style={{
            padding: "10px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#343a40",
            color: "white",
            cursor: "pointer"
          }}>
            Send Message
          </button>
        </form>

        <div style={{ borderTop: "1px solid #ccc", paddingTop: "10px" }}>
          <h4>Other Ways to Reach Me:</h4>
          <p><strong>Phone:</strong> +92 312 3456789</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/atique-ur-rehman-95972428b/" target="_blank" rel="noopener noreferrer">
              linkedin.com
            </a>
          </p>
          <p><strong>Email:</strong> matiquerehman98@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
