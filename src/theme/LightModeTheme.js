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
    },
    typography: {
        fontFamily: cabin.style.fontFamily
    }
});

lightTheme = responsiveFontSizes(lightTheme);
export default lightTheme;
