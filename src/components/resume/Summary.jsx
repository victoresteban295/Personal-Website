import { Typography, Box } from "@mui/material"
import { Teko } from "next/font/google"

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
})

const Summary = () => {
    return (
        <Box
            id="summary-section"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                width: '100%',
                py: 1,
                px: 3,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontFamily: teko.style.fontFamily,
                        m: 0,
                        mb: 1,
                        p: 0,
                        borderBottom: '4px solid',
                    }}
                >
                    Summary
                </Typography> 
            </Box>
            <Typography
                variant="body1"
            >
                Enthusiastic software engineer devoted to developing new technologies that will improve the function of your company. Loves to work hands-on with any given assignment and is comfortable working independently or in a team. Fluent in writing code in Java and Javascript. Experience in developing full-stack applications using technologies like React, Nextjs, and Spring. Capable of deploying applications using Docker and storing data in a document database like MongoDB.
            </Typography>
        </Box>
    )
}

export default Summary
