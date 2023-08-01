import React from 'react';
import HeaderAndDetails from '../../AllComponent/resuableComponenet/HeaderAndDetails';
import leaf from "../../assets/leaf2.png"
import { IoLogoWhatsapp } from 'react-icons/Io';
import { BiLogoTwitter } from 'react-icons/Bi';
import { BiLogoFacebook } from 'react-icons/Bi';
const Team = () => {
    return (
        <div>
        <div className='mx-40'>    <HeaderAndDetails heading={'Our team member'} subtitle={"We have the best team member who are always ready to server the best services"} /></div>
         <div className='lg:grid lg:grid-cols-3 gap-10 justify-items-center'>
         <div className='grid w-[370px] h-[430px] justify-items-center'>
                <div>
                    <img className='rounded-full w-40' src='' alt="" />
                </div>
             <div className=' relative rounded-full text-white duration-300 bg-gradient-to-r from-green-600 to-green-400 lg:w-[400px] text-center text-[20px] primary-font lg:h-[80px] '>
             <p>lisa</p>
                <p>Customer care</p>
                <img className='w-[120px]'  src={leaf} alt="" />
             </div>
             <div className='flex justify-center gap-10'>
                <p><BiLogoFacebook size={30}/></p>
                <p><BiLogoTwitter size={30}/></p>
                <p><IoLogoWhatsapp size={30}/></p>
             </div>

            </div>
            <div className='grid w-[370px] h-[430px] justify-items-center'>
                <div>
                    <img className='rounded-full w-40' src='' alt="" />
                </div>
             <div className=' relative rounded-full text-white duration-300 bg-gradient-to-r from-green-600 to-green-400 lg:w-[400px] text-center text-[20px] primary-font lg:h-[80px] '>
             <p>lisa</p>
                <p>Customer care</p>
                <img className='w-[120px]'  src={leaf} alt="" />
             </div>
             <div className='flex justify-center gap-10'>
                <p><BiLogoFacebook size={30}/></p>
                <p><BiLogoTwitter size={30}/></p>
                <p><IoLogoWhatsapp size={30}/></p>
             </div>

            </div>
            <div className='grid w-[370px] h-[430px] justify-items-center'>
                <div>
                    <img className='rounded-full w-40' src='' alt="" />
                </div>
             <div className=' relative rounded-full text-white duration-300 bg-gradient-to-r from-green-600 to-green-400 lg:w-[400px] text-center text-[20px] primary-font lg:h-[80px] '>
             <p>lisa</p>
                <p>Customer care</p>
                <img className='w-[120px]'  src={leaf} alt="" />
             </div>
             <div className='flex justify-center gap-10'>
                <p><BiLogoFacebook size={30}/></p>
                <p><BiLogoTwitter size={30}/></p>
                <p><IoLogoWhatsapp size={30}/></p>
             </div>

            </div>

         </div>
        </div>
    );
};

export default Team;