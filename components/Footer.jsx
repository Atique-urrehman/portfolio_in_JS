import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#343a40",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "50px", // Important for spacing
        zIndex: 1000,
      }}
    >
      <p style={{ margin: 0 }}>&copy; 2025 Atique Ur Rehman. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
