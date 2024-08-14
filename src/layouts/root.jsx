import { Button, ThemeProvider } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { lightTheme, darkTheme, ThemeContext } from '../providers/ThemeProvider';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/footer/Footer';


const Root = () => {
    const { theme } = useContext(ThemeContext)
    const [muiTheme, setMuiTheme] = useState(lightTheme)
    useEffect(() => {
        if (theme === 'lightTheme') {
            setMuiTheme(lightTheme)
        } else {
            setMuiTheme(darkTheme)
        }
    }, [theme])

    return (
        <ThemeProvider theme={muiTheme}>
            <div className='min-h-screen relative flex flex-col'>
                <Navbar />
                <div className='max-w-screen-2xl mx-auto w-full flex-1'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    );
};

export default Root;

{/* <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
    chatGPT Button
</button> */}

{/* <h3 className='text-5xl font-bold bg-base-200 p-4 m-6 text-center shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/40 transition duration-500 rounded-lg'>Hello MUI</h3> */ }