import React from "react";
import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";
import { ReactTyped } from "react-typed";
import { LinearGradient } from "react-text-gradients";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Mina Dang</h1>
        <div className={styles.description}>
          <span>&lt;&nbsp;</span>
          <LinearGradient gradient={["to left", "#17acff, #ff68f0"]}>
            <ReactTyped
              className={styles.colorFlow}
              strings={[                
                "Frontend Development", 
                "Software Engineering", 
                "AI Engineering"]} 
                typeSpeed={40} 
                backSpeed={40}
                loop
            />
          </LinearGradient>
          <span>&nbsp;/&gt;</span>
        </div>
      </div>
      <img
        src={getImageUrl("intro/headshotImage.jpeg")}
        alt="Headshot Image of Me"
        className={styles.headshotImg}
      />
      <div className={styles.imgBlur} />
    </section>
  );
};
