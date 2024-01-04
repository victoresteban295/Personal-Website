"use client"
import Education from "@/src/components/resume/Education"
import Skill from "@/src/components/resume/Skill"
import Summary from "@/src/components/resume/Summary"
import Volunteer from "@/src/components/resume/Volunteer"
import { Box, Grow, Stack, Typography } from "@mui/material"
import { usePathname } from "next/navigation"

const ResumePage = () => {
    const pathname = usePathname();
    return (
        <Grow in={pathname === '/resume'}>
            <Box
                id="page-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Stack
                    id="resume-page-section"
                    spacing={2}
                    sx={{
                        maxWidth: '700px',
                        m: 2,
                    }}
                >
                    <Typography
                        variant='h5'
                        sx={{
                            fontWeight: '700',
                        }}
                    >
                        Resume
                    </Typography>
                    <Summary /> 
                    <Education />
                    <Volunteer />
                    <Skill />
                </Stack>
            </Box>
        </Grow>
    )
}

export default ResumePage;
