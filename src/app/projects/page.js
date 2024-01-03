"use client"
import Comingsoon from "@/src/components/projects/ComingSoon"
import { Box, Grow } from "@mui/material"
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
                <Box
                    id="project-page-section"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        maxWidth: '700px',
                        mx: 1,
                    }}
                >
                        <Comingsoon />
                </Box>
            </Box>
        </Grow>
    )
}

export default ProjectPage;
