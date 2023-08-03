import React from 'react';

const AnimatedButton2 = ({text}) => {
    return (
        <div>
              <p className='text-center relative group z-0 bg-green-600 mx-auto  rounded-full w-[200px] h-[50px] text-2xl  shadow-2xl  mt-[220px] overflow-hidden'> <p className='w-[200px] h-[100px] -top-2 bg-black group-hover:translate-x-0 duration-500 -translate-x-[200px]'></p> <p className='absolute top-2 left-9 text-white z-20 '>{text}</p></p>
        </div>
    );
};

export default AnimatedButton2;