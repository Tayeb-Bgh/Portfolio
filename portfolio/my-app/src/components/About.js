import React from "react";
import coderImage from "./assets/coddeur.png"; // Image de codage (remplace si nécessaire)

function About() {
  return (
    <section id="about" className="about">
      <h2>About</h2>
      <div className="about-container">
        <div className="about-text">
          <h3>Introduction:</h3>
          <p>
            I am a 20-year-old Computer Science student at the University of Béjaïa, passionate about solving problems through technology.
I am driven by a desire to continuously improve my skills and aspire to become a Software Architect. My focus is on designing efficient, reliable systems that meet user needs while embracing challenges and innovation.

          </p>
          <a href="#projects">
          <button className="about-button" >Continue</button>
          </a>
        </div>
        <div className="about-image">
          <img src={coderImage} alt="A person coding" width={'500px'} />
        </div>
      </div>
    </section>
  );
}

export default About;
