import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

// ── README doc renderer ──────────────────────────────────────
function ProjectDoc({ description }) {
  return (
    <div className="proj-doc">
      <p className="proj-doc__overview">{description.overview}</p>

      {description.sections.map((section, i) => (
        <div key={i} className="proj-doc__section">
          <h3 className="proj-doc__heading">
            <span className="proj-doc__heading-bar" />
            {section.heading}
          </h3>
          {section.body && (
            <p
              className="proj-doc__body"
              dangerouslySetInnerHTML={{
                __html: section.body.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          )}
          {section.items && (
            <ul className="proj-doc__list">
              {section.items.map((item, j) => (
                <li key={j} className="proj-doc__item">
                  <span className="proj-doc__item-label">{item.label}</span>
                  <span className="proj-doc__item-sep"> — </span>
                  <span className="proj-doc__item-text">{item.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {description.stack && (
        <div className="proj-doc__section">
          <h3 className="proj-doc__heading">
            <span className="proj-doc__heading-bar" />
            Stack
          </h3>
          <table className="proj-doc__stack-table">
            <tbody>
              {Object.entries(description.stack).map(([cat, items]) => (
                <tr key={cat}>
                  <td className="proj-doc__stack-cat">{cat}</td>
                  <td className="proj-doc__stack-vals">
                    {items.map((tech) => (
                      <span key={tech} className="tech-pill">{tech}</span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ── Lightbox ─────────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);

  const prev = useCallback(() =>
    setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() =>
    setIndex((i) => (i + 1) % images.length), [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="lb-overlay" onClick={onClose}>
      <div className="lb-box" onClick={(e) => e.stopPropagation()}>

        {/* Close */}
        <button className="lb-close" onClick={onClose}>×</button>

        {/* Counter */}
        <span className="lb-counter">{index + 1} / {images.length}</span>

        {/* Image */}
        <div className="lb-img-wrap">
          <img
            src={images[index]}
            alt={`screenshot ${index + 1}`}
            className="lb-img"
          />
        </div>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button className="lb-arrow lb-arrow--left" onClick={prev}>‹</button>
            <button className="lb-arrow lb-arrow--right" onClick={next}>›</button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="lb-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`lb-dot${i === index ? " lb-dot--active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Gallery grid ─────────────────────────────────────────────
function Gallery({ images, placeholderText }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Only show real images in the grid (placeholders shown as empty slot)
  const realImages = images.filter((img) => !isPlaceholder(img));
  const hasPlaceholders = images.some((img) => isPlaceholder(img));

  return (
    <>
      <div className="pp-gallery">
        {realImages.length > 0 ? (
          realImages.map((img, i) => (
            <button
              key={i}
              className="pp-gallery__thumb"
              onClick={() => setLightboxIndex(i)}
              title="Voir en grand"
            >
              <img src={img} alt={`screenshot ${i + 1}`} />
              <span className="pp-gallery__zoom">⤢</span>
            </button>
          ))
        ) : (
          /* All placeholders */
          <div className="pp-gallery__empty">
            <span>🖼️</span>
            <p>{placeholderText}</p>
          </div>
        )}
        {/* If mix of real + placeholder, show a placeholder slot */}
        {realImages.length > 0 && hasPlaceholders && (
          <div className="pp-gallery__placeholder-slot">🖼️</div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={realImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

// ── Main component ───────────────────────────────────────────
function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useLang();
  const tp = t.projectPage;

  const meta_raw = projectsMeta.find((p) => p.id === id);

  if (!meta_raw) {
    return (
      <div className="pp-not-found">
        <p>Project not found.</p>
        <button className="pp-back-btn" onClick={() => navigate("/#projects")}>
          {tp.backBtn}
        </button>
      </div>
    );
  }

  const project = {
    ...meta_raw,
    title: PROJECT_TITLES[id] || id,
    badge: lang === "fr" ? meta_raw.badgeFr : meta_raw.badgeEn,
    shortDesc: lang === "fr" ? meta_raw.shortDescFr : meta_raw.shortDescEn,
    description: {
      ...(t.projectsData[id] || {}),
      stack: meta_raw.stack,
    },
  };

  const typeMeta = TYPE_META[project.type] || TYPE_META.web;
  const typeLabel = lang === "fr" ? typeMeta.labelFr : typeMeta.labelEn;

  const currentIndex = projectsMeta.findIndex((p) => p.id === id);
  const prevMeta = projectsMeta[currentIndex - 1] || null;
  const nextMeta = projectsMeta[currentIndex + 1] || null;
  const goTo = (pid) => { navigate(`/projects/${pid}`); window.scrollTo(0, 0); };

  return (
    <div className="pp-page">

      {/* ── TOP NAV ── */}
      <div className="pp-topbar">
        <button className="pp-back-btn" onClick={() => navigate("/#projects")}>
          {tp.backBtn}
        </button>
        <div className="pp-topbar-nav">
          {prevMeta && (
            <button className="pp-sibling-btn" onClick={() => goTo(prevMeta.id)}>
              ← {PROJECT_TITLES[prevMeta.id]}
            </button>
          )}
          {nextMeta && (
            <button className="pp-sibling-btn" onClick={() => goTo(nextMeta.id)}>
              {PROJECT_TITLES[nextMeta.id]} →
            </button>
          )}
        </div>
      </div>

      {/* ── CONTENT : doc + sidebar ── */}
      <div className="pp-content">

        {/* Doc column */}
        <div className="pp-doc-col">

          {/* Header */}
          <header className="pp-header">
            <div className="pp-header__badges">
              {project.badge && (
                <span className="project-badge" style={{ position: "static" }}>
                  {project.badge}
                </span>
              )}
              {project.status === "in-progress" && (
                <span className="pp-wip-badge">{tp.wipBadge}</span>
              )}
              <span
                className="project-type-tag"
                style={{ background: typeMeta.bg, color: typeMeta.color }}
              >
                {typeLabel}
              </span>
            </div>
            <h1 className="pp-title">{project.title}</h1>
            {project.description.tagline && (
              <p className="pp-tagline">{project.description.tagline}</p>
            )}
            <div className="pp-header__divider" />
          </header>

          {/* README body */}
          <ProjectDoc description={project.description} />

          {/* ── GALLERY — inside doc column, below content ── */}
          {project.images.length > 0 && (
            <div className="pp-gallery-section">
              <h3 className="proj-doc__heading" style={{ marginBottom: "1rem" }}>
                <span className="proj-doc__heading-bar" />
                Screenshots
              </h3>
              <Gallery
                images={project.images}
                placeholderText={tp.screenshotSoon}
              />
            </div>
          )}

          {/* Actions */}
          <div className="pp-actions">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="about-button">
                {tp.viewLive}
              </a>
            )}
            {project.externalLink && (
              <a href={project.externalLink} target="_blank" rel="noreferrer" className="about-button">
                {tp.visitWebsite}
              </a>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="pp-sidebar">
          <div className="pp-sidebar__block">
            <p className="pp-sidebar__label">{tp.sectionStack}</p>
            <div className="pp-sidebar__pills">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>

          {project.badge && (
            <div className="pp-sidebar__block">
              <p className="pp-sidebar__label">{tp.sectionCategory}</p>
              <p className="pp-sidebar__value">{project.badge}</p>
            </div>
          )}

          <div className="pp-sidebar__block">
            <p className="pp-sidebar__label">{tp.sectionType}</p>
            <p className="pp-sidebar__value" style={{ color: typeMeta.color }}>{typeLabel}</p>
          </div>

          <div className="pp-sidebar__block">
            <p className="pp-sidebar__label">{tp.sectionStatus}</p>
            <p className="pp-sidebar__value">
              {project.status === "in-progress"
                ? <span style={{ color: "#ffb432" }}>{tp.statusWip}</span>
                : <span style={{ color: "#4caf50" }}>{tp.statusCompleted}</span>
              }
            </p>
          </div>

          {(project.link || project.externalLink) && (
            <div className="pp-sidebar__block">
              <p className="pp-sidebar__label">{tp.sectionLinks}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="pp-sidebar__link">
                  {tp.viewLive} ↗
                </a>
              )}
              {project.externalLink && (
                <a href={project.externalLink} target="_blank" rel="noreferrer" className="pp-sidebar__link">
                  {tp.visitWebsite} ↗
                </a>
              )}
            </div>
          )}
        </aside>
      </div>

      {/* ── BOTTOM NAV ── */}
      <div className="pp-bottom-nav">
        {prevMeta ? (
          <button
            className="pp-bottom-nav__btn pp-bottom-nav__btn--prev"
            onClick={() => goTo(prevMeta.id)}
          >
            <span className="pp-bottom-nav__dir">{tp.prevLabel}</span>
            <span className="pp-bottom-nav__name">{PROJECT_TITLES[prevMeta.id]}</span>
          </button>
        ) : <div />}
        {nextMeta ? (
          <button
            className="pp-bottom-nav__btn pp-bottom-nav__btn--next"
            onClick={() => goTo(nextMeta.id)}
          >
            <span className="pp-bottom-nav__dir">{tp.nextLabel}</span>
            <span className="pp-bottom-nav__name">{PROJECT_TITLES[nextMeta.id]}</span>
          </button>
        ) : <div />}
      </div>

    </div>
  );
}

export default ProjectPage;