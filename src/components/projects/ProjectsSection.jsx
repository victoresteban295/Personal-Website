import { Box, Grid, Stack, Typography } from "@mui/material";
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
                <Grid
                    container
                    ref={projectsRef}
                    columnGap={5}
                    rowGap={{
                        xs: 2,
                        sm: 5,
                        md: 10,
                        lg: 10,
                    }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        maxWidth: '1250px',
                    }}
                >
                    {projects.map(project => {
                        const { route, thumbnail, thumbnailAlt, title, info, github, website } = project;
                        return (
                            <ProjectWidget 
                                key={route}
                                thumbnail={thumbnail}
                                imgAlt={thumbnailAlt}
                                title={title}
                                info={info}
                                website={website}
                                github={github}
                            />
                        )
                    })}
                </Grid>
            </Stack>
        </Box>
    )
}

export default ProjectsSection;
