import React from "react";
import "./Header.css";
// import avatar from "../../assets/me.jpeg";

function Header() {
  return (
    <header className="header">
      {/* <img src={avatar} alt="Shay Paley" className="header__avatar" /> */}

      <div className="header__container">
        <span className="header__name">Shay Paley</span>
        <nav className="header__nav">
          <a href="#about" className="header__nav-link">
            About
          </a>
          <a href="#skills" className="header__nav-link">
            Skills
          </a>
          <a href="#projects" className="header__nav-link">
            Projects
          </a>
          <a href="#contact" className="header__nav-link">
            Contact
          </a>
          <a
            href="/ShayPaley-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
