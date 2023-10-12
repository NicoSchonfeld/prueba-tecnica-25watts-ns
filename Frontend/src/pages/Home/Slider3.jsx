import React from "react";

import styles from "../../styles/HomePage/HomePage.module.css";

const Slider3 = ({ slider }) => {
  return (
    <main className={styles.sectionHome3}>
      <div className={styles.conteiner}>
        <h1 className={styles.title}>
          {/* Nulla rhoncus <br /> valputate congue */}
          {slider?.title}
        </h1>

        <p className={styles.paragraph}>
          {/* Aenean rutrum eros nec lacus vehicula, semper euismod dui aliquam. */}
          {slider?.text}
        </p>

        <button className={styles.button}>Read more</button>

        <div className={styles.conteinerNavigarion}>
          <div className={styles.navigationDefault}></div>
          <div className={styles.navigationDefault}></div>
          <div className={styles.navigationAvctive}></div>
        </div>
      </div>
    </main>
  );
};

export default Slider3;
