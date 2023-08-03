import React from 'react';
import ReusableCart2 from '../../AllComponent/resuableComponenet/ReusableCart2';
import HeaderAndDetails from '../../AllComponent/resuableComponenet/HeaderAndDetails';
import Heading from '../../AllComponent/resuableComponenet/Heading';
import ResuableCartBlog from '../../AllComponent/resuableComponenet/ResuableCartBlog';

const BlogSection = () => {
    return (
        <div className='my-[140px]'>
         <div className='text-center my-20'>
         <Heading heading={'From our blog'} />
         <p className='primary-font text-[40px]'>Exploring Nature's Wonders: A Journey of Discovery</p>
            
         </div>
     <div>
     <div className='grid grid-cols-3 justify-items-center'>
       <ResuableCartBlog/>
       <ResuableCartBlog/>
       <ResuableCartBlog/>
       </div>
       <p className='text-center relative group z-0 bg-orange-600 mx-auto  rounded-full w-[200px] h-[50px] text-2xl  shadow-2xl  mt-[220px] overflow-hidden'> <p className='w-[200px] h-[100px] -top-2 bg-black group-hover:translate-x-0 duration-500 -translate-x-[200px]'></p> <p className='absolute top-2 left-9 text-white z-20 '>show more</p></p>

     </div>
    
        </div>
    );
};

export default BlogSection;