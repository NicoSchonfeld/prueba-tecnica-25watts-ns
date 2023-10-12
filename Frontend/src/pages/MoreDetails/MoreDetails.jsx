import React from "react";

import styles from "../../styles/MoreDetails/MoreDetails.module.css";

import ancla from "../../assets/25Watts/icons/ancla.svg";
import guardar from "../../assets/25Watts/icons/guardar.svg";
import theme from "../../assets/25Watts/icons/theme.svg";
import campana from "../../assets/25Watts/icons/campana.svg";
import brujula from "../../assets/25Watts/icons/brujula.svg";
import box from "../../assets/25Watts/icons/box.svg";
import { Element } from "react-scroll";

const MoreDetails = () => {
  const infoLeft = [
    {
      icon: ancla,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat.",
    },
    {
      icon: guardar,
      text: "Consectetu ipsum dolor sit amet consectetur adipisicing elit. Quo, nostrum..",
    },
    {
      icon: theme,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat.",
    },
  ];

  const infoRight = [
    {
      icon: campana,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat.",
    },
    {
      icon: brujula,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat.",
    },
    {
      icon: box,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quaerat.",
    },
  ];

  return (
    <Element name="details">
      <section className={styles.sectionMoreDetails}>
        <div className={styles.container}>
          <div className={styles.containerTitles}>
            <h2 className={styles.title}>More details</h2>

            <p className={styles.paragraph}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo et
              nisi necessitatibus repudiandae aperiam soluta? Vero, cupiditate.
              Sapiente, aliquid unde?
            </p>
          </div>

          <div className={styles.containerInfo}>
            <div className={styles.containerLeft}>
              <ul className={styles.containerList}>
                {infoLeft?.map((info, index) => (
                  <li key={index} className={styles.list}>
                    <img src={info.icon} alt={info.text} />

                    <p className={styles.textList}>{info.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.containerRight}>
              <ul className={styles.containerList}>
                {infoRight?.map((info, index) => (
                  <li key={index} className={styles.list}>
                    <img src={info.icon} alt={info.text} />

                    <p className={styles.textList}>{info.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default MoreDetails;
