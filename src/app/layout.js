"use client"
import { Box, CircularProgress, ThemeProvider } from "@mui/material";
import NavBar from "../components/Navbar";
import ThemeRegistry from "../theme/ThemeRegistry";
import darkTheme from "../theme/DarkModeTheme";
import lightTheme from "../theme/LightModeTheme";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const RootLayout = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(true);

    useEffect(() => {
        let theme = localStorage.getItem("theme");
        if(theme === "light") {
            setDarkMode(false);
        } else {
            setDarkMode(true);
            localStorage.setItem("theme", "dark");         
        }
    }, []);

    /* Change DarkMode */
    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            //Save Theme on LocalStorage
            if(!prevMode) {
                localStorage.setItem("theme", "dark");         
            } else {
                localStorage.setItem("theme", "light");         
            }

            return !prevMode;
        })
    }
    return(
        <html lang='en'>
            <body>
                <ThemeRegistry options={{key: 'mui'}}>
                    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                        <Box
                            id="page"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100vh',
                                backgroundColor: 'primary.main',
                                color: 'text.primary',
                                overflowY: 'auto',
                                flexGrow: 1,
                            }}
                        >
                            <NavBar 
                                isDarkMode={isDarkMode}
                                toggleDarkMode={toggleDarkMode}
                            />
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    width: '100%',
                                }}
                            >
                                {children}
                            </Box>
                            <Footer />
                        </Box>
                    </ThemeProvider>
                </ThemeRegistry>
            </body>
        </html>
    )
}

export default RootLayout;
