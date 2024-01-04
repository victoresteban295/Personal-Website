import { Typography, Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Tooltip } from "@mui/material"
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
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
            <List
                sx={{
                    m: 0,
                    p: 0,
                }}
            >
                <ListItem>
                    <Link
                        href='https://www.linkedin.com/in/victor-esteban295'
                        style={{textDecoration: 'none'}}
                    >
                        <ListItemAvatar>
                            <Tooltip
                                title="LinkedIn"
                                followCursor
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
                        </ListItemAvatar>
                    </Link>
                    <ListItemText 
                        primary= {
                            <Typography
                                variant='h6'
                            >
                                @victor-esteban295
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem>
                    <Link
                        href='https://www.github.com/victoresteban295'
                        style={{textDecoration: 'none'}}
                    >
                        <ListItemAvatar>
                            <Tooltip
                                title="GitHub"
                                followCursor
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
                        </ListItemAvatar>
                    </Link>
                    <ListItemText 
                        primary= {
                            <Typography
                                variant='h6'
                            >
                               @victoresteban295
                            </Typography>
                        }
                    />
                </ListItem>
                <ListItem>
                    <Link
                        href='https://www.instagram.com'
                        style={{textDecoration: 'none'}}
                    >
                        <ListItemAvatar>
                            <Tooltip
                                title="Instagram"
                                followCursor
                            >
                                <Avatar
                                    sx={{
                                        color: 'iconColor.icon',
                                        backgroundColor: 'iconColor.background',
                                    }}
                                >
                                    <Instagram />
                                </Avatar>
                            </Tooltip>
                        </ListItemAvatar>
                    </Link>
                    <ListItemText 
                        primary= {
                            <Typography
                                variant='h6'
                            >
                               @victor_m.esteban
                            </Typography>
                        }
                    />
                </ListItem>
            </List>
        </Box>
    )
}

export default Social
