import Layout from '../components/Layout'
import '../styles/globals.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const MyApp = ({Component, pageProps}) => {

    let myTheme = createTheme({
        palette: {
            primary: {
                main: '#252422'
            },
            background: {
                paper: '#252422',
                default: '#252422'
            },
            text: {
                primary: '#fffcf2'
            }
        }
    });

    myTheme = responsiveFontSizes(myTheme);

    return (
        <ThemeProvider theme={myTheme}>
            <CssBaseline />  
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
