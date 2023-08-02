import React from 'react';

const ReusableCart2 = () => {
    return ( 
        <div className='group relative w-[400px] shadow-2xl duration-300 transition-all overflow-hidden  h-[400px] bg-green-500'>
            <div className='h-[400px]  group-hover:duration-300 translate-y-[400px]  group-hover:translate-y-[opx] duration-300  bg-black  bg-opacity-40'>
                <p className=' font-serif text-white text-[20px] p-5 '>Unlike other vegetable and food websites, we offer produce sourced directly from local farmer fields. By choosing us, customers can enjoy the freshest, farm-to-table experience, supporting small-scale farmers and their communities.</p>

            </div>
            <div className= ' absolute bottom-0 translate-y-[0px] group-hover:translate-y-[100px] duration-500   bg-white   h-[100px] w-[400px] '>
<p className='text-gray-800  text-[30px] primary-font text-center  pt-5'>Direct from Farmer Fields</p>
            </div>
            
        </div>
    );
};

export default ReusableCart2;