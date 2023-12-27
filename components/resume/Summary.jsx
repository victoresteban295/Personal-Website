import { Typography, Box } from "@mui/material"
import { Cabin } from '@next/font/google'

const cabin = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabinBody = Cabin({
    weight: '400',
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
                py: 2,
                px: 3,
            }}
        >
            <Typography
                variant="h5"
                className={cabin.className}
                sx={{
                    m: 0,
                    mb: 1,
                    p: 0,
                }}
            >
                Summary
            </Typography> 
            <Typography
                variant="body1"
                className={cabinBody.className}
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
