import React from 'react';
import logo from "../../assets/Green And White Modern Company Circle  Logo .png"
import { Link } from 'react-router-dom';
const Navbar = () => {
 
    return (
        <div className="hidden  lg:grid grid-cols-3 mx-auto justify-items-center">
          <div className='flex gap-10 tracking-wider'>
<div className='primary-font text-[20px] my-auto  text-black'><Link to='/'><a>Home</a></Link></div>
   <div className='primary-font text-[20px] my-auto  text-black'><Link to='/about'> <a>About</a></Link></div>
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