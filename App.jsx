import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import SideNav from "./components/SideNav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Education from "./pages/Education/Education.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import { ThemeProvider } from "./Context/ThemeContext"; // 
function App() {
  return (
    <ThemeProvider>
      <style>
        {`
            --body.light {
            --bg-color: #fff;
            --text-color: #000;
            --card-bg: #f8f9fa;
            --heading-color:rgb(140, 150, 159);
          }

          /* Dark Theme */
          body.dark {
            --bg-color:rgb(154, 46, 46);
            --text-color:rgb(145, 66, 66);
            --card-bg:rgb(158, 84, 84);
            --heading-color: #e0e0e0;
          }

          body.light {
            background-color: #fff;
            color: #000;
          }
          body.dark {
            background-color:rgb(32, 28, 28);
            color: #fff;
          }
        `}
      </style>
      <Router>
        <Header />
        <SideNav />
        <ThemeToggle />
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
    </ThemeProvider>
  );
}

export default App;
