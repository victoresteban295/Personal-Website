import { Typography, Box } from "@mui/material"
import { Cabin } from '@next/font/google'

const cabin = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const Comingsoon = () => {
    return (
        <Box
            id="comingsoon-section"
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
                variant="h4"
                className={cabin.className}
                sx={{
                    textAlign: 'center'
                }}
            >
                Projects Coming Soon! .....
            </Typography> 
        </Box> 
    )
}

export default Comingsoon
