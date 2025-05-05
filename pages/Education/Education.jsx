// pages/Education.jsx
import React from "react";
import "../Education/Education.css";

function Education() {
  const educationData = [
    {
      degree: "Pre-Engineering",
      institute: "Government College",
      year: "2021 - 2023",
    },
    {
      degree: "BS Computer Science",
      institute: "ITU Punjab",
      year: "2023 - 2027",
    },
  ];

  return (
    <div className="education-container">
      <h2 className="education-title">🎓 Education</h2>
      <div className="education-grid">
        {educationData.map((item, index) => (
          <div key={index} className="education-card">
            <h3 className="education-degree">{item.degree}</h3>
            <p className="education-institute">{item.institute}</p>
            <p className="education-year">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
