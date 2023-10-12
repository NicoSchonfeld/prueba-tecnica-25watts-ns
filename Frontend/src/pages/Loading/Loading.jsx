import React from "react";

import styles from "../../styles/Loading/Loading.module.css";

import { FaSpinner } from "react-icons/fa";
import LogoWatts from "../../components/icons/LogoWatts";

const Loading = () => {
  return (
    <section className={styles.sectionLoading}>
      <LogoWatts color="white" />
      <div className={styles.ldsRipple}>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loading;
