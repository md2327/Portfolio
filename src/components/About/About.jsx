import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/sittingImage.png")}
          alt="Image of Me Sitting"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3> Get to Know Me </h3>
              <p>
                I am currently pursuing a B.S in Computer Science with a Minor
                in Mathematics. Outside of the tech world, I enjoy spending time
                with my family, playing video games, and trying out new
                restaurants.
              </p>

              <p>
                While I am actively building skills in web development, I remain
                open to opportunities that will allow me to expand my knowledge
                in software development and machine learning/ai engineering.
              </p>

              <p>
                As a lifelong learner and self-motivated individual, I am always
                willing to put in effort needed to accomplish any given task.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
