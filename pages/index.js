import React from 'react'
import { Box } from "@mui/material"

import Introduction from '@/components/home/Introduction'
import Aboutme from '@/components/home/Aboutme' 
import Contact from '@/components/home/Contact' 
import Social from '@/components/home/Social'   

const Home = () => {
    return (
        <Box
            id="page-section"
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                id = "home-page-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    maxWidth: '700px',
                    mx: 1,
                }}
            >
                <Introduction />
                <Aboutme />
                <Contact />
                <Social />
            </Box>
        </Box>
    )
}

export default Home
