import React from "react";
import { useLang } from "./LanguageContext";

function About() {
  const { t, lang } = useLang();

  const educationData = [
    {
      year: lang === "fr" ? "Sept 2025 - Présent" : "Sept 2025 - Present",
      title: lang === "fr" ? "Licence 3 Informatique" : "BSc Computer Science (Year 3)",
      school: "Université Clermont Auvergne",
      location: "Clermont-Ferrand, France",
      description: "",
      ranking: 2,
      totalStudents: 92,
      rankNote: lang === "fr"
        ? "au semestre 5"
        : "in semester 5",
      icon: "🎓",
    },
    {
      year: "2022 - 2025",
      title: lang === "fr"
        ? "Licence Informatique - Systèmes Informatiques"
        : "BSc Computer Science - Computer Systems",
      school: "Université Abderrahmane-Mira",
      location: "Béjaia, Algérie",
      description: lang === "fr"
        ? "Diplôme obtenu."
        : "Degree obtained.",
      ranking: 4,
      totalStudents: 229,
      rankNote: lang === "fr"
        ? ""
        : "",
      icon: "🎓",
    },
    {
      year: "2021 - 2022",
      title: lang === "fr"
        ? "Baccalauréat Technique Mathématiques"
        : "Mathematics & Technology Baccalaureate",
      school: "Lycée 20 Août 1956",
      location: "Ouzellaguèn, Algérie",
      description: "",
      icon: "🏆",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-header">
        <h2>{t.about.sectionTitle}</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              
              
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-school">{item.school}</p>
                <p className="timeline-location">📍 {item.location}</p>
                {item.description && (
                  <p className="timeline-description">{item.description}</p>
                )}
                {item.ranking && item.totalStudents && (
                  <p className="timeline-ranking-text">
                    🏆{" "}
                    {lang === "fr" ? "Classé " : "Ranked "}
                    <span className="ranking-number">
                      {item.ranking}{lang === "fr" ? "e" : item.ranking === 1 ? "st" : item.ranking === 2 ? "nd" : item.ranking === 3 ? "rd" : "th"}
                    </span>
                    {lang === "fr"
                      ? ` sur ${item.totalStudents} étudiants `
                      : ` out of ${item.totalStudents} students `}
                    {item.rankNote}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="#projects">
        <button className="about-button">{t.about.cta}</button>
      </a>
    </section>
  );
}

export default About;