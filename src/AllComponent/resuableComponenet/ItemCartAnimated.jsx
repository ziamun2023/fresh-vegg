import React from 'react';
import { GiShoppingCart } from 'react-icons/Gi';
import { FaRegEye } from 'react-icons/Fa';
import { AiOutlineHeart } from 'react-icons/Ai';

const ItemCartAnimated = ({img ,discount }) => {
    return (
        <div className='group shadow-md lg:h-[500px] h-[300px] w-[280px] relative overflow-hidden bg-[rgb(251,248,242)] lg:w-[400px]'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='absolute group-hover:shadow-xl top-10 left-10 -translate-x-[120px] group-hover:-translate-x-0 px-2 bg-yellow-400 text-black duration-300 rounded-full'>
                {"discount"}
            </div>
            <div  className='absolute top-10 left-[200px] w-[170px]  justify-center text-2xl flex -translate-y-[120px] group-hover:-translate-y-2  bg-white group-hover:shadow-xl text-black duration-300 rounded-md'>
              <div  className='hover:bg-yellow-300 duration-300 w-full h-full text-center    rounded-md'>
                -
              </div>
              <div className=''>count</div>
              <div className='hover:bg-yellow-300  duration-300 w-full h-full text-center rounded-md'>
                +
              </div>
            </div>

           <div className='absolute hidden  lg:flex bottom-2 left-[120px]'>
           
            <div className='bg-white rounded-full border-2 group-hover:shadow-xl hover:bg-yellow-300  group-hover:-translate-x-[20px] duration-500 translate-x-[52px] border-gray-400 text-black p-3'>
<FaRegEye size={25}/>
            </div>
            <div className='bg-white rounded-full border-2 group-hover:shadow-xl hover:bg-yellow-300  border-gray-400 text-black p-3'> 
            <AiOutlineHeart size={25}/>
            </div>
            <div className='bg-white rounded-full border-2 group-hover:shadow-xl hover:bg-yellow-300  group-hover:translate-x-[20px]   duration-500  -translate-x-[52px] border-gray-400 text-black p-3'>


<GiShoppingCart size={25}/>
            </div>
           </div>
           <div className='absolute lg:hidden  top-0 right-[10px]'>
           
           <div className='bg-white rounded-full mt-2 border-gray-400 text-black p-3'>
<FaRegEye size={17}/>
           </div>
           <div className='bg-white rounded-full  mt-2 border-2 border-gray-400 text-black p-3'> 
<GiShoppingCart size={17}/>
           </div>
           <div className='bg-white rounded-full border-2  mt-2 border-gray-400 text-black p-3'>
<AiOutlineHeart size={17}/>
           </div>
          </div>

            
        </div>
    );
};

export default ItemCartAnimated;