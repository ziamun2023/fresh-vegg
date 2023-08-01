import React from 'react';
import { BsArrowRightShort } from 'react-icons/Bs';
import { AiOutlineHeart } from 'react-icons/Ai';
import { AiOutlineEye } from 'react-icons/Ai';

const ReuseableProductCart = ({title,img,Maintitle,subtitle}) => {
    return (
        <div className='parents shadow-xl relative group w-[300px] h-[430px] hover:pt-0  pt-4 bg-white transition-all  border-gray-800 '>
            <div className='child  child  group-hover:w-[298px] border-orange-500  my-auto  group-hover:border-[rgb(118,167,19)] group-hover:h-[430px]  group-hover:border-[4px] mx-auto duration-150  w-[250px] h-[400px] border-[1px] '>
        

            </div>
            <p className={`text-gray-200 left-10 primary-font group-hover:text-green-700 text-[99px] absolute top-20`}>{title}</p>
<div className='absolute top-40 left-5 '>    <div><img src={img} alt="" /></div>
        <p className='text-center primary-font text-[30px]'>{Maintitle}</p>
         <p className='text-gray-500 text-[14px] text-center mx-6'>{subtitle}</p>
       <p className='group-hover:scale-[500px] flex duration-500 absolute -bottom-[300px] left-10 rounded-full hover:bg-orange-500 bg-[rgb(118,167,19)] px-10 py-2 text-[20px] scale-0 w-[40] '><p className=''>order now</p><p className='my-auto'><BsArrowRightShort/></p></p>
<div className='absolute  grid gap-5 group-hover:scale-[500px] -top-28 -right-[200px] scale-0 translate-x-10 duration-500'>
    <div className=' border-2 rounded-full hover:bg-[rgb(118,167,19)] duration-500 p-2'>
      <AiOutlineHeart size={30}/>
    </div>
    <div className=' border-2 rounded-full hover:bg-[rgb(118,167,19)] duration-500 p-2'>
    <AiOutlineEye size={30}/>
    </div>
    </div>


</div>
            
        </div>
    );
};

export default ReuseableProductCart;