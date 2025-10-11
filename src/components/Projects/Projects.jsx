// src/components/Projects.jsx
import React from "react";
import "./Projects.css";
import { Github, Globe } from "lucide-react"; // use Lucide instead of PNG
import newsExplorerImage from "../../assets/news-explorer.png";
import wtwrImage from "../../assets/wtwr.png";
import aroundUsImage from "../../assets/aroundtheus.png";
import coffeeShopImage from "../../assets/coffeeshop.png";

function Projects() {
  const projects = [
    {
      title: "News Explorer",
      image: newsExplorerImage, // replace with your image
      github: "https://github.com/shay-p77/news-explorer-frontend.git",
      live: "https://newsexplorers.netlify.app/",
      description:
        "Developed a responsive web application that lets users search for the latest news articles by keyword using a third-party News API. Implemented a dynamic UI for displaying articles, a 'Save Article' feature, and simulated backend functionality for user authentication and article management.",
      skills: ["React", "JavaScript", "CSS", "Rest APIs"],
    },
    {
      title: "WTWR (What to Wear)",
      image: wtwrImage,
      github: "https://github.com/shay-p77/se_project_react.git",
      live: "https://wtwr-weather.netlify.app/",
      description:
        "A full-stack weather-based clothing recommendation app. Built with React and Express, the app shows outfit suggestions based on live weather data. Includes user authentication, profile management, and the ability to add or delete clothing items via modals. This was my first full React and back-end integration project using MongoDB.",
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS"],
    },
    {
      title: "Around the U.S.",
      image: aroundUsImage,
      github: "https://github.com/shay-p77/se_project_aroundtheus.git",
      description:
        "Created an interactive, Instagram-style web app with user profiles, image cards, like and delete functionality, and modals. Designed the UI with HTML/CSS, then progressively added JavaScript features like API calls, form validation, and dynamic content. This was my first large-scale JavaScript project, and it greatly boosted my confidence in front-end development.",
      skills: ["HTML", "CSS", "JavaScript", "Rest APIs"],
    },
    {
      title: "Coffee Shop Website",
      image: coffeeShopImage,
      github: "https://github.com/shay-p77/se_project_coffeeshop.git",
      description:
        "Built a responsive coffee shop website based on a layout specification. Developed a navigation bar, integrated YouTube videos using iframe, and implemented a working contact form for booking tables. Strengthened understanding of semantic HTML and structured layouts.",
      skills: ["HTML", "CSS"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects__heading">Projects</h2>
      <div className="projects__container">
        {projects.map((project, index) => (
          <div className="project__card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project__image"
            />
            <div className="project__content">
              <div className="project__group">
                <h3 className="project__title">{project.title}</h3>
                <div className="project__links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project__button"
                  >
                    <Github size={20} strokeWidth={1.8} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__button"
                    >
                      <Globe size={20} strokeWidth={1.8} />
                    </a>
                  )}
                </div>
              </div>

              <p className="project__description">{project.description}</p>

              <div className="project__skills">
                {project.skills.map((skill, idx) => (
                  <span key={idx} className="project__skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
