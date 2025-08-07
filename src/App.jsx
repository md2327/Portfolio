import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { About } from "./components/About/About";
import { Experiences } from "./components/Experiences/Experiences";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Intro />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
