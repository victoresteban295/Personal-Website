"use client"
import React from 'react'
import { Box, Grow, Stack } from "@mui/material"
import Introduction from '../components/home/Introduction'
import Aboutme from '../components/home/Aboutme'
import Social from '../components/home/Social'
import { usePathname } from 'next/navigation'
import Education from '../components/resume/Education'

const HomePage = () => {
    const pathname = usePathname();
    return (
        <Grow in={pathname === ('/')}>
            <Box
                id="page-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Stack
                    id = "home-page-section"
                    spacing={2}
                    sx={{
                        maxWidth: '700px',
                        m: 2,
                    }}
                >
                    <Introduction />
                    <Aboutme />
                    <Education />
                    <Social />
                </Stack>
            </Box>
        </Grow>
    )
}

export default HomePage;
