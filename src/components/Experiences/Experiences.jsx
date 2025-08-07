import React, { useState, useRef, useEffect } from "react";
import styles from "./Experiences.module.css";
import experiences from "../data/experiences.json";
import { ExperiencesCard } from "./ExperiencesCard"
import { getImageUrl } from "../../utils";;

function TimelineBar(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
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
    <div
      className={`${styles.timelineBar} ${isVisible ? styles.isVisible : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export const Experiences = () => {
  return (

    <section className={styles.container} id="experiences">
      <h2 className={styles.title}>Experiences</h2>
          <TimelineBar>
            <div className={styles.timelineCenter}></div>
          </TimelineBar>
      <div className={styles.experiences}>
        {experiences.map((experience, id) => {
          return (
            <div key={id}>{/* create elements using experiences.json so no props needed*/}
              <ExperiencesCard experience={experience} index={id} />
              <div className={styles.alignInfo}>
                <img
                  className={styles.image}
                  src={getImageUrl(experience.imageSrc)}
                  alt={`Image of ${experience.company}`}
                />
              <div className={styles.sideInfo}>
                <h3 className={styles.location}>{experience.location}</h3>
                <p className={styles.duration}>{experience.duration}</p>
              </div>
              </div>
            </div>
          );
        })}
      </div>
      </section>

  );
};
