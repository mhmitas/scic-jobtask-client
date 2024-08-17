import React, { useEffect, useState } from 'react';
import { navlinks } from '../Navlinks/Navlinks';
import ThemeController from '../controlers/ThemeControler';
import { IoMdMenu } from "react-icons/io";
import { Button, IconButton, Tooltip } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { user, authLoading, logOutUser } = useAuth()

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
            <div className='flex items-center justify-between w-full py-2 lg:px-6 px-4 bg-base-100 shadow border border-base-100 min-h-16'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle md:hidden text-2xl">
                        <IoMdMenu />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                {/* <div>
                    <Link to='/'><button className='btn btn-ghost text-xl sm:text-2xl font-semibold'>MhStore</button></Link>
                </div> */}
                <div className="navbar-center hidden md:flex justify-center">
                    <ul className="px-1 flex items-center menu menu-sm sm:menu-md">
                        {navlinks}
                    </ul>
                </div>
                <div className='flex items-center gap-1'>
                    <ThemeController />
                    <div>
                        {authLoading ?
                            <span>Loading...</span> :
                            <>{user ?
                                <div className="dropdown dropdown-end">
                                    <Tooltip title={user?.displayName || user?.email}>
                                        <div tabIndex={0} role="button" className='btn btn-ghost btn-circle avatar' >
                                            <div className="w-9 rounded-full">
                                                <img className='rounded-full' alt={user?.email} src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/tY0hxsg/default-profile.jpg'} />
                                            </div>
                                        </div>
                                    </Tooltip>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-lg shadow-blue-500/10 menu menu-sm dropdown-content bg-base-100 rounded-md w-48">
                                        <li><a>Settings</a></li>
                                        <div className="divider my-0"></div>
                                        <li><button onClick={logOutUser}><LogoutOutlinedIcon fontSize='small' /> Logout</button></li>
                                    </ul>
                                </div>
                                :
                                <Link to={'/login'}>
                                    <Button color='primary' variant='outlined' className='text-base-content' size='small'>Login</Button>
                                </Link>}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;