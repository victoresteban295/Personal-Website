import { Box } from "@mui/material"
import HomeSection from "../components/home/HomeSection"
import Footer from "../components/Footer";
import ProjectsSection from "../components/projects/ProjectsSection"
import ResumeSection from "../components/resume/ResumeSection"
import NavBar from "../components/Navbar";

const HomePage = ({ 
    isDarkMode, 
    toggleDarkMode, 
    homeRef, 
    projectsRef, 
    resumeRef, 
    isHomeVisible, 
    isProjectsVisible, 
    isResumeVisible }) => {

    return (
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
    )
}

export default HomePage;
