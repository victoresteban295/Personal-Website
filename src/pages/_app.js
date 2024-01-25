import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import darkTheme from "../theme/DarkModeTheme";
import lightTheme from "../theme/LightModeTheme";
import { useInView } from "react-intersection-observer"

const MyApp = ({Component, pageProps}) => {

    const { ref: homeRef, inView: isHomeVisible } = useInView();
    const { ref: projectsRef, inView: isProjectsVisible } = useInView();
    const { ref: resumeRef, inView: isResumeVisible } = useInView();

    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        let theme = localStorage.getItem("theme");
        if(theme === "dark") {
            setDarkMode(true);
        } else {
            setDarkMode(false);
            localStorage.setItem("theme", "light");         
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

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
                <Component 
                    {...pageProps} 
                    isDarkMode={isDarkMode}
                    toggleDarkMode={toggleDarkMode}
                    homeRef={homeRef}
                    projectsRef={projectsRef}
                    resumeRef={resumeRef}
                    isHomeVisible={isHomeVisible}
                    isProjectsVisible={isProjectsVisible}
                    isResumeVisible={isResumeVisible}
                />
        </ThemeProvider>
    )
}

export default MyApp;
