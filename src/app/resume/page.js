"use client"
import Skill from "@/src/components/resume/Skill"
import Summary from "@/src/components/resume/Summary"
import Volunteer from "@/src/components/resume/Volunteer"
import Work from "@/src/components/resume/Work"
import { Box, Divider, Grow, Stack, Typography } from "@mui/material"
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
                    <Stack
                        spacing={2}
                        sx={{
                            borderRadius: '15px',
                            backgroundColor: 'secondary.main',
                            boxShadow: '1px 1px 10px #000',
                        }}
                    >
                        <Summary /> 
                        <Work />
                        <Volunteer />
                        <Skill />
                    </Stack>
                </Stack>
            </Box>
        </Grow>
    )
}

export default ResumePage;
