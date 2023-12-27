import React from 'react'
import { Box, Divider, Stack } from "@mui/material"
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
                <Stack
                    id = "home-page-section"
                    divider={
                        <Divider 
                            variant='middle' 
                            sx={{
                                bgcolor: '#000'
                            }} 
                        flexItem />
                    }
                    sx={{
                        maxWidth: '700px',
                        borderRadius: '15px',
                        backgroundColor: 'secondary.main',
                        boxShadow: '1px 1px 10px #000',
                        m: 2,
                    }}
                >
                    <Introduction />
                    <Aboutme />
                    <Contact />
                    <Social />
                </Stack>
            </motion.div>
        </Box>
    )
}

export default Home
