import React from "react";
import {useState} from "react"

function SkillCard({ title, description, logo, libraries }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`skill-card ${isFlipped ? 'flipped' : ''}`} 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="skill-card-inner">
        <div className="skill-card-front">
          <img src={logo} alt={title} className="skill-logo" />
          <h3>{title}</h3>
          <p>Click for details</p>
        </div>
        <div className="skill-card-back">
          <p>{description}</p>
          {libraries && (
            <>
              <h4 style={{ marginTop: '1rem' }}>Libraries:</h4>
              <ul>
                {libraries.map((library, index) => (
                  <li key={index}>{library}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;