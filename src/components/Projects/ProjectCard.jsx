import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const handleCardClick = () => {
    window.open(demo, "_blank", "noopener, noreferrer");
  };

  const handleSourceClick = () => {
    window.open(source, "_blank", "noopener, noreferrer");
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${getImageUrl(imageSrc)})`,
      }}
      onClick={handleCardClick}
      type="button"
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <button
          className={styles.source}
          onClick={handleSourceClick}
          type="button"
        >
          Source Code
        </button>{" "}
      </div>
    </div>
  );
};
