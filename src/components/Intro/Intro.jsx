import React from "react";
import { ReactTyped } from "react-typed";
import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";
import { TypeAnimation } from "react-type-animation";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <TypeAnimation
            sequence={[
              "Hi, there. I'm Mina Dang",
              1000,
              "Hello, I'm Mina Dang",
              1000,
              "My name is Mina Dang",
              1000,
            ]}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </h1>
        <p className={styles.description}>
          A Computer Science undergrad with a passion for web development.{" "}
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
