import { useLang } from "./LanguageContext";

function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="hero">
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-orb hero-orb--a" aria-hidden="true" />
      <div className="hero-orb hero-orb--b" aria-hidden="true" />

      <div className="hero-shell">
        <div className="hero-content">
          <p className="hero-kicker">Software Engineering</p>
          <h1 className="hero-title" aria-label="Tayeb Bouguermouh">
            <span className="hero-title__first">Tayeb</span>
            <span className="hero-title__last">BOUGUERMOUH</span>
          </h1>

          <p className="hero-subtitle">
            {t.hero.subtitle.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>

          <div className="hero-button-link">
            <a href="#projects" className="about-button">
              {t.hero.cta}
            </a>
          </div>

          
        </div>

        
      </div>
    </section>
  );
}

export default Hero;