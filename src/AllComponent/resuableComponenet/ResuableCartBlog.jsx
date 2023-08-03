import React from 'react';
import { SlCalender } from 'react-icons/Sl';
import { BsFillPersonFill } from 'react-icons/Bs';
import { FaRegCommentDots } from 'react-icons/Fa';
import { BsFillArrowRightSquareFill } from 'react-icons/Bs';
import background from "../../assets/farmer2.jpg"
const ResuableCartBlog = ({paragraph,title}) => {
    return (
        <div className='group relative reusableCart2 w-[420px] img shadow-2xl  duration-300 transition-all   h-[380px] '>
        <div className='absolute top-0 z-0'>
       <img className=' w-[420px] h-[380px] object-cover' src={background} alt="" />
        </div>
       
          <div className='h-[380px]   group-hover:duration-300 translate-y-[0]   duration-300  group-hover:bg-black  group-hover:bg-opacity-50'>
              <p className=' font-serif text-white text-[20px] p-5 '>{paragraph}</p>

          </div>
          {/* <div className= ' absolute -bottom-20 translate-y-[20px] group-hover:translate-y-[100px] duration-500   bg-blue-200    h-[200px] w-[200px] '>
<p className='text-gray-800  text-[30px] primary-font text-center  pt-5'>{title}</p>
          </div> */}
        
         
          <div className= ' absolute top-0 -translate-x-[20px] group-hover:translate-x-[300px] duration-500  bg-green-600   h-[40px] w-[40px] '>
<p className='text-gray-800  text-[30px] primary-font text-center  pt-5'></p>
          </div>
          <div className= ' absolute top-0 -translate-x-[20px] group-hover:translate-x-[200px] duration-500  bg-orange-600   h-[40px] w-[40px] '>
<p className='text-gray-800  text-[30px] primary-font text-center  pt-5'></p>
          </div>
          <div className='w-[350px] shadow-xl grid justify-items-center gap-6 absolute -bottom-28 group-hover:-bottom-20 duration-500 right-10 bg-white h-[250px] '>
            <div className='flex gap-10'>
<div className='flex'>
 <p className='my-auto me-3 text-[20px] font-serif'>   <SlCalender size={30} style={{color:'green'}}/></p><p className='my-auto me-3 text-[20px] font-serif'>{"15/05/23"}</p>
</div>
<div  className='flex '>
<p className='my-auto me-3 text-[20px] font-serif'>    <BsFillPersonFill  size={30} style={{color:'green'}}/></p><p className='my-auto me-3 text-[20px] font-serif'>{"john"}</p>
</div>
            </div>
          

<div>
    <p className='text-[25px] primary-font text-gray-700  text-start'>{"this is a content"}</p>

</div>
<div className='flex '>

                <div className='w-[30px] h-[3px] bg-green-600' ></div> <div className='w-[300px] h-[1px] bg-green-600'></div>
        
</div>
<div className='flex gap-20 '>

<div className='flex gap-4 '>
<p className='my-auto'>  Read more</p>
<p className='my-auto '>    <BsFillArrowRightSquareFill size={30} style={{color:'green'}}/></p>

</div>
<div className='flex gap-4'><p className='my-auto '>    <FaRegCommentDots size={30} style={{color:'orange'}}/></p><p className='my-auto'>{"2"}</p></div>
</div>

</div>
        
          
      </div>

    );
};

export default ResuableCartBlog;