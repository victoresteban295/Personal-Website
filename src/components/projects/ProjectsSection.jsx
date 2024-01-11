import { Box, Stack, Typography } from "@mui/material";
import ProjectWidget from "./ProjectWidget";
import projects from "@/src/lib/data/projects";

const ProjectsSection = ({ projectsRef }) => {
    return (
        <Box
            id='projects'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'secondary.main',
                width: '100%',
                py: '70px',
                px: 2,
            }}
        >
            <Stack
                spacing={2}
            >
                <Typography
                    variant='h5'
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    Projects
                </Typography>
                <Stack
                    ref={projectsRef}
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{xs: 5, sm: 10, md: 30}} 
                    sx={{
                        width: '100%',
                    }}
                >
                    {projects.map(project => {
                        const {route, thumbnail, thumbnailAlt, title, info, github } = project;
                        return (
                            <ProjectWidget 
                                key={route}
                                thumbnail={thumbnail}
                                imgAlt={thumbnailAlt}
                                title={title}
                                info={info}
                                github={github}
                            />
                        )
                    })}
                </Stack>
            </Stack>
        </Box>
    )
}

export default ProjectsSection;
