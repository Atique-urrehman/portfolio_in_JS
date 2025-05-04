// pages/Education.jsx
import React from "react";

function Education() {
  const educationData = [
    {
      degree: "Pre-Engineering",
      institute: "Government College",
      year: "2021 – 2023",
    },
    {
      degree: "BS Computer Science",
      institute: "ITU Punjab",
      year: "2023 – 2027",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px", color: "#343a40" }}>🎓 Education</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {educationData.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "10px",
              padding: "20px",
              borderLeft: "6px solid #0d6efd",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ marginBottom: "10px", color: "#0d6efd" }}>{item.degree}</h3>
            <p style={{ margin: "5px 0", fontWeight: "bold" }}>{item.institute}</p>
            <p style={{ margin: "5px 0", color: "#555" }}>{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
