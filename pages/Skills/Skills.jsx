import React from "react";
import { FaCode, FaGamepad, FaDatabase, FaCss3Alt } from "react-icons/fa";
import "../Skills/Skills.css"; // Import the specific CSS for this component

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
    <div className="skills-container">
      <h2 className="skills-heading">💻 Skills</h2>
      <div className="skills-grid">
        {skillData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
