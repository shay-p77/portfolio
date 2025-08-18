import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <p className="about__text">
          I’m passionate about crafting web experiences that are both intuitive and visually engaging. I enjoy turning ideas into interactive interfaces while keeping the user’s experience front and center.
        </p>
        <p className="about__text">
          Beyond writing code, I focus on **problem-solving creatively**, experimenting with new UI patterns, and continuously learning ways to make applications more accessible and efficient.
        </p>
        <p className="about__text">
          When I’m not working on projects, I like exploring design trends, thinking about how to simplify complex interactions, and finding inspiration in everyday experiences to improve the digital spaces I build.
        </p>
      </div>
    </section>
  );
}

export default About;
