import { Typography, Box } from "@mui/material"
import { Fragment } from "react"

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
                <Box
                    id="summary-section"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        width: '100%',
                        borderRadius: '15px',
                        backgroundColor: '#403d39',
                        mt: 1.5,
                        py: 2,
                        px: 3,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: 'center'
                        }}
                    >
                        Projects Coming Soon! .....
                    </Typography> 
                </Box> 
            </Box>
        </Box>
    )
}

export default Project
