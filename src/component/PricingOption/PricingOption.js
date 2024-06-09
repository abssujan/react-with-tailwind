import React from 'react';
import Feature from '../Feature/Feature';

const PricingOption = (props) => {
    const {feature, price, name} = props.feature
    return (
        <div className=' bg-indigo-300 rounded-md p-5'>
            <p><span className='text-7xl text-white font-bold'>{price}</span>
            <span className=' text-gray-500 text-xl'>/mon</span>
            </p>
            <p className=' text-3xl mt-2 text-gray-700'>{name}</p>
            <div>
                {
                    feature.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-4 w-full bg-blue-500 py-2 rounded-md text-white font-bold'>Buy Now</button>
        </div>
      
    );
};

export default PricingOption;