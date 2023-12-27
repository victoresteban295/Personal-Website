import { Typography, Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Tooltip } from "@mui/material"
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { Cabin } from '@next/font/google'
import Link from 'next/link'

const cabin = Cabin({
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
                py: 2,
                px: 2,
            }}
        >
            <Typography
                variant="h5"
                className={cabin.className}
                sx={{
                    m: 0,
                    p: 0,
                }}
            >
                Socials
            </Typography> 
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
                                className={cabin.className}
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
                                className={cabin.className}
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
                                className={cabin.className}
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
