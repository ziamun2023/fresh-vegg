
import ReuseableProductCart from '../../AllComponent/resuableComponenet/ReuseableProductCart';
// Import Swiper styles

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HeaderAndDetails from '../../AllComponent/resuableComponenet/HeaderAndDetails';
import ReusableCart2 from '../../AllComponent/resuableComponenet/ReusableCart2';
const Special = () => {
    return (
        <div className='my-20'>
<HeaderAndDetails heading={"Special offer" } subtitle={"Get the best food on special discount"}/>
            <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiperSpecial"
      >
        <SwiperSlide className='mt-10'>
            <div className='grid grid-cols-4  justify-items-center gap-20'>
            <ReuseableProductCart/>
            <ReuseableProductCart/>
            <ReuseableProductCart/>
            <ReuseableProductCart/>
     


            </div>
        
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
            <div className='grid grid-cols-4  justify-items-center gap-20'>
            <ReuseableProductCart/>
            <ReuseableProductCart/>
            <ReuseableProductCart/>
            <ReuseableProductCart/>
          


            </div>
        
        </SwiperSlide >
        <SwiperSlide className='mt-10'>
            <div className='grid grid-cols-4  justify-items-center gap-20'>
            <ReuseableProductCart/>
            <ReuseableProductCart/>
            <ReuseableProductCart/>
            <ReuseableProductCart/>
         


            </div>
        
        </SwiperSlide>
     
        
     
       
       
      </Swiper>
            </div>
        </div>
    );
};

export default Special;