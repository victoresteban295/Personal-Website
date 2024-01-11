import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Cabin } from 'next/font/google';

const cabin = Cabin({
    weight: ['400', '700'],
    subsets: ['latin']
})

let lightTheme = createTheme({
    palette: {
        primary: {
            main: '#fffcf2'
        },
        secondary: {
            main: '#ccc5b9',
        },
        background: {
            paper: '#fffcf2',
            default: '#fffcf2'
        },
        text: {
            primary: '#252422'
        },
        iconColor: {
            icon: '#252422',
            background: '#fffcf2',
            hover: '#ccc5b9'
        },
        darkMode: {
            icon: '#252422',
            background: '#252422',
            hover: '#ccc5b9',
        },
        resume: {
            background: '#fffcf2',
            border: '#252422',
        }
    },
    typography: {
        fontFamily: cabin.style.fontFamily
    }
});

lightTheme = responsiveFontSizes(lightTheme);
export default lightTheme;
