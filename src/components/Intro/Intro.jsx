import React from "react";
import { ReactTyped } from "react-typed";
import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";
import { TypeAnimation } from "react-type-animation";

// hendrysadrak.com
function colorFlowAnimation() {
  var chars = $.trim(html).split("");
  return (
    "<TypeAnimation>" +
    chars.join("</TypeAnimation><TypeAnimation>") +
    "</TypeAnimation>"
  );
}

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Mina Dang</h1>
        <p className={styles.description}>
          A Computer Science undergrad with a passion for
          <TypeAnimation
            className={styles.colorFlow}
            sequence={[
              " Web Development",
              1000,
              " Software Engineering",
              1000,
              " AI Engineering",
              1000,
            ]}
            repeat={Infinity}
          />
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
