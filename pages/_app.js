import '../styles/globals.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import React, {useState} from 'react'
import NavBar from '@/components/Navbar'    

const MyApp = ({Component, pageProps}) => {


    let darkTheme = createTheme({
        palette: {
            primary: {
                main: '#252422'
            },
            secondary: {
                main: '#403d39',
            },
            background: {
                paper: '#252422',
                default: '#252422'
            },
            text: {
                primary: '#fffcf2'
            },
            iconColor: {
                icon: '#403d39',
                background: '#ccc5b9',
                hover: '#403d39'
            },
            darkMode: {
                icon: '#252422',
                background: '#fffcf2',
                hover: '#ffff00'
            }
        },
        /* typography: { */
        /*     body1: { */
        /*         fontSize: "1.25rem", */
        /*     } */
        /* } */
    });

    darkTheme = responsiveFontSizes(darkTheme);

    let lightTheme = createTheme({
        palette: {
            primary: {
                main: '#fffcf2'
            },
            secondary: {
                main: '#fffcf2',
            },
            background: {
                paper: '#fffcf2',
                default: '#fffcf2'
            },
            text: {
                primary: '#252422'
            },
            iconColor: {
                icon: '#ccc5b9',
                background: '#403d39',
                hover: '#ccc5b9'
            },
            darkMode: {
                icon: '#fffcf2',
                background: '#252422',
                hover: '#808080'
            }
        }
    });

    lightTheme = responsiveFontSizes(lightTheme);

    const [isDarkMode, setDarkMode] = useState(true)

    function toggleDarkMode() {
        setDarkMode(prevMode => {
            return !prevMode
        })
    }

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />  
            <NavBar
                isDarkMode={isDarkMode}
                handleClick={toggleDarkMode}
            />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
