import { Typography, Box, List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material"
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'

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
                borderRadius: '15px',
                backgroundColor: 'primary.main',
                boxShadow: '1px 1px 10px #000',
                my: 2,
                py: 2,
                px: 2,
            }}
        >
            <Typography
                variant="h5"
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
                    <ListItemAvatar>
                        <Avatar
                            sx={{
                                color: 'iconColor.icon',
                                backgroundColor: 'iconColor.background',
                            }}
                        >
                            <LinkedIn />
                        </Avatar>
                    </ListItemAvatar>
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
                    <ListItemAvatar>
                        <Avatar
                            sx={{
                                color: 'iconColor.icon',
                                backgroundColor: 'iconColor.background'
                            }}
                        >
                            <GitHub />
                        </Avatar>
                    </ListItemAvatar>
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
                    <ListItemAvatar>
                        <Avatar
                            sx={{
                                color: 'iconColor.icon',
                                backgroundColor: 'iconColor.background'
                            }}
                        >
                            <Instagram />
                        </Avatar>
                    </ListItemAvatar>
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
