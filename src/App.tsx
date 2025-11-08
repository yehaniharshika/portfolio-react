import {HeroPage} from "./section/HeroPage.tsx";
import {Skills} from "./section/Skills.tsx";
import {NavBar} from "./components/NavBar.tsx";
import {Contact} from "./section/Contact.tsx";

import {Projects} from "./section/Projects.tsx";
import {About} from "./section/About.tsx";
import {Education} from "./section/Education.tsx";
import Experience from "./section/Experience.tsx";
import Footer from "./section/Footer.tsx";

function App() {

  return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <NavBar/>
        <HeroPage/>
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default App
