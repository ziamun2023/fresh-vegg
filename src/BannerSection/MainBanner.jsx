import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner1 from './Banner1';
import Banner3 from './Banner3';
import Banner4 from './Banner4';

const MainBanner = () => {
    return (
        <div className=''>
             <Swiper
        spaceBetween={30}
        
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Banner1/></SwiperSlide>
        <SwiperSlide><Banner3/></SwiperSlide>
        <SwiperSlide><Banner4/></SwiperSlide>
     
      </Swiper>
      <p className='primary-font z-20 absolute top-[160px] lg:mx-20 text-[30px] mx-2 mt-20 lg:mt-0 lg:text-[70px]'>Choose the best <br /> healthier way of life</p>
        </div>
    );
};

export default MainBanner;