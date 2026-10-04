import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Experience from "./components/Experience.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="top" className="wrap">
        <Hero />
        <Projects />
        <Skills />
        <Services />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <footer>
        <div className="wrap">© {new Date().getFullYear()} Waseem Abbas. Built with React.</div>
      </footer>
    </>
  );
}
