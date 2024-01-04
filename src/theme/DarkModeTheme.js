import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Cabin } from 'next/font/google';
const cabin = Cabin({
    weight: ['400', '700'],
    subsets: ['latin']
})

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
            icon: '#ffff00',
            background: '#46b1c9',
            hover: '#46b1c9'
        }
    },
    typography: {
        fontFamily: cabin.style.fontFamily
    }
});

darkTheme = responsiveFontSizes(darkTheme);
export default darkTheme;
