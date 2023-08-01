import React from 'react';
import Banner1 from '../../BannerSection/Banner1';
import Banner2 from '../../BannerSection/Banner2';

import Section3 from '../../allSection/section3/Section3';
import Section2 from '../../allSection/Section2/Section2';

const Home = () => {
    return (
        <div className='text-black'>
        <Banner1/>
        <Banner2/>
        <Section2/>
        <Section3/>
            
        </div>
    );
};

export default Home;