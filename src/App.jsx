import { useState, useEffect, useRef } from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { About } from "./components/About/About";
import { Experiences } from "./components/Experiences/Experiences";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

// fade in upon scroll animation
function withScrollAnimation(WrappedComponent) {
  return function ScrollAnimatedComponent(props) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(entry.isIntersecting);
          }
        });
      });
      
      if (domRef.current) {
        observer.observe(domRef.current);
      }
      
      return () => {
        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      };
    }, []);

    return (
      <div ref={domRef} className={isVisible ? styles.fadeIn : ''}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

function App() {
  const AnimatedIntro = withScrollAnimation(Intro);
  const AnimatedAbout = withScrollAnimation(About);
  const AnimatedExperiences = withScrollAnimation(Experiences);
  const AnimatedSkills = withScrollAnimation(Skills);
  const AnimatedProjects = withScrollAnimation(Projects);
  const AnimatedContact = withScrollAnimation(Contact);

  return (
    <div className={styles.App}>
      <Navbar />
      <AnimatedIntro />
      <AnimatedAbout />
      <AnimatedExperiences />
      <AnimatedSkills />
      <AnimatedProjects />
      <AnimatedContact />
    </div>
  );
}

export default App;
