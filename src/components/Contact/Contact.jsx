// src/components/Contact.jsx
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__container">
        {/* Heading */}
        <div className="contact__heading">
          <h2 className="contact__title">Let's work together</h2>
          <p className="contact__subtitle">
            Open to new opportunities and collaborations.
          </p>
        </div>

        {/* Contact Card */}
        <div className="contact__card">
          {/* Left: Get in touch */}
          <div className="contact__info">
            <h3 className="contact__section-title">Get in touch</h3>
            <ul className="contact__list">
              <li className="contact__item">
                <Mail className="contact__icon" />
                <span>shaypaley@gmail.com</span>
              </li>
              <li className="contact__item">
                <Phone className="contact__icon" />
                <span>+1 (804) 212-9396 (US)</span>
              </li>
              <li className="contact__item">
                <Phone className="contact__icon" />
                <span>+972 (55) 331-0020 (IL)</span>
              </li>
              <li className="contact__item">
                <MapPin className="contact__icon" />
                <span>Jerusalem, Israel</span>
              </li>
            </ul>
          </div>

          {/* Right: Follow me */}
          <div className="contact__socials">
            <h3 className="contact__section-title">Follow me</h3>
            <div className="contact__icons">
              <a
                href="https://github.com/shay-p77"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="contact__icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/shay-paley-867149319/
"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="contact__icon" />
              </a>
              {/* <a
                href="https://your-portfolio.com"
                target="_blank"
                rel="noreferrer"
              >
                <Globe className="contact__icon" />
              </a> */}
              {/* add more if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
