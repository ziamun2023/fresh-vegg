import React from 'react';
import section3Banner from "../../assets/section3Banner.png"
import Heading from '../../AllComponent/resuableComponenet/Heading';
import handpicked from "../../assets/handpicked.png"
import natural from "../../assets/naturalcarot.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const ReusableSection = ({banner,headTitle,headerText,firstPara,secondPara,icon1,icon2,iconTitle1,iconTitle2}) => {
    return (
        <div className='lg:grid lg:grid-cols-2   gap-[10px] my-20'>
           <div data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"  data-aos="fade-right">
            <img className='lg:w-[600px] w-[350px] mx-auto' src={banner} alt="" />
            </div> 
            <div   data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000" data-aos="fade-left" className='mx-10'>
                <Heading heading={headerText}></Heading>
                <p className='primary-font text-[36px] lg:text-[50px] my-2 lg:my-5'>{headTitle}</p>
                <p className='primary-font tex-[26px] lg:text-[30px] my-7 lg:my-12 text-gray-700'>{firstPara}</p>
                <p className='primary-font text-[16px] lg:text-[20px] my-5 lg:my-10 text-gray-400'>{secondPara}</p>

                <div className='grid grid-cols-2'><div>
                <p className='flex justify-center'><img className='w-20' src={icon1} alt=''/>   <p className='my-auto'>{iconTitle1}</p>
                </p>  
                    
                    </div><div>
                    <p className='flex justify-center'><img className='w-20' src={icon2} alt=''/>   <p className='my-auto'>{iconTitle2}</p>
                </p> 
                        
                        </div></div>

            </div>
        </div>
    );
};

export default ReusableSection;