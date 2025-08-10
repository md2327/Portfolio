import React from "react";
import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";
import { TypeAnimation } from "react-type-animation";
import { LinearGradient } from "react-text-gradients";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Mina Dang</h1>
        <div className={styles.description}>
          <span>&lt;&nbsp;</span>
          <LinearGradient gradient={["to left", "#17acff, #ff68f0"]}>
            <TypeAnimation
              className={styles.colorFlow}
              sequence={[
                "Frontend Development",
                1000,
                "Software Engineering",
                1000,
                "AI Engineering",
                1000,
              ]}
              repeat={Infinity}
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
