import React from "react";

import styles from "../../styles/AboutUs/AboutUs.module.css";

import image1 from "../../assets/25Watts/images/image-1.png";
import { Element } from "react-scroll";

const AboutUs = () => {
  return (
    <Element name="about_us">
      <section className={styles.sectionAboutUs}>
        <div className={styles.decorationPage}></div>
        <div className={styles.container}>
          <img src={image1} alt="Image-1.png" className={styles.image} />

          <div className={styles.containerInfoAboutUs}>
            <h2 className={styles.title}>
              About us <br />
              <span className={styles.titleColor}>We help Businesses</span>
            </h2>

            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto consequuntur repellat dolores a dolore iure odit quae
              ad molestiae saepe eligendi ipsum iusto totam, hic, vel cupiditate
              ab quaerat, tempora accusamus quasi? Cum sed rerum necessitatibus
              maiores minima ut. Porro consequuntur obcaecati esse aliquam
              pariatur, nemo aut non minima. Fugit.
            </p>

            <button className={styles.button}>More info</button>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutUs;
