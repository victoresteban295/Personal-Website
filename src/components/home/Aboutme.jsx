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
                width: '100%',
                py: 2,
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
            <Stack
                spacing={1}
                sx={{
                    pl: 2,
                }}
            >
                <Stack
                    direction='row'
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: '700',
                            fontFamily: teko.style.fontFamily,
                            p: 0,
                        }}
                    >
                        1998
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '400',
                            p: 0,
                        }}
                    >
                        Born Los Angeles, CA
                    </Typography>
                </Stack>
                <Stack
                    direction='row'
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: '700',
                            fontFamily: teko.style.fontFamily,
                        }}
                    >
                        2016
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '400',
                        }}
                    >
                        Earn High School Diploma from Animo Ralph Bunche HS 
                    </Typography>
                </Stack>
                <Stack
                    direction='row'
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: '700',
                            fontFamily: teko.style.fontFamily,
                        }}
                    >
                        2021
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: '400',
                        }}
                    >
                        Earn Bachelor of Art in Computer Science with a Minor in Applied Mathematics from Albion College
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Aboutme;
