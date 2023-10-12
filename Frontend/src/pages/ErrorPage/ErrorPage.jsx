import React from "react";
import LogoWatts from "../../components/icons/LogoWatts";

import styles from "../../styles/ErrorPage/ErrorPage.module.css";

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className={styles.sectionErrorPage}>
      <LogoWatts color="#e0752f" w={100} />
      <h3 className={styles.title}>¡Oooooops!</h3>
      <p className={styles.text}>
        Lo sentimos, no se encontro la página que esta buscando.
      </p>
      <Link to="/" className={styles.button}>
        Volver al inicio
      </Link>
    </section>
  );
};

export default ErrorPage;
