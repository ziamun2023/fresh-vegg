import React from 'react';
import HeaderAndDetails from '../../AllComponent/resuableComponenet/HeaderAndDetails';
import AnimatedCarts from '../../AllComponent/resuableComponenet/AnimatedCarts';

const CategorySection = () => {
    return (
        <div className=' h-[700px]  bg-[rgb(243,244,245)]'>
  

 <HeaderAndDetails heading={"categories"} subtitle={"We work with the farmers hands on hands"}/>

      <div className='lg:grid my-20 lg:grid-cols-4 justify-items-center gap-10 mx-20'>
  <AnimatedCarts title={"N"} Maintitle={"Nuts"} subtitle={"Have the best dry food from our store"}/>
  <AnimatedCarts title={"V"} Maintitle={"Vegetable"} subtitle={"Hand picked vegetable and tested for insects"}/>
  <AnimatedCarts title={"M"} Maintitle={"Meat"} subtitle={"Fresh and 100 percent authentic meat"}/>
  <AnimatedCarts title={"F"} Maintitle={"Fish"}  subtitle={"Sea food well refrigerated"}/>
      </div>
         
 

 

            
        </div>
    );
};

export default CategorySection;