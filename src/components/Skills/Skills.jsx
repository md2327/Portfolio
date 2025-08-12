import { useState, useEffect } from "react";
import styles from "./Skills.module.css";
import skillsLanguages from "../data/skillsLanguages.json";
import skillsTools from "../data/skillsTools.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  const [carouselIdx, setCarouselIdx] = useState(0); // start with first item
  const [currentSkills, setCurrentSkills] = useState(skillsLanguages); // default setting
  const [isActive, setIsActive] = useState('languages');

  const handleLanguagesBtn = () => {
    setCurrentSkills(skillsLanguages); // toggles on
    setIsActive('languages');
  }
  const handleToolsBtn = () => {
    setCurrentSkills(skillsTools); // toggles on
    setIsActive('tools');
  }

  // infinite carousal effect
  const total = currentSkills.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIdx((prev) => (prev + 1) % total);
    }, 1000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.buttons}>
        <button className={`${styles.languagesBtn} ${isActive === 'languages' ? styles.active : 'background: #fff, color: #000'}`} onClick={handleLanguagesBtn}>Programming Languages</button>
        <button className={`${styles.toolsBtn} ${isActive === 'tools' ? styles.active : 'background: #fff, color: #000'}`} onClick={handleToolsBtn}>Frameworks & Tools</button>
      </div>
      <div className={styles.content}>
        <div className={styles.skillsCarousel}>
          <div className={styles.skills}>
            {currentSkills.map((skill, idx) => {
              let offset = (idx - carouselIdx + total) % total; // set offset relative to idx
              if (offset > total / 2) offset -= total;

              const translateX = offset * 180; // spacing between items
              const isActive = idx === carouselIdx;
              const isAdjacent = Math.abs(offset) === 1;

              const style = {
                transform: `translateX(${translateX}px) ${
                  isActive
                    ? "scale(1.2)"
                    : isAdjacent
                    ? "scale(0.9)"
                    : "scale(0.7)"
                }`,
                zIndex: isActive ? 3 : isAdjacent ? 2 : 1,
                opacity: isActive ? 1 : 0.5,
                transition: "transform 0.5s, opacity 0.5s, z-index 0.5s",
                position: "absolute",
                left: "50%",
                top: "50%",
                transformOrigin: "center"
              };

              return (
                <div
                  key={idx}
                  className={`${styles.skillContent} ${
                    isActive ? style.active : isAdjacent ? styles.adjacent : ""
                  }`}
                  style={style}
                >
                  <div className={styles.imageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.image}/>
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
