import React from 'react';
import Heading from '../../AllComponent/resuableComponenet/Heading';
import ReuseableProductCart from '../../AllComponent/resuableComponenet/ReuseableProductCart';

const AllFoodProducts = () => {
    return (
        <div className='my-20'>
<div className='text-center'>
<Heading heading={'All Products'}></Heading>
</div>
<div className='lg:grid lg:grid-cols-4 gap-10 ms-10 lg:ms-0 justify-items-center'>
    <ReuseableProductCart/>
  

</div>
            
        </div>
    );
};

export default AllFoodProducts;