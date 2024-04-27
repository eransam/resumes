import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper";
import 'swiper/css';
import Banner from '../Components/Banner';
import Skills from '../Components/Skills';
import Portfolio from '../Components/Portfolio';
import Resume from '../Components/Resume';
import Blog from '../Components/Blog';
import Contact from '../Components/Contact';

const Slides = () => {

  return (
    <>
      <Swiper
        speed={1000}
        direction={"horizontal"}
        mousewheel={true}
        modules={[Pagination, Mousewheel, Navigation]}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
      >
        <SwiperSlide > <Banner /> </SwiperSlide>
        <SwiperSlide > <Skills /> </SwiperSlide>
        <SwiperSlide > <Portfolio /> </SwiperSlide>
        <SwiperSlide > <Resume /> </SwiperSlide>
        <SwiperSlide > <Blog /> </SwiperSlide>
        <SwiperSlide> <Contact /> </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slides;