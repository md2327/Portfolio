import React from "react";
import styles from "./ExperiencesCard.module.css";

export const ExperiencesCard = ({
  experience: { company, position, details },
  index
}) => {
  return (
      <div className={styles.container}>
        <h3 className={styles.company}>{company}</h3>
        <p className={styles.position}>{position}</p>
        <p className={styles.details}>{details}</p>
      </div>
  );
};