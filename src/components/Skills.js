import { useLang } from "./LanguageContext";

const skillsData = {
  fr: [
    {
      category: "Langages",
      icon: "{ }",
      color: "#4caf50",
      colorBg: "rgba(76,175,80,0.07)",
      colorBorder: "rgba(76,175,80,0.18)",
      skills: ["Java", "JavaScript", "TypeScript", "Dart", "C", "C#", "PHP", "SQL", "HTML", "CSS"],
    },
    {
      category: "Frontend",
      icon: "◈",
      color: "#64c8ff",
      colorBg: "rgba(100,200,255,0.07)",
      colorBorder: "rgba(100,200,255,0.18)",
      skills: ["React", "Flutter", "Tailwind CSS", "JavaFX", "Raylib"],
    },
    {
      category: "Backend",
      icon: "⚙",
      color: "#76ff03",
      colorBg: "rgba(118,255,3,0.07)",
      colorBorder: "rgba(118,255,3,0.18)",
      skills: ["Node.js", "Express", "API REST", "JWT", "Socket.io", "PostgreSQL", "MySQL", "SQLite"],
    },
    {
      category: "Outils & DevOps",
      icon: "⬡",
      color: "#ffb432",
      colorBg: "rgba(255,180,50,0.07)",
      colorBorder: "rgba(255,180,50,0.18)",
      skills: ["Git", "Postman", "Unity", "ANTLR4", "Cisco Packet Tracer", "Processing"],
    },
    {
      category: "Cloud & Déploiement",
      icon: "☁",
      color: "#c864ff",
      colorBg: "rgba(200,100,255,0.07)",
      colorBorder: "rgba(200,100,255,0.18)",
      skills: ["Netlify", "Render", "Back4App", "Aiven", "Cloudinary", "GitHub Actions"],
    },
    {
      category: "Bas niveau",
      icon: "▣",
      color: "#ff7055",
      colorBg: "rgba(255,112,85,0.07)",
      colorBorder: "rgba(255,112,85,0.18)",
      skills: ["Assembleur x86 (32 bits)", "MIPS R3000"],
    },
  ],
  en: [
    {
      category: "Languages",
      icon: "{ }",
      color: "#4caf50",
      colorBg: "rgba(76,175,80,0.07)",
      colorBorder: "rgba(76,175,80,0.18)",
      skills: ["Java", "JavaScript", "TypeScript", "Dart", "C", "C#", "PHP", "SQL", "HTML", "CSS"],
    },
    {
      category: "Frontend",
      icon: "◈",
      color: "#64c8ff",
      colorBg: "rgba(100,200,255,0.07)",
      colorBorder: "rgba(100,200,255,0.18)",
      skills: ["React", "Flutter", "Tailwind CSS", "JavaFX", "Raylib"],
    },
    {
      category: "Backend",
      icon: "⚙",
      color: "#76ff03",
      colorBg: "rgba(118,255,3,0.07)",
      colorBorder: "rgba(118,255,3,0.18)",
      skills: ["Node.js", "Express", "REST API", "JWT", "Socket.io", "PostgreSQL", "MySQL", "SQLite"],
    },
    {
      category: "Tools & DevOps",
      icon: "⬡",
      color: "#ffb432",
      colorBg: "rgba(255,180,50,0.07)",
      colorBorder: "rgba(255,180,50,0.18)",
      skills: ["Git", "Postman", "Unity", "ANTLR4", "Cisco Packet Tracer", "Processing"],
    },
    {
      category: "Cloud & Deployment",
      icon: "☁",
      color: "#c864ff",
      colorBg: "rgba(200,100,255,0.07)",
      colorBorder: "rgba(200,100,255,0.18)",
      skills: ["Netlify", "Render", "Back4App", "Aiven", "Cloudinary", "GitHub Actions"],
    },
    {
      category: "Low-level",
      icon: "▣",
      color: "#ff7055",
      colorBg: "rgba(255,112,85,0.07)",
      colorBorder: "rgba(255,112,85,0.18)",
      skills: ["x86 Assembly (32-bit)", "MIPS R3000"],
    },
  ],
};

function Skills() {
  const { lang } = useLang();
  const categories = skillsData[lang];

  const sectionTitle  = lang === "fr" ? "Compétences" : "Skills";
  const sectionSub    = lang === "fr" ? "Technologies et outils" : "Technologies and tools";

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2>{sectionTitle}</h2>
        <p className="skills-subtitle">{sectionSub}</p>
      </div>

      <div className="skills-grid-v2">
        {categories.map((cat) => (
          <div
            key={cat.category}
            className="skills-card"
            style={{ background: cat.colorBg, borderColor: cat.colorBorder }}
          >
            <div className="skills-card__header">
              <span className="skills-card__icon" style={{ color: cat.color }}>
                {cat.icon}
              </span>
              <h3 className="skills-card__title" style={{ color: cat.color }}>
                {cat.category}
              </h3>
            </div>

            <div className="skills-card__pills">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-pill"
                  style={{
                    borderColor: cat.colorBorder,
                    color: cat.color,
                    background: cat.colorBg,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;