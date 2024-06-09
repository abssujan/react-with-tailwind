import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const features = [
        {id:1, name:'Free', price: 0, feature:[
            'Super Retina XDR Display',
            'A-series Chip',
            'Face ID',
            '5G Connectivity',
            'Advanced Camera System',
            'MagSafe',
            'iOS Ecosystem'
        ]},
        {id:2, name:'Gold', price: 9.99, feature:[
            'Super Retina XDR Display',
            'A-series Chip',
            'Face ID',
            '5G Connectivity',
            'Advanced Camera System',
            'MagSafe',
            'iOS Ecosystem'
        ]},
        {id:3, name:'Diamond', price: 19.9, feature:[
            'Super Retina XDR Display',
            'A-series Chip',
            'Face ID',
            '5G Connectivity',
            'Advanced Camera System',
            'MagSafe',
            'iOS Ecosystem'
        ]},

    ]
    return (
        <div>
           <h2 className='mt-10 bg-indigo-300 p-5 text-white text-4xl font-bold'>Best Deal In Town</h2>
           <div className='grid grid-cols-3 gap-5 mt-5'>
            {
                features.map(feature => <PricingOption key={feature.id} feature={feature}></PricingOption>)
            }
           </div>
        </div>
    );
};

export default Pricing;