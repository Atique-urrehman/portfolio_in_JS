// pages/Skills.jsx
import React from "react";
import { FaCode, FaGamepad, FaDatabase, FaCss3Alt } from "react-icons/fa"; // Importing icons

function Skills() {
  const skillData = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "HTML, CSS, JavaScript, React",
    },
    {
      icon: <FaGamepad />,
      title: "Game Development",
      description: "Unity (C#), Unreal Engine (Blueprints)",
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "MySQL, MongoDB, SQL Server",
    },
    {
      icon: <FaCss3Alt />,
      title: "UI/UX Design",
      description: "Responsive Design, Figma, Sketch",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px", color: "#343a40" }}>💻 Skills</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {skillData.map((skill, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              borderLeft: "6px solid #0d6efd",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                fontSize: "40px",
                color: "#0d6efd",
                marginBottom: "10px",
              }}
            >
              {skill.icon}
            </div>
            <h3 style={{ marginBottom: "10px", color: "#0d6efd" }}>{skill.title}</h3>
            <p style={{ color: "#555" }}>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
