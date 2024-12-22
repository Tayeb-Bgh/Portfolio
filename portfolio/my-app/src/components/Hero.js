import React, { useEffect, useState } from "react";

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = ["Tayeb BOUGUERMOUH"];
  const typeSpeed = 100; // Vitesse de frappe
  const eraseSpeed = 50; // Vitesse d'effacement
  const delay = 2000; // Temps d'arrêt avant d'effacer

  useEffect(() => {
    let timer;

    const updateText = () => {
      const currentText = texts[textIndex % texts.length];

      if (isErasing) {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === "") {
          setIsErasing(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
        if (displayText === currentText) {
          timer = setTimeout(() => setIsErasing(true), delay);
        }
      }

      timer = setTimeout(updateText, isErasing ? eraseSpeed : typeSpeed);
    };

    timer = setTimeout(updateText, typeSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isErasing, textIndex, texts]);

  return (
    <section id="hero" className="hero">
      <video autoPlay muted loop className="background-video">
        <source src="/videos/binary.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1 className="dynamic-text">{displayText ? displayText : <br></br>}</h1>
        <p>
          Computer Science undergraduate student <br />
          Passionate about software design and development, <br />
          with a focus on creating efficient and reliable solutions.
        </p>
        <a href="#about" className="hero-button">
          Explore My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
