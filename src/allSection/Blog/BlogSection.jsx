import React from 'react';
import ReusableCart2 from '../../AllComponent/resuableComponenet/ReusableCart2';
import HeaderAndDetails from '../../AllComponent/resuableComponenet/HeaderAndDetails';
import Heading from '../../AllComponent/resuableComponenet/Heading';
import ResuableCartBlog from '../../AllComponent/resuableComponenet/ResuableCartBlog';
import AnimatedButton from '../../AllComponent/resuableComponenet/AnimatedButton';

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
      <AnimatedButton text={'show more'}/>

     </div>
    
        </div>
    );
};

export default BlogSection;