import React, { useEffect, useState } from 'react';
import { navlinks } from '../Navlinks/Navlinks';
import ThemeController from '../controlers/ThemeControler';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            // Scroll Down
            setIsVisible(false);
        } else {
            // Scroll Up
            setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={`fixed top-0 w-full shadow-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} z-50`}>
            <div className='flex items-center justify-between w-full py-2 lg:px-6 px-4 bg-base-100 shadow-md shadow-blue-500/10 border border-base-100 '>
                <div>
                    <button className='btn btn-ghost text-2xl '>Ipsum</button>
                </div>
                <div className="navbar-center flex flex-1 justify-center">
                    <ul className="px-1 flex items-center">
                        {navlinks}
                    </ul>
                </div>
                <div className='flex items-center gap-1'>
                    <ThemeController />
                    <Link to={'/login'}>
                        <Button color='primary' variant='outlined' className='text-base-content' size='small'>Login</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;