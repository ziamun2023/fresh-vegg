import React from 'react';

const HeaderAndDetails = ({subtitle,heading}) => {
    return (
        <div>
<p className='text-green-600 text-3xl primary-font text-center'>~{heading} ~</p>{}
<p className='lg:text-[50px] text-[30px] text-gray-800 primary-font text-center'>{subtitle}</p>
            
        </div>
    );
};

export default HeaderAndDetails;