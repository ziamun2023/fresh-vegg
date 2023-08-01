import React from 'react';
import disc1 from "../../assets/discount1.png"
import disc2 from "../../assets/discount2.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { BsArrowRightShort } from 'react-icons/Bs';
const Section2 = () => {
    return (
        <div  className='flex justify-center gap-10 mx-10 lg:mx-0'>
            <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000" data-aos="fade-up" className='bg-[rgb(253,247,233)] section2main h-[220px] grid grid-cols-2 px-5 py-5 w-[500px] hover:shadow-2xl relative duration-700'>
               <div>
               <p className='primary-font text-[13px] lg:text-[20px] '>Get 10% off on Vegetables</p>
                <p className='lg:my-3 my-0 text-[9px] lg:text-[15px]'>Shop our selection of organic fresh vegetables in a discounted price. 10% off on all vegetables.</p>
                <p className=' button mt-10 lg:mt-0 -ms-4 lg:ms-0 border-2 py-2 border-red-500  px-5 primary-font my-5 flex hover:shadow-2xl duration-500'> <p >Show now </p> <p 
className='childarrow'> <BsArrowRightShort size={24}/></p></p>
               </div>
               <div> <img className=' w-[190px] section2img ' src={disc1} alt="" /></div>
            </div>
            <div  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000" data-aos="fade-up" className='bg-[rgb(233,249,253)] section2main h-[220px] grid grid-cols-2 px-5 py-5 w-[500px] relative hover:shadow-2xl duration-700'>
               <div>
               <p className='primary-font text-[13px] lg:text-[20px] '>Get 10% off on Vegetables</p>
                <p className='lg:my-3 my-0 text-[9px] lg:text-[15px]'>Shop our selection of organic fresh vegetables in a discounted price. 10% off on all vegetables.</p>
                <p className=' button mt-10 lg:mt-0 -ms-4 lg:ms-0  py-2 bg-[rgb(67,126,255)] px-5 primary-font my-5 flex hover:shadow-2xl duration-500'> <p  >Show now </p> <p 
className='childarrow'><BsArrowRightShort size={24}/></p></p>
               </div>
              <div>
              <img className=' w-[190px] section2img ' src={disc2} alt="" />
              </div>
            </div>
            
        </div>
    );
};

export default Section2;