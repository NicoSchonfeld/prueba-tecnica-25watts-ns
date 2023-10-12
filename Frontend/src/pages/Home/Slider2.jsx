import React from "react";

import styles from "../../styles/HomePage/HomePage.module.css";

const Slider2 = ({ slider }) => {
  return (
    <main className={styles.sectionHome2}>
      <div className={styles.conteiner}>
        <h1 className={styles.title}>
          {/* Proin elementum <br />
          massa et felis */}
          {slider?.title}
        </h1>

        <p className={styles.paragraph}>
          {/* Sed ut perspiciatis unde omnis iste natus error <br />
          sit voluptatem accusantium doloremque. */}
          {slider?.text}
        </p>

        <button className={styles.button}>Read more</button>

        <div className={styles.conteinerNavigarion}>
          <div className={styles.navigationDefault}></div>
          <div className={styles.navigationAvctive}></div>
          <div className={styles.navigationDefault}></div>
        </div>
      </div>
    </main>
  );
};

export default Slider2;
