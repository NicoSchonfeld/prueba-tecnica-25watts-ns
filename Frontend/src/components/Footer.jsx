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
    {
      icon: igIcon,
      alt: "ig",
      path: "https://www.instagram.com/25.watts/?hl=es",
    },
    { icon: fbIcon, alt: "fb", path: "https://www.facebook.com/25watts/" },
    { icon: twIcon, alt: "tw", path: "https://twitter.com/25Watts" },
    { icon: ytIcon, alt: "yt", path: "/youtube" }, // No encontre un canal de Youtube de 25Watts.
    {
      icon: inIcon,
      alt: "in",
      path: "https://www.linkedin.com/company/25watts/",
    },
  ];

  const fecha = new Date();
  const ano = fecha.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.containerLogos}>
          <Link
            to={"home"}
            spy={true}
            smooth={true}
            offset={-100}
            duration={200}
            style={{ cursor: "pointer" }}
          >
            <LogoWatts color="#dce1da" w="129px" h="30px" />
          </Link>

          <p className={styles.copyright}>{ano} © All rights reserved</p>
        </div>

        <nav className={styles.containerNavs}>
          <ul className={styles.containerList}>
            <li className={styles.itemList}>
              <Link
                to={"about_us"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                style={{ cursor: "pointer" }}
              >
                About
              </Link>
            </li>
            <li className={styles.itemList}>
              <Link
                to={"services"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                style={{ cursor: "pointer" }}
              >
                Services
              </Link>
            </li>
            <li className={styles.itemList}>
              <Link
                to={"products"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                style={{ cursor: "pointer" }}
              >
                Products
              </Link>
            </li>
          </ul>

          <ul className={styles.containerList}>
            <li className={styles.itemList}>
              <Link
                to={"details"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                style={{ cursor: "pointer" }}
              >
                Details
              </Link>
            </li>
            <li className={styles.itemList}>
              <Link
                to={"contact"}
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
                style={{ cursor: "pointer" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.containerSocialMedia}>
          <p className={styles.titleSocialMedia}>Follow us</p>

          <div className={styles.containerIconsSocialMedia}>
            {iconsSocialMedia?.map((icon, index) => (
              <a key={index} href={icon.path} target="_blank">
                <img src={icon.icon} alt={icon.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
