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
                borderRadius: '15px',
                backgroundColor: 'secondary.main',
                boxShadow: '1px 1px 10px #000',
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
                Enthusiastic software engineer devoted to developing new
                software technologies that will improve the function of your 
                company. Loves to work hands-on with any given assignment. 
                Comfortable working independently or in a team. Experience in 
                frontend and backend web development, UX design, and database 
                management systems like MySQL and Apache Cassandra.
            </Typography>
        </Box>
    )
}

export default Summary
