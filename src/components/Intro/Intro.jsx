import React from "react";
import styles from "./Intro.module.css";
import { ReactTyped } from "react-typed";
import { getImageUrl } from "../../utils";
import { TypeAnimation } from "react-type-animation";
import { LinearGradient } from "react-text-gradients";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Mina Dang</h1>
        <p className={styles.description}>
          A Computer Science undergrad with a passion for
          <LinearGradient gradient={["to left", "#17acff, #ff68f0"]}>
            <TypeAnimation
              className={styles.colorFlow}
              sequence={[
                " Frontend Developement",
                1000,
                " Software Engineering",
                1000,
                " AI Engineering",
                1000,
              ]}
              repeat={Infinity}
            />
          </LinearGradient>
        </p>
      </div>
      <img
        src={getImageUrl("intro/headshotImage.jpeg")}
        alt="Headshot Image of Me"
        className={styles.headshotImg}
      ></img>
      <div className={styles.imgBlur} />
    </section>
  );
};
