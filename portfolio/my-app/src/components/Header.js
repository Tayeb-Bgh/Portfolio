import React from "react";
import { Link } from "react-router-dom";

function Header({ activeSection }) {
  return (
    <header className="header">
      <a href="#hero" className="logo" id="portfolio"><div>Portfolio</div></a>
      <nav className="nav">
        <Link to="/#about" className={activeSection === "about" ? "active" : ""}>
          About
        </Link>
        <Link
          to="/#projects"
          className={activeSection === "projects" ? "active" : ""}
        >
          Projects
        </Link>
        <Link
          to="/#skills"
          className={activeSection === "skills" ? "active" : ""}
        >
          Skills
        </Link>
        
      </nav>
      <div style={{width:'120px'}}></div>
      {/* <a href="#contact" className="contact-button">
          Contact
      </a> */}
    </header>
  );
}

export default Header;
