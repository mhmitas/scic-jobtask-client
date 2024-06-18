import { ThemeContext } from '@emotion/react';
import React, { useContext, useEffect, useState } from 'react';
import { darkTheme, lightTheme } from '../providers/ThemeProvider';
import { ThemeProvider } from '@mui/material';

const MuiThemeWrapper = ({ children }) => {
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
            {children}
        </ThemeProvider>
    );
};

export default MuiThemeWrapper;