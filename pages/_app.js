import Layout from '../components/Layout'
import '../styles/globals.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const MyApp = ({Component, pageProps}) => {

    let darkTheme = createTheme({
        palette: {
            primary: {
                main: '#403d39'
            },
            secondary: {
                main: '#403d39',
            },
            background: {
                paper: '#403d39',
                default: '#403d39'
            },
            text: {
                primary: '#fffcf2'
            },
            iconColor: {
                icon: '#403d39',
                background: '#ccc5b9',
                hover: '#ccc5b9'
            }
        }
    });

    darkTheme = responsiveFontSizes(darkTheme);

    let lightTheme = createTheme({
        palette: {
            primary: {
                main: '#ccc5b9'
            },
            secondary: {
                main: '#fffcf2',
            },
            background: {
                paper: '#ccc5b9',
                default: '#ccc5b9'
            },
            text: {
                primary: '#252422'
            },
            iconColor: {
                icon: '#ccc5b9',
                background: '#403d39',
                hover: '#fffcf2'
            }
        }
    });

    lightTheme = responsiveFontSizes(lightTheme);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />  
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
