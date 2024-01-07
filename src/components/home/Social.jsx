import { Typography, Box, Avatar, Tooltip, Stack } from "@mui/material"
import { GitHub, LinkedIn } from '@mui/icons-material'
import Link from 'next/link'
import { Teko } from "next/font/google"

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
})

const Social = () => {
    return (
        <Box
            id='socials-section'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                alignSelf: 'flex-start',
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
                    Socials
                </Typography> 
            </Box>
            <Stack
                spacing={2}
                sx={{
                    mt: 1,
                }}
            >
                <Link
                    href='https://www.linkedin.com/in/victor-esteban295'
                    rel='noopener noreferrer'
                    target='_blank'
                    style={{textDecoration: 'none'}}
                >
                    <Stack
                        direction='row'
                        spacing={2}
                    >
                        <Tooltip
                            arrow
                            placement="right"
                            title="LinkedIn"
                        >
                            <Avatar
                                sx={{
                                    color: 'iconColor.icon',
                                    backgroundColor: 'iconColor.background',
                                }}
                            >
                                <LinkedIn />
                            </Avatar>
                        </Tooltip>
                        <Typography
                            variant='h6'
                            sx={{
                                color: 'text.primary',
                                fontWeight: '700',
                            }}
                        >
                            @victor-esteban295
                        </Typography>
                    </Stack>
                </Link>
                <Link
                    href='https://www.github.com/victoresteban295'
                    rel='noopener noreferrer'
                    target='_blank'
                    style={{textDecoration: 'none'}}
                >
                    <Stack
                        direction='row'
                        spacing={2}
                    >
                        <Tooltip
                            arrow
                            placement="right"
                            title="GitHub"
                        >
                            <Avatar
                                sx={{
                                    color: 'iconColor.icon',
                                    backgroundColor: 'iconColor.background',
                                }}
                            >
                                <GitHub />
                            </Avatar>
                        </Tooltip>
                        <Typography
                            variant='h6'
                            sx={{
                                color: 'text.primary',
                                fontWeight: '700',
                            }}
                        >
                           @victoresteban295
                        </Typography>
                    </Stack>
                </Link>
            </Stack>
        </Box>
    )
}

export default Social
