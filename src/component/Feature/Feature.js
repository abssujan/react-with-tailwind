import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Feature = ({feature}) => {
    return (
        <div className='flex space-x-4 mt-5'>
                <CheckCircleIcon className="size-6 text-blue-500" ></CheckCircleIcon>
                <p>{feature}</p>
      </div>
    );
};

export default Feature;