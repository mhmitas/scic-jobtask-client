import { Button, Link as muiLink } from '@mui/material';
import React from 'react';
// bg-gradient-to-b from-blue-700/30 via-base-100 to-base-100
const Hero = () => {
    return (
        <div className='w-full bg-base-100 bg-no-repeat bg-cover bg-center mb-10' style={{ backgroundImage: "url(https://res.cloudinary.com/dquqygs9h/image/upload/v1723731037/l6vn7dh0gx2bddq24rea.jpg)" }}>
            <div className="min-h-[250px] md:min-h-[300px] lg:min-h-[500px] flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-20 text-white" >
                <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold md:mb-4 text-center">
                    Welcome to Our Shop
                </h1>
                <p className="md:text-xl text-lg mb-4 md:mb-6 text-center">
                    We provide the best solutions for your daily purpose.
                </p>
                <div className='flex flex-col sm:flex-row gap-2'>
                    <Button sx={{ borderRadius: 100 }} variant='contained'>
                        Learn More
                    </Button>
                    <Button sx={{ borderRadius: 100 }} variant='outlined'>
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;