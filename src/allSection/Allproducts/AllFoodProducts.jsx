import React from 'react';
import Heading from '../../AllComponent/resuableComponenet/Heading';
import ReuseableProductCart from '../../AllComponent/resuableComponenet/ReuseableProductCart';
import AnimatedButton from '../../AllComponent/resuableComponenet/AnimatedButton';

const AllFoodProducts = () => {
    return (
        <div className='my-20'>
<div className='text-center'>
<Heading heading={'All Products'}></Heading>
</div>
<div className='lg:grid lg:grid-cols-4 gap-10 ms-10 lg:ms-0 justify-items-center'>
    <ReuseableProductCart/>
  

</div>
<AnimatedButton text={'show more'}/>
            
        </div>
    );
};

export default AllFoodProducts;