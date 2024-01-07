"use client"
import ProjectWidget from "@/src/components/projects/ProjectWidget"
import projects from "@/src/lib/data/projects"
import { Box, Grow, Stack, Typography } from "@mui/material"
import { usePathname } from "next/navigation"

const ProjectsPage = () => {
    const pathname = usePathname();
    return (
        <Grow in={pathname === '/projects'}>
            <Box
                id="page-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Stack
                    id="projects-page-section"
                    spacing={2}
                    sx={{
                        maxWidth: '1000px',
                        m: 2,
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        Projects
                    </Typography>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={{xs: 5, md: 10}} 
                        sx={{
                            width: '100%',
                        }}
                    >
                        {projects.map(project => {
                            const { route, thumbnail, thumbnailAlt, title, info } = project;
                            return (
                                <ProjectWidget 
                                    key={route}
                                    route={route}
                                    thumbnail={thumbnail}
                                    title={title}
                                    info={info}
                                    imgAlt={thumbnailAlt}
                                />
                            )
                        })}
                    </Stack>
                </Stack>
            </Box>
        </Grow>
    )
}

export default ProjectsPage;
