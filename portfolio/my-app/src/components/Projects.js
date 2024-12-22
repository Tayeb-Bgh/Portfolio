import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Pong",
    description: `Dive into a modern twist on the classic 2D Pong game, meticulously developed in C using the powerful Raylib graphics library. This version stays true to the original rules but introduces exciting new features to enhance gameplay.

-Standard Mode: Relive the timeless classic with its straightforward and competitive gameplay.

-Custom Mode: Add a layer of strategy and unpredictability to the game. In this mode:

Three random obstacles appear at the center of the field five seconds into the game, creating thrilling challenges for both players.
Players are equipped with three slow-motion triggers, allowing them to reduce the ball's speed momentarily-perfect for escaping critical situations or gaining the upper hand.
Multiplayer Mode: Face off against a friend in local multiplayer, available in both Standard and Custom modes. The second player gets their own set of keyboard controls to maneuver their paddle and compete for victory.

Whether you’re playing solo or with a friend, Pong blends nostalgia with innovation to deliver an engaging gaming experience. Get ready to test your reflexes and strategies in this reimagined classic!`,
    shortDesc: "Classic 2D table tennis game with custom features",
    images: [require('./assets/pong-preview.png'), require('./assets/pong-mode.png'), require('./assets/pong-custom.png')],
  },
  {
    title: "Snake",
    description: `A simple reimplementation of the classic Snake game in C++ using Raylib for graphics. Focuses on traditional gameplay mechanics with a straightforward approach.`
,
    shortDesc: "Classic Snake game with simple gameplay",
    images: [require('./assets/snake-preview.png'),require('./assets/snake-game.png')],
  },
  {
    title: "Taalim+",
    description: `Application de gestion de cours de soutien développée avec React et Express.js, utilisant SQLite pour le stockage local. 
Cette application est conçue pour simplifier la gestion quotidienne des cours de soutien, en offrant une solution tout-en-un pour les enseignants et les centres de formation.`,
    shortDesc: "Tutoring course management application (groups, sessions, scheduling, payments...)",
    images: null,
    preview: [require('./assets/taalim-preview.png')],
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.images ? project.images[0] : project.preview} 
                alt={project.title} 
                className="project-thumbnail"
              />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.shortDesc}</p>
              <button 
                className="project-link"
                onClick={() => {
                  if(project.images === null){
                    navigate('/taalim')
                  }else
                    setSelectedProject(project)
                  }}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-body">
              <h2>{selectedProject.title}</h2>
              <div className="project-description">
                {selectedProject.description.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
                <div className="project-gallery">
                  {selectedProject.images.map((image, index) => (
                    <img 
                      key={index} 
                      src={image} 
                      alt={`${selectedProject.title} screenshot ${index + 1}`} 
                      className="gallery-image"
                    />
                  ))}
                </div>
              
            </div>
          </div>
        </div>
      ) 
      }
    </section>
  );
}

export default Projects;