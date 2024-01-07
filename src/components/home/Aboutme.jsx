import { Typography, Stack, Box } from "@mui/material"
import { Teko } from "next/font/google"

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
})

const Aboutme = () => {
    return (
        <Stack
            id="aboutme-section"
            spacing={0}
            sx={{
                color: 'text.primary',
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
                        borderBottom: '4px solid',
                        m: 0,
                        mb: 1,
                        p: 0,
                    }}
                >
                    About Me
                </Typography> 
            </Box>
            <Typography
                variant="body1"
                sx={{
                    fontWeight: 'bold',
                }}
            >
                Victor is a full-stack developer based in Los Angeles passionate about learning new methods and technologies. He loves to challenge himself by developing applications that solve real-world problems. When not programming, he enjoys cycling around the city and traveling to new places.
            </Typography>
        </Stack>
    )
}

export default Aboutme;
