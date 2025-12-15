import React, { useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const carouselRef = useRef(null);
  const originalWidthRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const scrollStep = () => {
    const el = carouselRef.current;
    if (!el) return 300;
    const slide = el.querySelector(`.${styles.slide}`);
    const slideWidth = slide ? slide.offsetWidth : Math.round(el.clientWidth * 0.8);
    const gap = parseInt(getComputedStyle(el).gap) || 16;
    return slideWidth + gap;
  };

  const scrollNext = () => {
    const el = carouselRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
    const step = scrollStep();
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    el.scrollBy({ left: step, behavior: "smooth" });

    // if duplicated second half in on screen, loop back
    setTimeout(() => {
      const originalWidth = originalWidthRef.current || el.scrollWidth / 2;
      if (el.scrollLeft >= originalWidth - 2) {
        el.scrollLeft = el.scrollLeft - originalWidth;
      }
      isAnimatingRef.current = false;
    }, 420);
  };

  const scrollPrev = () => {
    const el = carouselRef.current;
    if (!el) return;
    const atStart = el.scrollLeft <= 1;
    const step = scrollStep();
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    el.scrollBy({ left: -step, behavior: "smooth" });
    setTimeout(() => {
      const originalWidth = originalWidthRef.current || el.scrollWidth / 2;
      if (el.scrollLeft <= 2) {
        el.scrollLeft = el.scrollLeft + originalWidth;
      }
      isAnimatingRef.current = false;
    }, 420);
  };

  // initialize measurement of original (non-duplicated) width
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    // compute width of one set (render two sets)
    const compute = () => {
      originalWidthRef.current = el.scrollWidth / 2;
    };
    // run after layout
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.carousel}>
        <button
          className={`${styles.arrow} ${styles.left}`}
          aria-label="Scroll left"
          onClick={scrollPrev}
        >
          <img src="/assets/projects/left arrow.png" alt="left" />
        </button>

        <div className={styles.projects} ref={carouselRef}>
          {[...projects, ...projects].map((project, id) => {
            // use modulo to keep visual indexing consistent
            const key = `p-${id}-${project.title}`;
            return (
              <div className={styles.slide} key={key}>
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>

        <button
          className={`${styles.arrow} ${styles.right}`}
          aria-label="Scroll right"
          onClick={scrollNext}
        >
          <img src="/assets/projects/right arrow.png" alt="right" />
        </button>
      </div>
    </section>
  );
};
