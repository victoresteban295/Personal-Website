import { Box } from "@mui/material"
import Comingsoon from "@/components/projects/ComingSoon"
import { motion } from 'framer-motion'

const Project = () => {
    return (
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
                    <Comingsoon />
                </motion.div>
            </Box>
        </Box>
    )
}

export default Project
