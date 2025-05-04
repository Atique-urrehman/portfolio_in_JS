import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import SideNav from "./components/SideNav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Education from "./pages/Education.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

import Skills from "./pages/Skills.jsx"; // Import this if not already done



function App() {
  return (
    <Router>
      <Header />
      <SideNav />
      <div style={{ marginLeft: "200px", marginTop: "60px", padding: "20px" }}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;



