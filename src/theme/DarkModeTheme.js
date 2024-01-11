import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Cabin } from 'next/font/google';
const cabin = Cabin({
    weight: ['400', '700'],
    subsets: ['latin']
})

let darkTheme = createTheme({
    palette: {
        primary: {
            main: '#393d3f'
        },
        secondary: {
            main: '#272c2e',
        },
        background: {
            paper: '#252422',
            default: '#252422'
        },
        text: {
            primary: '#fffcf2'
        },
        iconColor: {
            icon: '#fffcf2',
            background: '#393d3f',
            hover: '#403d39'
        },
        darkMode: {
            icon: '#fffcf2',
            background: '#fffcf2',
            hover: '#403d39'
        }, 
        resume: {
            background: '#272c2e',
            border: '#393d3f',
        }
    },
    typography: {
        fontFamily: cabin.style.fontFamily
    }
});

darkTheme = responsiveFontSizes(darkTheme);
export default darkTheme;
