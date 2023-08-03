import React from 'react';
import logo from "../../assets/Green And White Modern Company Circle  Logo .png"
import { Link } from 'react-router-dom';
const Navbar = () => {
 
    return (
        <div className="hidden  lg:grid grid-cols-3 mx-auto justify-items-center">
          <div className='flex gap-10 tracking-wider'>
<div className='primary-font text-[20px] my-auto relative  group  text-black'><Link to='/'><a>Home</a><p className='group-hover:w-12 w-0 duration-300 bg-green-500 h-[4px]  absolute bottom-0'></p></Link></div>
<div className='primary-font text-[20px] my-auto relative  group  text-black'><Link to='/about'><a>About</a><p className='group-hover:w-12 w-0 duration-300 bg-green-500 h-[4px]  absolute bottom-0'></p></Link></div>
  
<div className='primary-font text-[20px] my-auto relative  group  text-black'><Link to='/shop'><a>Shop</a><p className='group-hover:w-12 w-0 duration-300 bg-green-500 h-[4px]  absolute bottom-0'></p></Link></div>
<div className='primary-font text-[20px] my-auto relative  group  text-black'><Link to='/about'><a>pages</a><p className='group-hover:w-12 w-0 duration-300 bg-green-500 h-[4px]  absolute bottom-0'></p></Link></div>
</div>
 
  
      <div className=''><a><img className='w-[140px] ' src={logo} alt="" /></a></div>
      <div className='flex gap-10 tracking-wider'>
      <div className='primary-font text-[20px] my-auto relative  group  text-black'><Link to='/about'><a>offer </a><p className='group-hover:w-12 w-0 duration-300 bg-green-500 h-[4px]  absolute bottom-0'></p></Link></div>
      <div className='primary-font text-[20px] my-auto relative  group  text-black'><Link to='/about'><a>career</a><p className='group-hover:w-12 w-0 duration-300 bg-green-500 h-[4px]  absolute bottom-0'></p></Link></div>
      <div className='primary-font text-[20px] my-auto relative  group  text-black'><Link to='/about'><a>blog</a><p className='group-hover:w-12 w-0 duration-300 bg-green-500 h-[4px]  absolute bottom-0'></p></Link></div>
      <div className='primary-font text-[20px] my-auto relative  group  text-black'><Link to='/about'><a>search</a><p className='group-hover:w-12 w-0 duration-300 bg-green-500 h-[4px]  absolute bottom-0'></p></Link></div>
</div>


</div>
    );
};

export default Navbar;