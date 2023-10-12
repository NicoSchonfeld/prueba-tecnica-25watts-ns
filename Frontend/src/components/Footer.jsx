import React from "react";
import LogoWatts from "./icons/LogoWatts";

import styles from "../styles/Footer/Footer.module.css";

import igIcon from "../assets/25Watts/icons/instagram.svg";
import fbIcon from "../assets/25Watts/icons/facebook.svg";
import twIcon from "../assets/25Watts/icons/twitter.svg";
import ytIcon from "../assets/25Watts/icons/youtube.svg";
import inIcon from "../assets/25Watts/icons/linkedin.svg";

import { Link } from "react-scroll";

const Footer = () => {
  const iconsSocialMedia = [
    { icon: igIcon, alt: "ig" },
    { icon: fbIcon, alt: "fb" },
    { icon: twIcon, alt: "tw" },
    { icon: ytIcon, alt: "yt" },
    { icon: inIcon, alt: "in" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.containerLogos}>
          <LogoWatts color="#dce1da" w="129px" h="30px" />

          <p className={styles.copyright}>2020 c All right reserverd.</p>
        </div>

        <nav className={styles.containerNavs}>
          <ul className={styles.containerList}>
            <li className={styles.itemList}>About</li>
            <li className={styles.itemList}>Services</li>
            <li className={styles.itemList}>Products</li>
          </ul>

          <ul className={styles.containerList}>
            <li className={styles.itemList}>Details</li>
            <li className={styles.itemList}>Contact</li>
          </ul>
        </nav>

        <div className={styles.containerSocialMedia}>
          <p className={styles.titleSocialMedia}>Follow us</p>

          <div className={styles.containerIconsSocialMedia}>
            {iconsSocialMedia?.map((icon, index) => (
              <img key={index} src={icon.icon} alt={icon.alt} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
