import { Button, Link as muiLink } from '@mui/material';
import React from 'react';
// bg-gradient-to-b from-blue-700/30 via-base-100 to-base-100
const Hero = () => {
    return (
        <div className='w-full'>
            <div className="h-[550px] flex flex-col justify-center items-center w-full bg-base-100 ">
                <h1 className="text-5xl font-bold mb-4 text-center pt-6">
                    Welcome to Our Website
                </h1>
                <p className="text-xl mb-8 text-center">
                    We provide the best solutions for your business.
                </p>
                <div className='flex gap-2'>
                    <Button sx={{ borderRadius: 100 }} variant='contained'>
                        Learn More
                    </Button>
                    {/* <button className='btn btn-primary text-white'>DaisyUI</button> */}
                    <Button sx={{ borderRadius: 100 }} variant='outlined'>
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;