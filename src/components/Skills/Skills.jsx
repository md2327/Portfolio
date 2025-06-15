import { useState } from "react";
import styles from "./Skills.module.css";
import skills from "../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  const [selectedIdx, setSelectedIdx] = useState(0); // start with the first skill

  const total = skills.length;

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skillsCarousel}>
          <div className={styles.skills}>
            {skills.map((skill, idx) => {
              let offset = (idx - selectedIdx + total) % total;
              if (offset > total / 2) offset -= total;

              const translateX = offset * 180; // spacing between items
              const isActive = idx === selectedIdx;
              const isAdjacent = Math.abs(offset) === 1;

              const style = {
                transform: `translateX(${translateX}px) ${
                  isActive
                    ? "scale(1.2)"
                    : isAdjacent
                    ? "scale(0.9)"
                    : "scale(0.8)"
                }`,
                zIndex: isActive ? 3 : isAdjacent ? 2 : 2,
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
                  className={`${styles.skillItem} ${
                    isActive ? styles.active : isAdjacent ? styles.adjacent : ""
                  }`}
                  style={style}
                  onClick={() => setSelectedIdx(idx)}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  // Optionally, add keyboard accessibility:
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setSelectedIdx(idx);
                  }}
                >
                  <div className={styles.skill}>
                    <div className={styles.skillImageContainer}>
                      <img
                        src={getImageUrl(skill.imageSrc)}
                        alt={skill.title}
                      />
                    </div>
                    <p>{skill.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
