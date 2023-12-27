import { Typography, Box } from "@mui/material"
import {Cabin} from '@next/font/google'

const cabin = Cabin({
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
                px: 2,
            }}
        >
            <Box
                sx={{
                    m: {xs: 0, sm: 3},
                    textAlign: {xs: 'center', sm: 'left'}
                }}
            >
                <Typography variant='h3' className={cabin.className}>
                    Victor Manuel Esteban
                </Typography>
                <Typography
                    variant='h6'
                    sx={{
                        color: '#eb5e28',
                    }}
                    className={cabin.className}
                >
                    Full Stack Developer 
                </Typography>
            </Box>
        </Box>
    )
}

export default Introduction
