import { createContext, useContext, useState } from "react";
import translations from "./translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr"); // français par défaut

  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook raccourci : const { t, lang, toggle } = useLang();
export function useLang() {
  return useContext(LanguageContext);
}