import React, { useContext } from 'react';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from '../../providers/ThemeProvider';

const ThemeController = () => {
    const { handleTheme, theme } = useContext(ThemeContext)
    return (
        <div>
            <button onClick={handleTheme} className='btn btn-sm btn-circle btn-ghost text-xl sm:text-2xl'>
                {theme === 'darkTheme' ? <IoMoonOutline className='text-base-content' /> : <IoSunnyOutline className='text-base-content' />}
            </button>
        </div>
    );
};

export default ThemeController;