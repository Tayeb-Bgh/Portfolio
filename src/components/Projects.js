import { useNavigate } from "react-router-dom";
import { projectsMeta, TYPE_META, isPlaceholder } from "./projectsData";
import { useLang } from "./LanguageContext";

const PROJECT_TITLES = {
  quickliv: "QuickLiv",
  hestia: "Hestia Manager",
  taalim: "Taalim+",
  locaflow: "LocaFlow",
  homelab: "Home Lab",
  pong: "Pong",
  //snake: "Snake",
};

function Projects() {
  const navigate = useNavigate();
  const { t, lang } = useLang();

  const openProject = (project) => {
    if (project.link) { window.open(project.link, "_blank"); return; }
    navigate(`/projects/${project.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>{t.projects.sectionTitle}</h2>
        <p className="projects-subtitle">{t.projects.subtitle}</p>
      </div>

      <div className="projects-grid">
        {projectsMeta.map((project) => {
          const meta = TYPE_META[project.type] || TYPE_META.web;
          const badge = lang === "fr" ? project.badgeFr : project.badgeEn;
          const shortDesc = lang === "fr" ? project.shortDescFr : project.shortDescEn;
          const typeLabel = lang === "fr" ? meta.labelFr : meta.labelEn;

          return (
            <article
              key={project.id}
              className={`project-card${project.status === "in-progress" ? " project-card--wip" : ""}`}
              onClick={() => openProject(project)}
            >
              <div className="project-image-container">
                {isPlaceholder(project.images[0]) ? (
                  <div className="project-thumbnail-placeholder">
                    <span>🖼️</span>
                    <span>{t.projects.previewSoon}</span>
                  </div>
                ) : (
                  <img src={project.images[0]} alt={project.id} className="project-thumbnail" />
                )}
                {badge && <span className="project-badge">{badge}</span>}
                {project.status === "in-progress" && (
                  <span className="project-wip-tag">{t.projects.inProgress}</span>
                )}
              </div>

              <div className="project-info">
                <div>
                  <span className="project-type-tag" style={{ background: meta.bg, color: meta.color }}>
                    {typeLabel}
                  </span>
                  <h3 className="project-title">{PROJECT_TITLES[project.id] || project.id}</h3>
                  <p className="project-short">{shortDesc}</p>
                </div>
                <div className="project-meta">
                  <div className="project-tech-row">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="project-tech-chip">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="project-tech-chip project-tech-more">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <button
                    className="about-button project-cta"
                    onClick={(e) => { e.stopPropagation(); openProject(project); }}
                  >
                    {t.projects.viewBtn}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;