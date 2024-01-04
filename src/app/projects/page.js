"use client"
import ProjectWidget from "@/src/components/projects/ProjectWidget"
import { Box, Grow, Stack, Typography } from "@mui/material"
import { usePathname } from "next/navigation"

const ProjectPage = () => {
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
                        maxWidth: '700px',
                        m: 2,
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            fontWeight: '700'
                        }}
                    >
                        Projects
                    </Typography>
                    <ProjectWidget 
                        imgPath='/images/academicDashboard/checklistpage.png'
                        title='Academic Dashboard: Frontend'
                        info='A web application for academic institutions that improves how students interact with course-related work assigned by professors.'
                        github=''
                    />
                    <ProjectWidget 
                        imgPath='/images/academicDashboard/checklistpage.png'
                        title='RESTful API'
                        info='A REST API built using Spring Boot and Java to '
                        github=''
                    />
                </Stack>
            </Box>
        </Grow>
    )
}

export default ProjectPage;
