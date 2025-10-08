import React from "react";
import "./Skills.css";
import {
  FrontendIcon,
  BackendIcon,
  ToolsIcon,
  AdditionalIcon,
} from "./SkillsIcons";

function Skills() {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: <FrontendIcon />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Responsive Design",
        "UI/UX Principles",
      ],
    },
    {
      title: "Backend Development",
      icon: <BackendIcon />,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MongoDB",
        "Data Modeling",
        "API Integration",
      ],
    },
    {
      title: "Development Tools",
      icon: <ToolsIcon />,
      skills: [
        "Git & GitHub",
        "GitBash",
        "VS Code",
        "Postman",
        "npm",
        "Netlify",
      ],
    },
    {
      title: "Additional Skills",
      icon: <AdditionalIcon />,
      skills: [
        "State Management",
        "LocalStorage",
        "Authentication",
        "Debugging",
        "Trello",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills__heading">Technical Skills</h2>
      <div className="skills__container">
        {skillsData.map((category, index) => (
          <div className="skills__card" key={index}>
            {category.icon}
            <h3 className="skills__title">{category.title}</h3>
            <ul className="skills__list">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="skills__item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
