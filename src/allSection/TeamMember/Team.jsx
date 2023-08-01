import React from 'react';
import HeaderAndDetails from '../../AllComponent/resuableComponenet/HeaderAndDetails';
import leaf from "../../assets/leaf2.png"
const Team = () => {
    return (
        <div>
        <div className='mx-40'>    <HeaderAndDetails heading={'Our team member'} subtitle={"We have the best team member who are always ready to server the best services"} /></div>
            <div className='grid  justify-items-center'>
                <div>
                    <img className='rounded-full w-40' src='' alt="" />
                </div>
             <div className=' relative rounded-full text-white bg-gradient-to-r from-green-600 to-green-400 lg:w-[400px] text-center text-[20px] primary-font lg:h-[80px]'>
             <p>lisa</p>
                <p>Customer care</p>
                <img src={leaf} alt="" />
             </div>

            </div>
        </div>
    );
};

export default Team;