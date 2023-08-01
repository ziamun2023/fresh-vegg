import React from 'react';
import section3Banner from "../../assets/section3Banner.png"
import Heading from '../../AllComponent/resuableComponenet/Heading';
import handpicked from "../../assets/handpicked.png"
import natural from "../../assets/naturalcarot.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Section3 = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 gap-[10px] my-20'>
           <div data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"  data-aos="fade-right">
            <img className='lg:w-[600px] w-[350px] mx-auto' src={section3Banner} alt="" />
            </div> 
            <div   data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000" data-aos="fade-left" className='mx-10'>
                <Heading heading={'about us'}></Heading>
                <p className='primary-font text-[36px] lg:text-[50px] my-2 lg:my-5'>Fresh from Nature's Bounty and Deliciously Organic Farm to Table</p>
                <p className='primary-font tex-[26px] lg:text-[30px] my-7 lg:my-12 text-gray-700'>Organic Foods and Café is a family run company founded in 2004 that runs organic supermarkets</p>
                <p className='primary-font text-[16px] lg:text-[20px] my-5 lg:my-10 text-gray-400'>Organic means growing our food, which is to nourish us, without chemical aids during the growing process such as fertilisers, pesticides, fungcides, herbacides, larbicides etc</p>

                <div className='grid grid-cols-2'><div>
                <p className='flex justify-center'><img className='w-20' src={handpicked} alt=''/>   <p className='my-auto'>Hand picked food</p>
                </p>  
                    
                    </div><div>
                    <p className='flex justify-center'><img className='w-20' src={natural} alt=''/>   <p className='my-auto'>100 % natural</p>
                </p> 
                        
                        </div></div>

            </div>
        </div>
    );
};

export default Section3;