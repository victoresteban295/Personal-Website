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
            paper: '#393d3f',
            default: '#393d3f'
        },
        text: {
            primary: '#e5e5e5'
        },
        iconColor: {
            icon: '#e5e5e5',
            background: '#393d3f',
            hover: '#403d39'
        },
        darkMode: {
            icon: '#e5e5e5',
            background: '#e5e5e5',
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
