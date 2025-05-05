import React from "react";
import "../Projects/Projects.css"; // Make sure this path matches your structure

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
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 className="project-title">{project.title}</h3>
            <p><strong>Tech Used:</strong> {project.tech}</p>
            <p><strong>Context:</strong> {project.context}</p>
            <p><strong>Year:</strong> {project.year}</p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
