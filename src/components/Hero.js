import { useEffect, useState, useMemo } from "react";
import { useLang } from "./LanguageContext";

function Hero() {
  const { t } = useLang();
  const [displayText, setDisplayText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = useMemo(() => ["Tayeb BOUGUERMOUH"], []);
  const typeSpeed = 100;
  const eraseSpeed = 50;
  const delay = 2000;

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
      </video>
      <div className="hero-content">
        <h1 className="dynamic-text">{displayText ? displayText : <br />}</h1>
        <p className="hero-subtitle">
          {t.hero.subtitle.split("\n").map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </p>
        <a href="#about">
          <button className="hero-button">{t.hero.cta}</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;