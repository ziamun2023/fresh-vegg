import React from 'react';
import { BsArrowRightShort } from 'react-icons/Bs';
  
            
const AnimatedCarts = ({img,title,subtitle,Maintitle,color}) => {
    return (
        <div className='parents relative group w-[300px] h-[430px] hover:pt-0  pt-4 bg-white transition-all  border-gray-800 '>
            <div className='child  child  group-hover:w-[298px]  my-auto  group-hover:border-green-700 group-hover:h-[430px]  group-hover:border-[4px] mx-auto duration-150  w-[250px] h-[400px] border-[1px] border-gray-800'>
        

            </div>
            <p className={`text-gray-200 left-10 primary-font group-hover:text-green-700 text-[99px] absolute top-20`}>{title}</p>
<div className='absolute top-40 left-5 '>    <div><img src={img} alt="" /></div>
        <p className='text-center primary-font text-[30px]'>{Maintitle}</p>
         <p className='text-gray-500 text-[14px] text-center mx-6'>{subtitle}</p>
         {/* <p className=' button mt-10 lg:mt-0 -ms-4 lg:ms-0  py-2 bg-[rgb(67,126,255)] px-5 primary-font my-5 flex hover:shadow-2xl duration-500'> <p  >Shop now </p> <p 
className='childarrow'><BsArrowRightShort size={24}/></p></p> */}
</div>
            
        </div>
    );
};

export default AnimatedCarts;