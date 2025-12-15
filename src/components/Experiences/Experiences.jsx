import React, { useState, useRef, useEffect } from "react";
import styles from "./Experiences.module.css";
import experiences from "../data/experiences.json";
import { ExperiencesCard } from "./ExperiencesCard";
import { getImageUrl } from "../../utils";

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
      className={`${styles.timelineBar} ${isVisible ? styles.fadeInExperiences : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export const Experiences = () => {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const progressEl = progressRef.current;
    if (!section || !progressEl) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          const total = window.innerHeight + rect.height;
          let progress = (window.innerHeight - rect.top) / total;
          progress = Math.max(0, Math.min(1, progress));
          progressEl.style.transform = `scaleY(${progress})`;
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className={styles.container} id="experiences" ref={sectionRef}>
      <h2 className={styles.title}>Experiences</h2>
      <div className={styles.timelineLine}>
        <div className={styles.timelineProgress} ref={progressRef}></div>
      </div>
          {experiences.map((experience, id) => {
            return (
              <div className={styles.content} key={id}>
                <div className={styles.experiencesWrapper}>
                  <div className={styles.leftContent}>
                    <img
                      className={styles.image}
                      src={getImageUrl(experience.imageSrc)}
                      alt={`Image of ${experience.company}`}
                    />
                    <div className={styles.sideInfo}>
                      <h3>{experience.location}</h3>
                      <p>{experience.duration}</p>
                    </div>
                  </div>
                  <ExperiencesCard experience={experience} index={id} />
                  {/* create elements using experiences.json so no props needed*/}    
                </div>
                <div className={styles.timelineMarker}></div>
              </div>
            );
          })}
    </section>
  );
};
