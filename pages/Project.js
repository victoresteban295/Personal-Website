import { Box } from "@mui/material"
import Comingsoon from "@/components/projects/ComingSoon"

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
                <Comingsoon />
            </Box>
        </Box>
    )
}

export default Project
