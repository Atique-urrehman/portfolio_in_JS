// components/SideNav.jsx
import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <nav style={{
      width: "220px",
      height: "100vh",
      backgroundColor: "#6c757d",
      color: "#fff",
      position: "fixed",
      paddingTop: "30px",
      display: "flex",
      flexDirection: "column",
      left: 0, // ensure it's stuck to the very left

      alignItems: "center"


      
    }}>
        
      <ul style={{
        listStyle: "none",
        padding: "0",
        width: "100%"
      }}>
        {["Home", "Education", "Skills", "Projects", "Contact"].map((item, index) => (
          <li key={index} style={{ margin: "15px 0", width: "100%", textAlign: "center" }}>
            <Link
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              style={{
                color: "#fff",
                textDecoration: "none",
                padding: "10px 0",
                display: "block",
                width: "100%",
                backgroundColor: "#495057",
                borderRadius: "5px",
                transition: "background-color 0.3s"
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#343a40"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#495057"}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNav;



