import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
                <h1 className="about__heading">About Me</h1>

      <div className="about__container">
        <div className="about__left">
          <h2 className="about__title">Front-End Developer</h2>
          <p className="about__text">
            I’m a passionate front-end developer with expertise in React and modern JavaScript. 
            I focus on creating responsive, accessible, and visually engaging interfaces 
            that provide intuitive user experiences. I value writing clean, maintainable code 
            and following best practices to build polished web applications.
          </p>
        </div>
        <div className="about__right">
          <h3 className="about__subtitle">What I Do</h3>
          <ul className="about__list">
            <li>Frontend Development with React & Modern JavaScript</li>
            <li>Responsive Design & Accessibility Implementation</li>
            <li>UI/UX-focused Component Design</li>
            <li>Version Control with Git</li>
            <li>Project Organization & Best Practices</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
