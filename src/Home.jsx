import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <div className="home_slide">
      <Swiper
        navigation={true}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./img/slideimg1.jpg" alt="이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/slideimg2.jpg" alt="이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/slideimg3.jpg" alt="이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/slideimg4.jpg" alt="이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/slideimg1.jpg" alt="이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/slideimg2.jpg" alt="이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/slideimg3.jpg" alt="이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./img/slideimg4.jpg" alt="이미지" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
