"use client"
import { Box, ThemeProvider } from "@mui/material"
import HomeSection from "../components/home/HomeSection"
import NavBar from "../components/Navbar";
import darkTheme from "../theme/DarkModeTheme";
import lightTheme from "../theme/LightModeTheme";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ProjectsSection from "../components/projects/ProjectsSection"
import ResumeSection from "../components/resume/ResumeSection"
import { useInView } from "react-intersection-observer"

const HomePage = () => {

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
            <Box
                id="page"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'primary.main',
                    color: 'text.primary',
                    overflowY: 'auto',
                    flexGrow: 1,
                }}
            >
                <NavBar 
                    isDarkMode={isDarkMode}
                    toggleDarkMode={toggleDarkMode}
                    isHomeVisible={isHomeVisible}
                    isProjectsVisible={isProjectsVisible}
                    isResumeVisible={isResumeVisible}
                />
                <Box
                    id="home"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <HomeSection 
                        isDarkMode={isDarkMode}
                        homeRef={homeRef}
                    />
                    <ProjectsSection 
                        projectsRef={projectsRef}
                    />
                    <ResumeSection 
                        resumeRef={resumeRef}
                    />
                    <Footer />
                </Box>

            </Box>
        </ThemeProvider>
    )
}

export default HomePage;
