import React from "react";

import styles from "../../styles/Contact/Contact.module.css";

import image from "../../assets/25Watts/images/image.png";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <section className={styles.sectionContact}>
        <div className={styles.container}>
          <div className={styles.containerLeft}>
            <h2 className={styles.title}>
              Get in touch <br />
              <span className={styles.titleColor}>We are hiring!</span>
            </h2>

            <form className={styles.form}>
              <input type="text" placeholder="Name" className={styles.inputs} />
              <input
                type="email"
                placeholder="info@25watts.com.ar"
                className={styles.inputs}
              />
              <input
                type="Phone"
                placeholder="Phone"
                className={styles.inputs}
              />
              <textarea
                type="Message"
                placeholder="Message"
                className={styles.inputs}
              />

              <button type="submit" className={styles.button}>
                Send
              </button>
            </form>
          </div>

          <div className={styles.containerRight}>
            <img src={image} alt="imageContact" className={styles.image} />
          </div>
        </div>

        <div className={styles.containerDecoration}></div>
      </section>
    </Element>
  );
};

export default Contact;
