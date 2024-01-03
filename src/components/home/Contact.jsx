import { Typography, Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Tooltip} from "@mui/material"
import { Mail, PhoneIphone } from '@mui/icons-material'
import { Teko } from "next/font/google"

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
})

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
                    Contact
                </Typography> 
            </Box>
            <List
                sx={{
                    m: 0,
                    p: 0,
                }}
            >
                <ListItem>
                    <ListItemAvatar>
                        <Tooltip
                            title="Cellphone"
                            followCursor
                        >
                            <Avatar
                                sx={{
                                    color: 'iconColor.icon',
                                    backgroundColor: 'iconColor.background',
                                }}
                            >
                                <PhoneIphone />
                            </Avatar>
                        </Tooltip>
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
                        <Tooltip
                            title="Email"
                            followCursor
                        >
                            <Avatar
                                sx={{
                                    color: 'iconColor.icon',
                                    backgroundColor: 'iconColor.background'
                                }}
                            >
                                <Mail />
                            </Avatar>
                        </Tooltip>
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
