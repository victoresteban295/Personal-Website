import { Typography, Box, List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material"
import { Mail, PhoneIphone } from '@mui/icons-material'

const Contact = () => {
    return (
        <Box
            id='contacts-section'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                alignSelf: 'flex-start',
                width: '100%',
                borderRadius: '15px',
                backgroundColor: 'secondary.main',
                boxShadow: '1px 1px 10px #000',
                mt: 2,
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
                Contact
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
                            <PhoneIphone />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                        primary= {
                            <Typography
                                variant='h6'
                            >
                               (562) 396-9876 
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
                            <Mail />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText 
                        primary= {
                            <Typography
                                variant='h6'
                            >
                               victoresteban 295@gmail.com
                            </Typography>
                        }
                    />
                </ListItem>
            </List>
        </Box>
    )
}

export default Contact
