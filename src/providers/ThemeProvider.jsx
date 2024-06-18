// theme.js
import { createTheme } from '@mui/material/styles';
import { createContext, useEffect, useState } from 'react';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3b82f6',
        },
        secondary: {
            main: '#a3e635',
        },
        warning: {
            main: '#fbbf24',
        },
        info: {
            main: '#38bdf8',
        },
        success: {
            main: '#22c55e',
        },
        error: {
            main: '#ef4444',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#888888',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#3b82f6"
        },
        secondary: {
            main: "#fff"
        },
        accent: {
            main: "#37cdbe"
        },
        neutral: {
            main: "#0a62ba"
        },
        "base-100": {
            main: "#1d1e1f"
        },
        "base-200": {
            main: "#121212"
        },
        "base-300": {
            main: "#101010"
        },
        'base-content': {
            main: 'white'
        },
        background: {
            default: '#fff',
            paper: '#1d1d1d',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
});

export { darkTheme, lightTheme };


export const ThemeContext = createContext(null)
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(null)

    const html = document.querySelector('html')

    useEffect(() => {
        const localTheme = localStorage.getItem('color-theme')
        if (localTheme) {
            setTheme(localTheme)
        } else {
            setTheme('lightTheme')
        }
    }, [])

    function handleTheme() {
        if (theme === 'lightTheme') {
            setTheme('darkTheme')
            localStorage.setItem('color-theme', 'darkTheme')
        } else {
            setTheme('lightTheme')
            localStorage.setItem('color-theme', 'lightTheme')
        }
    }

    useEffect(() => {
        html.setAttribute('data-theme', theme)
    }, [theme])


    const themeInfo = {
        theme,
        setTheme,
        handleTheme,
    }

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;