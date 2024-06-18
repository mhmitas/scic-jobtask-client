import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const ProviderSignIn = () => {
    return (
        <div className='flex flex-col gap-2'>
            <button type='button' className='btn'>
                <FaGoogle size={26} />Google
            </button>
            <button type='button' className='btn'>
                <FaFacebook size={26} />Facebook
            </button>
        </div>
    );
};

export default ProviderSignIn;