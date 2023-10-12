import React from "react";

import styles from "../../styles/Services/Services.module.css";

import mundoIcon from "../../assets/25Watts/icons/mundo.svg";
import nubeIcon from "../../assets/25Watts/icons/nube.svg";
import cascosIcon from "../../assets/25Watts/icons/cascos.svg";
import usersIcon from "../../assets/25Watts/icons/users.svg";
import { Element } from "react-scroll";

const Services = () => {
  const servicesCard = [
    { icon: mundoIcon, title: `Stet clita kasd gubergren` },
    { icon: nubeIcon, title: `At vero eos et accusam` },
    { icon: cascosIcon, title: `Sed ut perspiciatis unde` },
    { icon: usersIcon, title: `Lorem ipsum dolor sit amet` },
  ];

  return (
    <Element name="services">
      <section className={styles.sectionServices}>
        <div className={styles.container}>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            inventore ut. Repudiandae placeat alias, quia voluptates saepe
            deserunt accusamus beatae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam, inventore ut.
          </p>

          <ul className={styles.list}>
            {servicesCard?.map((item, index) => (
              <li key={index} className={styles.cardList}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className={styles.iconList}
                />

                <span className={styles.textList}>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Element>
  );
};

export default Services;
