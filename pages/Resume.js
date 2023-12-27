import { Box, Divider, Stack } from "@mui/material"
import { motion } from 'framer-motion'

import Summary from "@/components/resume/Summary"
import Education from "@/components/resume/Education"
import Volunteer from "@/components/resume/Volunteer"
import Skill from "@/components/resume/Skill"

const Resume = () => {
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
                    y: 1500,
                }}
                transition= {{
                    duration: 0.5,
                }}
            >
                <Stack
                    id="resume-page-section"
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
                    <Summary /> 
                    <Education />
                    <Volunteer />
                    <Skill />

                </Stack>
            </motion.div>
        </Box>
    )
}

export default Resume
