import React from 'react';

import Banner2 from '../../BannerSection/Banner2';
import section3Banner from "../../assets/section3Banner.png"

import handpicked from "../../assets/handpicked.png"
import natural from "../../assets/naturalcarot.png"


import Section2 from '../../allSection/Section2/Section2';
import ReusableSection from '../../AllComponent/resuableComponenet/ReuseableSection';
import CategorySection from '../../allSection/CategorySection/CategorySection';
import FreshMilkSection from '../../allSection/SectionFreshMilk/FreshMilkSection';
import AllFoodProducts from '../../allSection/Allproducts/AllFoodProducts';
import Team from '../../allSection/TeamMember/Team';
import Special from '../../allSection/SpecialProduct/Special';
import SectionOffer from '../../allSection/SectionOffer/SectionOffer';
import BlogSection from '../../allSection/Blog/BlogSection';
import MainBanner from '../../BannerSection/MainBanner';
import {Scrollbar} from 'smooth-scrollbar-react';


const Home = () => {
   
  
    return (
      <div>
      
         <div className='text-black'>
          
            <MainBanner/>
        <Banner2/>
        <Section2/>
      <ReusableSection banner={section3Banner} headerText={"about us"} headTitle={"Fresh from Nature's Bounty and Deliciously Organic Farm to Table"} firstPara={"Organic Foods and Café is a family run company founded in 2004 that runs organic supermarkets"} secondPara={"Organic means growing our food, which is to nourish us, without chemical aids during the growing process such as fertilisers, pesticides, fungcides, herbacides, larbicides etc"}  icon1={handpicked} icon2={natural} iconTitle1={"Hand picked food"}iconTitle2={100% natural}   />
      <CategorySection/>
  

  <FreshMilkSection/>

  <AllFoodProducts/>
  <SectionOffer/>

  <Team/>
  <Special/>
  <BlogSection/>
  <Special/>

    
      
            
        </div>

      </div>
    );
};

export default Home;