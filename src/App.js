import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectPage from "./components/ProjectPage";
import Footer from "./components/Footer";
import "./App.css";

function MainLayoutContent() {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const getHeaderOffset = () => {
    const header = document.querySelector(".header");
    return (header?.offsetHeight || 88) + 8;
  };

  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "skills"];
    let rafId = null;

    const updateActiveSection = () => {
      const headerOffset = getHeaderOffset();
      // Use a reference line just under the fixed header to avoid activating
      // the next section too early while the hero is still on screen.
      const referenceY = headerOffset + 2;
      let current = sectionIds[0];

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        if (rect.top <= referenceY) current = id;
      });

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    const onScrollOrResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) return;

    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = getHeaderOffset();
    const top = element.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(id);
  }, [location.hash]);

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <Hero id="hero" />
      <main>
        <About id="about" />
        <Projects id="projects" />
        <Skills id="skills" />
      </main>
      <Footer />
    </div>
  );
}

function ProjectPageLayout() {
  return (
    <div className="App">
      <Header activeSection="" />
      <ProjectPage />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayoutContent />} />
          <Route path="/projects/:id" element={<ProjectPageLayout />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;