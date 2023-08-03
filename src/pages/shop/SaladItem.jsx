import React from 'react';
import ItemCartAnimated from '../../AllComponent/resuableComponenet/ItemCartAnimated';

const SaladItem = () => {
    return (
        <div>

            <div className='lg:grid lg:grid-cols-3 ms-12'>
                <ItemCartAnimated/>

            </div>
            <div className='mb-20 -mt-20'> 
              <p className='text-center relative group z-0 bg-orange-300 mx-auto  rounded-full w-[200px] h-[50px] text-2xl  shadow-2xl  mt-[220px] overflow-hidden'> <p className='w-[200px] h-[100px] -top-2 bg-black group-hover:translate-x-0 duration-500 -translate-x-[200px]'></p> <p className='absolute top-2 left-9 group-hover:text-white duration-500 text-black z-20 '>{"show more"}</p></p>
        </div>

            
        </div>
    );
};

export default SaladItem;