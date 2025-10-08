import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© {new Date().getFullYear()} Shay Paley</p>
    </footer>
  );
}

export default Footer;
