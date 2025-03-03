import React from 'react';
import './works.css';

const projects = [
  {
    title: "University Management Portal",
    tech: "ReactJS, Redux.js, HTML5, CSS3, JavaScript, RESTful APIs",
    description: "A streamlined web platform for academic collaboration, integrating API endpoints and implementing user authentication.",
    link: "#",
  },
 
  {
    title: "AI Chatbot",
    tech: "ReactJS, OpenAI API, Axios",
    description: "An AI-powered chatbot built with ReactJS that enables real-time conversations using OpenAI's GPT-4 API. The chatbot provides intelligent responses, maintains context, and offers a user-friendly chat interface with a typing indicator",
    link: "#",
  },
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <div className="worksContainer">
        {projects.map((project, index) => (
          <div key={index} className="worksCard">
            <h3 className="worksCardTitle">{project.title}</h3>
            <span className="worksTech">{project.tech}</span>
            <p className="worksCardDesc">{project.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
