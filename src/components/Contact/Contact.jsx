import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_djk294f", // service id
        "template_ncrl19f", // template id
        formRef.current,
        { publicKey: "eyVwp8M8QkNQVoiop" } // public key
      )
      .then(() => {
        setShowPopup(true);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Error. Please try again later", error.text);
      });
  };
  return (
    <div className={styles.container} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.description}>Let's keep in touch.</p>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a
                href="https://www.linkedin.com/in/mina-dang-888758293/"
                target="_blank"
              >
                <img
                  src={getImageUrl("contact/linkedinIcon.png")}
                  alt="LinkedIn"
                />
              </a>
            </li>
            <li className={styles.link}>
              <a
                href="https://github.com/md2327?tab=overview&from=2025-06-01&to=2025-06-02"
                target="_blank"
              >
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub" />
              </a>
            </li>
          </ul>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className={styles.right}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" required />
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            required
          />
          <label>Email</label>
          <input type="email" name="email" placeholder="Your Email" required />
          <label>Message</label>
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" className={styles.messageBtn}>
            Send Message
          </button>
        </form>
      </div>

      {showPopup && (
        <div className={styles.popupContainer}>
          <div className={styles.popupContent}>
            <h2>Thank You</h2>
            <p>
              Your message has been sent. I look forward to connecting with you.
            </p>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setShowPopup(false)}
            >
              Close Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
