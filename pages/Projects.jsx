import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Unity Game Development",
      tech: "Unity 2D & 3D",
      context: "Freelance / Game Dev Course",
      year: "2024",
      description: "Created a 3D car simulator and 2D endless runner using Unity and C#."
    },
    {
      title: "Portfolio Website",
      tech: "React, HTML, CSS",
      context: "Web Dev Course",
      year: "2025",
      description: "Designed a responsive portfolio website to showcase personal projects."
    },
    {
      title: "Flask Web App",
      tech: "Python Flask, SQLite",
      context: "University Project",
      year: "2024",
      description: "Developed a blog application with authentication and data persistence."
    },
    {
      title: "C++ Console Games",
      tech: "C++ (OOP)",
      context: "OOP Course",
      year: "2023",
      description: "Built console-based games like Chess, Snake, and Game of Life."
    }
  ];

  return (
    <div>
      <h2 style={{  marginBottom: "30px", fontSize: "2rem", color: "#343a40" }}>
        Projects
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}
      >
        {projectList.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ color: "#007bff", marginBottom: "10px" }}>{project.title}</h3>
            <p><strong>Tech Used:</strong> {project.tech}</p>
            <p><strong>Context:</strong> {project.context}</p>
            <p><strong>Year:</strong> {project.year}</p>
            <p style={{ color: "#555" }}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
