import React from 'react';
import logo from "../../assets/Green And White Modern Company Circle  Logo .png"

const Navbar = () => {
 
    return (
        <div className=" grid grid-cols-3 mx-auto justify-items-center">
          <div className='flex gap-10 tracking-wider'>
<div className='primary-font text-[20px] my-auto  text-black'><a>Home</a></div>
    <div className='primary-font text-[20px] my-auto  text-black'><a>About</a></div>
    <div className='primary-font text-[20px] my-auto  text-black'><a>Shop</a></div>
    <div className='primary-font text-[20px] my-auto  text-black'><a>pages</a></div>
</div>
 
  
      <div className=''><a><img className='w-[140px] ' src={logo} alt="" /></a></div>
      <div className='flex gap-10 tracking-wider'>
<div className='primary-font text-[20px] my-auto   text-black'><a>Offer</a></div>
<div className='primary-font text-[20px] my-auto  text-black'><a>Career</a></div>
<div className='primary-font text-[20px] my-auto  text-black'><a>Blog</a></div>
    <div className='primary-font text-[20px] my-auto  text-black'><a>search</a></div>
</div>


</div>
    );
};

export default Navbar;