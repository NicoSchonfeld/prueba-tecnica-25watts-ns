import React, { useEffect, useState } from "react";
import styles from "../styles/navbar/Navbar.module.css";

import LogoWatts from "./icons/LogoWatts";
import { Link } from "react-scroll";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import { useLocation } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { hash } = useLocation();
  const [bgColorNavbar, setBgColorNavbar] = useState(false);
  const [menu, setMenu] = useState(false);

  const links = [
    { id: 1, title: "Home", titleMobile: "HOME", path: "home" },
    { id: 2, title: "About us", titleMobile: "ABOUT US", path: "about_us" },
    { id: 3, title: "Services", titleMobile: "SERVICES", path: "services" },
    { id: 4, title: "Products", titleMobile: "PRODUCTS", path: "products" },
    { id: 5, title: "Details", titleMobile: "DETAILS", path: "details" },
    { id: 6, title: "Contact", titleMobile: "CONTACT", path: "contact" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setBgColorNavbar(true);
      } else {
        setBgColorNavbar(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className={bgColorNavbar ? styles.headerActive : styles.header}>
        <div className={styles.container}>
          <div onClick={scrollUp} style={{ cursor: "pointer" }}>
            <LogoWatts color="white" />
          </div>

          <FiMenu className={styles.menu} onClick={() => setMenu(!menu)} />

          <nav className={styles.nav}>
            <ul className={styles.containerLinks}>
              {links?.map((link) => (
                <li key={link?.id}>
                  <Link
                    activeClass={
                      bgColorNavbar ? styles.linksActive2 : styles.linksActive1
                    }
                    to={link?.path}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={200}
                    className={styles.links}
                  >
                    {link?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 1, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{ opacity: 1, width: 0 }}
            className={styles.navbarMobile}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.constainerHeaderNavbarMobile}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setMenu(!menu);
                  scrollUp();
                }}
              >
                <LogoWatts color="white" />
              </div>

              <AiOutlineClose
                className={styles.menu}
                onClick={() => setMenu(!menu)}
              />
            </motion.div>

            <div className={styles.containerLinksNavbarMobile}>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.containerListNavbarMobile}
              >
                {links?.map((link) => (
                  <li key={link?.id}>
                    <Link
                      to={link?.path}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={200}
                      className={
                        hash === link?.path
                          ? bgColorNavbar
                            ? styles.linksActive2NavbarMobile
                            : styles.linksActive1NavbarMobile
                          : styles.linksNavbarMobile
                      }
                      onClick={() => setMenu(!menu)}
                    >
                      {link?.titleMobile}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
