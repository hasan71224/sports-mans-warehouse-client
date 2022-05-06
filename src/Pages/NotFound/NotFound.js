import React from 'react';
import Error from '../../Images/error.jpg'

const NotFound = () => {
    return (
        <div className='w-50 mx-auto'>
            <img className='w-100 mt-4' src={Error} alt="" />
        </div>
    );
};

export default NotFound;