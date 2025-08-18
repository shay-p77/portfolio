import React from "react";
import "../Hero/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div>
        <h1 className="hero__title">Hi, I'm Shay Paley</h1>
        <h2 className="hero__subtitle">
          Full-Stack Developer | React & JavaScript Enthusiast | UI/UX Focused{" "}
        </h2>
        <p className="hero__description">
          I create modern, responsive, and visually engaging web interfaces with
          a focus on clean, maintainable code. Skilled in React, HTML, CSS, and
          JavaScript, I bring designs to life while ensuring intuitive user
          experiences. Passionate about building interactive, accessible, and
          polished front-end applications that leave a lasting impression.
        </p>
        <div className="hero__buttons">
          <a className="hero__button" href="#projects">
            View My Work
          </a>
          <a className="hero__button" href="#contact">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
