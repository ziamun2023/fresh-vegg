import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img from "../../assets/greenbanner.png"
import TitleBanner from '../../AllComponent/resuableComponenet/TitleBanner';
import Heading from '../../AllComponent/resuableComponenet/Heading';
import ItemCartAnimated from '../../AllComponent/resuableComponenet/ItemCartAnimated';
import SaladItem from './SaladItem';
import Vegitables from './Vegitables';
import Fish from './Fish';
import Meat from './Meat';
import DryFood from './DryFood';
import Grocerries from './Grocerries';
import Drinks from './Drinks';
const Shop = () => {
    const [tabindex,setTabindex]=useState(0)
    return (
        <div>
            <div>
            <TitleBanner Title={"Daily fresh"} Detail={"We Belive That Healthy Eating,Clean Air And, Gental Char Best Start To Genuinw Wellbeging"} img={img}/>
            </div>
            <div className='text-center'>
                <Heading  heading={"All Items"}/>
            </div>
            
         <div className='lg:mx-20' > 
         <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
  <TabList>
    <Tab style={{fontSize:'20px'}}>Salad items</Tab>
    <Tab style={{fontSize:'20px'}}>Vegitables</Tab>
    <Tab style={{fontSize:'20px'}}>Fish</Tab>
    <Tab style={{fontSize:'20px'}}>Meat</Tab>
    <Tab style={{fontSize:'20px'}}>Dry food</Tab>
    <Tab style={{fontSize:'20px'}}>Grocerries</Tab>
    <Tab style={{fontSize:'20px'}}>Drink</Tab>
  </TabList>
  <TabPanel>

    <SaladItem/>
  </TabPanel>
  <TabPanel>
    <Vegitables/>
  </TabPanel>
  <TabPanel>
    <Fish/>
  </TabPanel>
  <TabPanel>
    <Meat/>
  </TabPanel>
  <TabPanel>
    <DryFood/>
  </TabPanel>
  <TabPanel>
    <Grocerries/>
  </TabPanel>
  <TabPanel>
    <Drinks/>
  </TabPanel>
</Tabs>
         </div>
            
        </div>
    );
};

export default Shop;