import React from "react";

import styles from "../../styles/HomePage/HomePage.module.css";

import { AnimatePresence, motion } from "framer-motion";

const Slider1 = ({ slider }) => {
  return (
    <AnimatePresence>
      <main className={styles.sectionHome}>
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

          <motion.button
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={styles.button}
          >
            Read more
          </motion.button>

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
