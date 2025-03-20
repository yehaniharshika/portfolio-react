import { useEffect, useState } from "react";

import {HeroPage} from "./components/HeroPage.tsx";
import {Skills} from "./components/Skills.tsx";
import {NavBar} from "./components/NavBar.tsx";
import {Contact} from "./components/Contact.tsx";

import {Projects} from "./components/Projects.tsx";
import {About} from "./components/About.tsx";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);
  return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HeroPage/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
  )
}

export default App
