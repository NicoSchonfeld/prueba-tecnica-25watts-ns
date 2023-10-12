import React from "react";

import styles from "../../styles/HomePage/HomePage.module.css";

import { AnimatePresence, motion } from "framer-motion";

import { Link } from "react-scroll";

const Slider1 = ({ slider }) => {
  const sectionHome = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${slider?.image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <AnimatePresence>
      <main style={sectionHome}>
        <div className={styles.conteiner}>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={styles.title}
          >
            {slider?.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.paragraph}
          >
            {slider?.text}
          </motion.p>

          <Link
            to={"about_us"}
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
          >
            <motion.button
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={styles.button}
            >
              Read more
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={styles.conteinerNavigarion}
          >
            <div className={styles.navigationAvctive}></div>
            <div className={styles.navigationDefault}></div>
            <div className={styles.navigationDefault}></div>
          </motion.div>
        </div>
      </main>
    </AnimatePresence>
  );
};

export default Slider1;

/* .sectionHome {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/25Watts/images/slide1-background.png);
  background-position: center;
  background-size: cover;
}

.sectionHome2 {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/25Watts/images/slide2-background.png);
  background-position: center;
  background-size: cover;
}

.sectionHome3 {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/25Watts/images/slide3-background.png);
  background-position: center;
  background-size: cover;
} */
