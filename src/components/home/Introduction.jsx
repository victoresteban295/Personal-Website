import { Typography, Box } from "@mui/material"
import { Teko } from "next/font/google"

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
})

const Introduction = () => {
    return (
        <Box
            id = "name-section"
            sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                alignItems: 'center',
                width: '100%',
                py: 1,
                px: 3,
                color: 'text.primary',
                borderRadius: '15px',
                backgroundColor: 'secondary.main',
                boxShadow: '1px 1px 10px #000',
            }}
        >
            <Box
                sx={{
                    textAlign: {xs: 'center', sm: 'left'},
                }}
            >
                <Typography 
                    variant='h3' 
                    sx={{
                        fontFamily: teko.style.fontFamily
                    }}
                >
                    Victor Manuel Esteban
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        color: '#eb5e28',
                        fontFamily: teko.style.fontFamily
                    }}
                >
                    Full Stack Developer 
                </Typography>
            </Box>
        </Box>
    )
}

export default Introduction
