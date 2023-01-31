import { Typography, Box } from "@mui/material"

const Summary = () => {
    return (
        <Box
            id="summary-section"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                width: '100%',
                borderRadius: '15px',
                backgroundColor: 'secondary.main',
                boxShadow: '1px 1px 10px #000',
                mt: 2,
                py: 2,
                px: 3,
            }}
        >
            <Typography
                variant="h5"
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
