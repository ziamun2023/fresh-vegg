import React from 'react';

import img1 from "../assets/banner1.png"
import img2 from "../assets/bannertomato.png"
import avcoda from "../assets/avocado.png"
import leaf1 from "../assets/leaf1.png"
import leaf2 from "../assets/leaf2.png"
import leaf3 from "../assets/leaf3.png"
import leaf4 from "../assets/leaf4.png"
import leaf5 from "../assets/leaf5.png"

const Banner1 = () => {
    return (
        <div className='h-[300px] bg-[#f3f4f5]'>
           <div className=' grid grid-cols-2 z-10 relative'>
           <div  className='lg:mt-16'>
<p className='primary-font mx-20 text-[70px]'>Choose the best healthier way of life</p>
<div className='flex'>
<div>
<img className='w-[300px]' src={avcoda} alt="" />
</div>
<div>
    button
</div>

</div>
            </div>
            <div>
                <img className='w-[700px]' src={img1} alt="" />
                <img className='absolute top-40 w-[300px] moveArrow' src={img2} alt="" />
                {/* <img className='absolute top-40 w-[300px] moveArrow' src={leaf1} alt="" /> */}
                {/* <img className='absolute top-40 w-[300px] moveArrow' src={leaf2} alt="" /> */}
                <img className='absolute -top-20 right-0 w-[300px] ' src={leaf3} alt="" />
                <img className='absolute bottom-0 moveArrow right-0 w-[300px] ' src={leaf5} alt="" />
                <img className='absolute z-0 -top-5 moveArrow left-0 w-[300px] ' src={leaf5} alt="" />



            </div>
           </div>
           
        </div>
    );
};

export default Banner1;