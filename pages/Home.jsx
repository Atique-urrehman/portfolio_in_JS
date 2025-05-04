import React from "react";

function Home() {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "40px",
    padding: "40px",
    alignItems: "center",
    minHeight: "80vh",
  };

  const imageStyle = {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const imageHoverStyle = {
    ...imageStyle,
    transform: "scale(1.05)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#343a40",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    color: "#555",
    margin: "8px 0",
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div style={containerStyle}>
      <div>
        <img
          src= 'pic2.jpg'
          alt="Atique Ur Rehman"
          style={hover ? imageHoverStyle : imageStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </div>
      <div>
        <h2 style={headingStyle}>Hello, I'm Atique Ur Rehman </h2>
        <p style={paragraphStyle}>
          A passionate BSCS student focused on web and game development.
        </p>
        <p style={paragraphStyle}>
          I build responsive websites, design games in Unity, and solve coding challenges using C++ and Python.
        </p>
      </div>
    </div>
  );
}

export default Home;
