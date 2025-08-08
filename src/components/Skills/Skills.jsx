import { useState, useEffect } from "react";
import styles from "./Skills.module.css";
import skills from "../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  const [carouselIdx, setCarouselIdx] = useState(0); // start with first item
  const total = skills.length;

  // loops skill bubbles without clicks
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIdx((prev) => (prev + 1) % total);
    }, 2000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skillsCarousel}>
          <div className={styles.skills}>
            {skills.map((skill, idx) => {
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
                transformOrigin: "center",
              };

              return (
                <div
                  key={idx}
                  className={`${styles.skillContent} ${
                    isActive ? style.active : isAdjacent ? styles.adjacent : ""
                  }`}
                  style={style}
                >
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    className={styles.image}
                  />
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
