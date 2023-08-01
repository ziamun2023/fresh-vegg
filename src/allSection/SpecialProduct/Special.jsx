
import ReuseableProductCart from '../../AllComponent/resuableComponenet/ReuseableProductCart';
// Import Swiper styles

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import HeaderAndDetails from '../../AllComponent/resuableComponenet/HeaderAndDetails';
const Special = () => {
    return (
        <div>
<HeaderAndDetails heading={"Special offer" } subtitle={"Get the best food on special discount"}/>
            <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
     
        <SwiperSlide>
        <ReuseableProductCart/>
        </SwiperSlide>
     
     
        
      </Swiper>
            </div>
        </div>
    );
};

export default Special;