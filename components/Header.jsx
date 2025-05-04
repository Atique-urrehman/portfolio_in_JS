import React from "react";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#343a40",
        color: "#fff",
        padding: "10px 20px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        height: "60px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Atique Ur Rehman Portfolio</h1>
    </header>
  );
}

export default Header;
