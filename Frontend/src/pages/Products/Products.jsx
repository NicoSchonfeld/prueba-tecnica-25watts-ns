import React, { useEffect, useState } from "react";

import styles from "../../styles/Products/Products.module.css";

import arrowLeftIcon from "../../assets/25Watts/icons/arrowLeft.svg";
import arrowRightIcon from "../../assets/25Watts/icons/arrowRightActive.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Element } from "react-scroll";

const Products = ({ cards }) => {
  const [widthPage, setWidthPage] = useState(1000);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidthPage(window.innerWidth);
    }
  }, []);

  return (
    <Element name="products">
      <section className={styles.sectionProducts}>
        <div className={styles.container}>
          <div className={styles.containerTitles}>
            <h2 className={styles.title}>Products</h2>
            <p className={styles.paragraph}>
              In eget tortor tempor mollis purus
            </p>
          </div>

          <div className={styles.containerSlider}>
            <img
              src={arrowLeftIcon}
              alt="arrowLeft"
              className="swiper-button-prev"
            />

            <Swiper
              className={styles.containerCards}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
              spaceBetween={100}
              slidesPerView={widthPage > 1000 ? 3 : 1}
            >
              {cards?.map((item, index) => (
                <SwiperSlide key={index} className={styles.cards}>
                  <h3 className={styles.titleCards}>{item.title}</h3>

                  <ul className={styles.listCards}>
                    <li className={styles.itemsCards}>{item.item1}</li>
                    <li className={styles.itemsCards}>{item.item2}</li>
                    <li className={styles.itemsCards}>{item.item3}</li>
                    <li className={styles.itemsCards}>{item.item4}</li>
                  </ul>

                  <div className={styles.decorationCards}></div>
                </SwiperSlide>
              ))}
            </Swiper>

            <img
              src={arrowRightIcon}
              alt="arrowRightIcon"
              className="swiper-button-next"
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Products;

{
  /* <section className={styles.sectionProducts}>
<div className={styles.container}>
  <div className={styles.containerTitles}>
    <h2 className={styles.title}>Products</h2>
    <p className={styles.paragraph}>In eget tortor tempor mollis purus</p>
  </div>

  <Swiper
    navigation={{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }}
    modules={[Navigation]}
    spaceBetween={200}
    slidesPerView={3}
    className={styles.containerSlider}
  >
    <img
      src={arrowLeftIcon}
      alt="arrowLeft"
      className="swiper-button-prev"
    />

    <div className={styles.conteinerCards}>
      {cards?.map((item, index) => (
        <SwiperSlide key={index} className={styles.cards}>
          <h3 className={styles.titleCards}>{item.title}</h3>

          <ul className={styles.listCards}>
            <li className={styles.itemsCards}>{item.item1}</li>
            <li className={styles.itemsCards}>{item.item2}</li>
            <li className={styles.itemsCards}>{item.item3}</li>
            <li className={styles.itemsCards}>{item.item4}</li>
          </ul>

          <div className={styles.decorationCards}></div>
        </SwiperSlide>
      ))}
    </div>

    <img
      src={arrowRightIcon}
      alt="arrowRightIcon"
      className="swiper-button-next"
    />
  </Swiper>
</div>
</section> */
}
