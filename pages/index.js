import React from 'react'
import { Box } from "@mui/material"
import { motion } from 'framer-motion'

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
                <motion.div
                    animate={{
                        y: 0,
                    }} 
                    initial={{
                        y: 1000,
                    }}
                    transition= {{
                        duration: 0.5,
                    }}
                >
                    <Introduction />
                    <Aboutme />
                    <Contact />
                    <Social />
                </motion.div>
            </Box>
        </Box>
    )
}

export default Home
