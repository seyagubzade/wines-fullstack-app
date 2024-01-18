import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import BgImg1 from "../../assets/images/hero_1.jpg";
import BgImg2 from "../../assets/images/hero_2.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSlider = () => {
  return (
    <div className="hero-section">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={BgImg1} alt="bg-img" />
          <div className="slider-content">
            <div className="slider-content container">
              <span>Welcome</span>
              <h2 className="mb-5">Wines for everyone</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={BgImg2} alt="bg-img" />
          <div className="slider-content">
            <div className="slider-content container">
              <span>Welcome</span>
              <h2 className="mb-5">Grape Wine</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
