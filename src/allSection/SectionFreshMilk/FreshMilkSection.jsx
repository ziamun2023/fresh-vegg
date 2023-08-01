import React from 'react';
import field from "../../assets/GreenField.png"
import cloud1 from "../../assets/cloud1.png"
import cloud2 from "../../assets/cloud2.png"
import sun from "../../assets/sun.png"
import milk from "../../assets/milkphoto.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const FreshMilkSection = () => {
    return (
        <div className='relative'>

            <p className='primary-font text-[40px] absolute top-32 left-20 '>Pure and Fresh Milk <br /> Straight from the Farm to Your Table</p>
            <p className='primary-font text-[40px] absolute top-[300px] text-green-600 bg-gray-200 px-4 rounded-full hover:bg-black duration-500 left-[400px] '> order now</p>
            <img  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-right" className=' text-[40px] z-20 absolute top-32 left-20 w-[400px]' src={milk} alt="" />
            <img  data-aos-offset="200"
    data-aos-delay="50" bg-gray-200 px-4 rounded-full hover:bg-black duration-500
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up" className='z-0'  src={field} alt="" />
            <img  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out" data-aos="fade-left" className='w-[200px] absolute top-20 right-[100px]' src={cloud1} alt="" />
            <img  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-easing="ease-in-out" data-aos="fade-left"   className='w-[200px] absolute top-28 right-[500px]' src={cloud2} alt="" />
            <img  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-easing="ease-in-out" data-aos="fade-left"   className='w-[200px] absolute top-5 right-[300px]' src={cloud2} alt="" />
            <img  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos="fade-up"  className='w-[200px] absolute top-[10px] right-[800px]' src={sun} alt="" />
            
        </div>
    );
};

export default FreshMilkSection;