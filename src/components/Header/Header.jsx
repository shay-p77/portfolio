import React, { useState } from "react";
import "./Header.css";
import { Menu, X } from "lucide-react"; // Menu = hamburger, X = close
import resumePDF from "/Shay-Developer-Resume IL .pdf";

// import avatar from "../../assets/me.jpeg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* <img src={avatar} alt="Shay Paley" className="header__avatar" /> */}

      <div className="header__container">
        <span className="header__name">Shay Paley</span>

        {/* Hamburger button (shows Menu or X depending on state) */}
        <button
          className="header__toggle"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`header__nav ${isMenuOpen ? "active" : ""}`}>
          <a
            href="#about"
            className="header__nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="header__nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="header__nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="header__nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
