import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "./LanguageContext";

function Header({ activeSection }) {
  const { lang, toggle, t } = useLang();

  return (
    <header className="header">
      <a href="#hero" className="logo" id="portfolio">
        <div>Portfolio</div>
      </a>

      <nav className="nav">
        <Link to="/#about" className={activeSection === "about" ? "active" : ""}>
          {t.nav.about}
        </Link>
        <Link to="/#projects" className={activeSection === "projects" ? "active" : ""}>
          {t.nav.projects}
        </Link>
        <Link to="/#skills" className={activeSection === "skills" ? "active" : ""}>
          {t.nav.skills}
        </Link>
      </nav>

      {/* Toggle FR / EN */}
      <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
        <span className={lang === "fr" ? "lang-toggle__opt lang-toggle__opt--active" : "lang-toggle__opt"}>
          FR
        </span>
        <span className="lang-toggle__sep">|</span>
        <span className={lang === "en" ? "lang-toggle__opt lang-toggle__opt--active" : "lang-toggle__opt"}>
          EN
        </span>
      </button>
    </header>
  );
}

export default Header;