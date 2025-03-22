import {HeroPage} from "./components/HeroPage.tsx";
import {Skills} from "./components/Skills.tsx";
import {NavBar} from "./components/NavBar.tsx";
import {Contact} from "./components/Contact.tsx";

import {Projects} from "./components/Projects.tsx";
import {About} from "./components/About.tsx";
import {Education} from "./components/Education.tsx";

function App() {

  return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <NavBar/>
        <HeroPage/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
  )
}

export default App
