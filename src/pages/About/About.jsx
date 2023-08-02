import React from 'react';
import { Parallax, Background } from 'react-parallax';
import img from "../../assets/eatveg.jpg"
import SectionOffer from '../../allSection/SectionOffer/SectionOffer';
import FreshMilkSection from '../../allSection/SectionFreshMilk/FreshMilkSection';
import img2 from "../../assets/aboutBackGround.png"
import AOS from 'aos';
import delivery from "../../assets/delivery.png"
import secure from "../../assets/privacy2.png"
import Care from "../../assets/careservice.png"
import farmer1 from "../../assets/farmer1.jpg"
import farmer2 from "../../assets/farmer3.jpg"
import farmer3 from "../../assets/farmer4.jpg"
import farmer4 from "../../assets/farmer5.jpg"
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import Heading from '../../AllComponent/resuableComponenet/Heading';
import ReusableCart2 from '../../AllComponent/resuableComponenet/ReusableCart2';
const About = () => {
    return (
        <div className=''>
            <div className='offer '>
                <p className='text-center text-[70px]  pt-36 text-white '>Home | About</p>
        

            </div>


            <div className='lg:grid z-20 lg:grid-cols-2 justify-items-center mt-20'>
            <div className='relative z-20 '>
                   
                 <div className='grid  grid-cols-2 gap-7 z-10 '>

                 <div>
                    <img className='w-[300px]  object-cover' src={farmer1} alt="" />
                 </div>
                 <div>
                    <img className='w-[300px] ' src={farmer2} alt="" />
                 </div>
                 <div>
                    <img className='w-[300px] ' src={farmer3} alt="" />
                 </div>
                 <div>
                    <img className='w-[300px] ' src={farmer4} alt="" />
                 </div>


                 </div>
               
                </div>
                <img  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000" data-aos="fade-left" className='absolute z-0  top-[670px] left-[270px] w-[500px] ' src={img2} alt="" />
               

           

                <div   data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000" data-aos="fade-left" className='mx-10'>
                <Heading heading={"Why choose us?"}></Heading>
                <p className='primary-font text-[30px] lg:text-[50px] text-gray-800 my-2 lg:my-5'>{"We have close connection with village farmers "}</p>
                <p className='primary-font tex-[26px] lg:text-[25px] my-7 lg:my-12 text-gray-700'>{"At our website, we offer a unique and compelling way to connect consumers with the freshest vegetables, sourced directly from local farmer fields. Our commitment to promoting sustainable and ethical farming practices ensures that every purchase supports small-scale farmers and their communities. By choosing us, you are not only receiving the highest quality, nutrient-rich vegetables but also contributing to the preservation of the environment and the growth of local agriculture. "}</p>
                <p className='primary-font text-[16px] lg:text-[20px] my-5 lg:my-10 text-gray-400'>{"Discover the freshest vegetables, straight from the farmer's field. Embrace sustainable choices that support local agriculture. Choose us for a wholesome and rewarding shopping experience."}</p>

                <div className='grid grid-cols-3'><div>
                <p className='flex justify-center group'><img className='w-20 group-hover:w-[100px] duration-500' src={delivery} alt=''/>   <p className='my-auto group-hover:text-gray-700 group-hover:text-semibold'>{"Fast delivery"}</p>
                </p>  
                    
                    </div><div>
                    <p className='flex justify-center group'><img className='w-20 group-hover:w-[100px] duration-500' src={Care} alt=''/>   <p className='my-auto group-hover:text-gray-700 group-hover:text-semibold'>{"castomer service"}</p>
                </p> 
                        
                        </div>
                        <div>
                    <p className='flex justify-center group'><img className='w-20 group-hover:w-[100px] duration-500' src={secure} alt=''/>   <p className='my-auto group-hover:text-gray-700 group-hover:text-semibold'>{"Secured"}</p>
                </p> 
                        
                        </div>
                        </div>

            </div>

              
            


            </div>
            <ReusableCart2/>
       <FreshMilkSection/>
              
            
        </div>
    );
};

export default About;