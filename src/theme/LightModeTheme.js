import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Cabin } from 'next/font/google';

const cabin = Cabin({
    weight: ['400', '700'],
    subsets: ['latin']
})

let lightTheme = createTheme({
    palette: {
        primary: {
            main: '#fff'
        },
        secondary: {
            main: '#e5e5e5',
        },
        background: {
            paper: '#fff',
            default: '#fff'
        },
        text: {
            primary: '#252422'
        },
        iconColor: {
            icon: '#252422',
            background: '#fff',
            hover: '#e5e5e5'
        },
        darkMode: {
            icon: '#252422',
            background: '#252422',
            hover: '#e5e5e5',
        },
        resume: {
            background: '#fff',
            border: '#252422',
        }
    },
    typography: {
        fontFamily: cabin.style.fontFamily
    }
});

lightTheme = responsiveFontSizes(lightTheme);
export default lightTheme;
