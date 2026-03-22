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

  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "skills"];
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    };

    let observer;

    const handleIntersect = (entries) => {
      let maxVisibleSection = null;
      let maxIntersectionRatio = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
          maxVisibleSection = entry.target.id;
          maxIntersectionRatio = entry.intersectionRatio;
        }
      });
      if (maxVisibleSection) setActiveSection(maxVisibleSection);
    };

    const onDomReady = () => {
      observer = new IntersectionObserver(handleIntersect, observerOptions);
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
        else console.warn(`Element with id ${id} not found`);
      });
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
      onDomReady();
    } else {
      window.addEventListener("DOMContentLoaded", onDomReady);
    }

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("DOMContentLoaded", onDomReady);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    }
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