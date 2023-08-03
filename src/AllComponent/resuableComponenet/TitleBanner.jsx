import React from 'react';
import AnimatedButton from './AnimatedButton';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const TitleBanner = ({img,Title,Detail}) => {
    return (
        <div className=' relative'>
            <img className='h-[400px] z-0 w-full object-cover' src={img} alt="" />
           <div clas data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up" className='grid justify-items-center  z-20 gap-5 rounded-2xl w-[600px] h-[320px] mt-10 bg-opacity-50 bg-gray-700 absolute top-0 right-28'>
            <p className='text-6xl primary-font text-white text-center'>{Title}</p>
            <p className='text-3xl text-white  font-serif text-center'>{Detail}</p>
            <p className='group   rounded-full bg-yellow-400 overflow-hidden    relative  text-black h-[50px] w-[130px]'><p className='text-black font-serif absolute top-2 left-6 z-20 text-[24px] group-hover:text-white    '>Button</p>
             <p className=
            'bg-black   absolute top-[20px] scale-y-0 scale-x-0 group-hover:scale-y-[150] group-hover:w-2 z-10 group-hover:scale-x-[150]  duration-1000 left-16  h-2'></p></p>
      
           </div>
       
            
        </div>
    );
};

export default TitleBanner;