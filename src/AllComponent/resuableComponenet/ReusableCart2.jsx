import React from 'react';
import { MdPrivacyTip } from 'react-icons/Md';
const ReusableCart2 = ({paragraph,background,title}) => {
    return ( 
        <div className='group relative reusableCart2 w-[400px] img shadow-2xl duration-300 transition-all overflow-hidden  h-[400px] '>
          <div className='absolute top-0 z-0'>
         <img src={background} alt="" />
          </div>
         
            <div className='h-[400px]   group-hover:duration-300 translate-y-[300px]  group-hover:translate-y-[0px] duration-300  bg-black  bg-opacity-40'>
                <p className=' font-serif text-white text-[20px] p-5 '>{paragraph}</p>

            </div>
            <div className= ' absolute bottom-0 translate-y-[0px] group-hover:translate-y-[100px] duration-500   bg-white   h-[100px] w-[400px] '>
<p className='text-gray-800  text-[30px] primary-font text-center  pt-5'>{title}</p>
            </div>
           
            <div className= ' absolute bottom-0 -translate-x-[20px] group-hover:translate-x-[300px] duration-500  bg-green-600   h-[40px] w-[40px] '>
<p className='text-gray-800  text-[30px] primary-font text-center  pt-5'></p>
            </div>
            <div className= ' absolute bottom-0 -translate-x-[20px] group-hover:translate-x-[200px] duration-500  bg-orange-600   h-[40px] w-[40px] '>
<p className='text-gray-800  text-[30px] primary-font text-center  pt-5'></p>
            </div>
            
        </div>
    );
};

export default ReusableCart2;