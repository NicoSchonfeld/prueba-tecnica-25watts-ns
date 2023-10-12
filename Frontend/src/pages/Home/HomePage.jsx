import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import { Element } from "react-scroll";

const HomePage = ({ slider }) => {
  return (
    <Element name="home">
      <main>
        <Swiper spaceBetween={0} slidesPerView={1}>
          <SwiperSlide>
            <Slider1 slider={slider[0]} />
          </SwiperSlide>

          <SwiperSlide>
            <Slider2 slider={slider[1]} />
          </SwiperSlide>

          <SwiperSlide>
            <Slider3 slider={slider[2]} />
          </SwiperSlide>
        </Swiper>
      </main>
    </Element>
  );
};

export default HomePage;
