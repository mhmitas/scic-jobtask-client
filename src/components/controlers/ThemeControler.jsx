import React, { useContext } from 'react';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from '../../providers/ThemeProvider';
import { Button, IconButton } from '@mui/material';

const ThemeController = () => {
    const { handleTheme, theme } = useContext(ThemeContext)
    return (
        <div>
            <IconButton onClick={handleTheme} >
                {theme === 'darkTheme' ? <IoMoonOutline className='text-base-content' size={20} /> : <IoSunnyOutline className='text-base-content' size={20} />}
            </IconButton >
        </div>
    );
};

export default ThemeController;