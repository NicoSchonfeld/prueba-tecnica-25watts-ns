import React from "react";

import styles from "../../styles/HomePage/HomePage.module.css";
import { Link } from "react-scroll";

const Slider3 = ({ slider }) => {
  const sectionHome = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${slider?.image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <main style={sectionHome}>
      <div className={styles.conteiner}>
        <h1 className={styles.title}>
          {/* Nulla rhoncus <br /> valputate congue */}
          {slider?.title}
        </h1>

        <p className={styles.paragraph}>
          {/* Aenean rutrum eros nec lacus vehicula, semper euismod dui aliquam. */}
          {slider?.text}
        </p>

        <Link
          to={"about_us"}
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          <button className={styles.button}>Read more</button>
        </Link>

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
