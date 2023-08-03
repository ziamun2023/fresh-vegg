import React from 'react';
import HeaderAndDetails from '../../AllComponent/resuableComponenet/HeaderAndDetails';
import AnimatedCarts from '../../AllComponent/resuableComponenet/AnimatedCarts';
import nuts from "../../assets/nutspic.png"
import meat from "../../assets/meatpic.png"
import fish from "../../assets/fishpic.png"
import veg from "../../assets/vegpic.png"
const CategorySection = () => {
    return (
        <div className='lg:h-[700px] h-[2000px]  bg-[rgb(243,244,245)]'>
  

 <HeaderAndDetails heading={"categories"} subtitle={"We work with the farmers hands on hands"}/>

      <div className='lg:grid my-20 lg:grid-cols-4 justify-items-center gap-10 ms-10 lg:mx-20'>
  <AnimatedCarts title={"N"} Maintitle={"Nuts"} subtitle={"Have the best dry food from our store"} image={nuts}/>
  <AnimatedCarts title={"V"} Maintitle={"Vegetable"} subtitle={"Hand picked vegetable and tested for insects"} image={veg}/>
  <AnimatedCarts title={"M"} Maintitle={"Meat"} subtitle={"Fresh and 100 percent authentic meat"} image={meat}/>
  <AnimatedCarts title={"F"} Maintitle={"Fish"}  subtitle={"Sea food well refrigerated"} image={fish}/>
      </div>
         
 

 

            
        </div>
    );
};

export default CategorySection;