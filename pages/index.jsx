import React from 'react'
import { Typography, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material"
import {GitHub, Instagram, LinkedIn, Mail, PhoneIphone} from '@mui/icons-material'
import Image from 'next/image'
import ProfilePic from '../images/profilePic.jpeg'
import Link from "next/link"

const Home = () => {
    return (
        <Box
            id="page-section"
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                id = "home-page-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    maxWidth: '700px',
                    mx: 1,
                }}
            >
                <Box
                    id = "name-section"
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', sm: 'row'},
                        alignItems: 'center',
                        width: '100%',
                        borderRadius: '15px',
                        backgroundColor: '#403d39',
                        mt: 1.5,
                        py: 1,
                        px: 2,
                    }}
                >
                    <Image
                        src={ProfilePic}
                        alt="Victor's Profile Picture"
                        width={100}
                        height={100}
                        style={{borderRadius: '50px'}}
                    />
                    <Box
                        sx={{
                            m: {xs: 0, sm: 3},
                            textAlign: {xs: 'center', sm: 'left'}
                        }}
                    >
                        <Typography variant='h3'>
                            Victor Manuel Esteban
                        </Typography>
                        <Typography
                            variant='h6'
                            sx={{
                                color: '#eb5e28',
                            }}
                        >
                            Full Stack Developer 
                        </Typography>
                    </Box>
                </Box>

                <Box
                    id="aboutme-section"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        width: '100%',
                        borderRadius: '15px',
                        backgroundColor: '#403d39',
                        mt: 1,
                        py: 2,
                        px: 3,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            m: 0,
                            mb: 1,
                            p: 0,
                        }}
                    >
                        About Me
                    </Typography> 
                    <Typography
                        variant="body1"
                    >
                        I’m a 1st generation Mexican American 
                        born and raised in South Central Los Angeles. I attended 
                        Animo Ralph Bunche Charter High School and obtained my high 
                        school diploma in June 2016. After graduating from high school, 
                        I moved to Michigan to pursue my undergraduate studies at 
                        Albion College and became the first in my family to attend 
                        college. While at Albion, I became involved in many organizations 
                        and clubs, such as the Engineering Club, Organization 
                        for Latinx Awareness (OLA), and Tau Kappa Epsilon Fraternity. 
                        Through these organizations, I had the opportunity to organize 
                        and participate in many events that included fraternity recruitment, 
                        fundraisers for St. Jude, and Latinx cultural events. 
                        On top of that, I became the vice president of the Engineering Club 
                        and the director of recruitment for Tau Kappa Epsilon. 
                        In May 2021, I graduated from Albion College and obtained my 
                        Bachelor of Arts in Computer Science with a minor in 
                        Applied Mathematics. 
                    </Typography>
                </Box>
                
                <Box
                    id='contacts-section'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        alignSelf: 'flex-start',
                        width: '100%',
                        borderRadius: '15px',
                        backgroundColor: '#403d39',
                        mt: 1,
                        py: 2,
                        px: 2,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            /* textDecoration: 'underline', */
                            /* textDecorationThickness: '3px', */
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
                                        color: '#403d39',
                                        backgroundColor: '#ccc5b9',
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
                                        color: '#403d39',
                                        backgroundColor: '#ccc5b9'
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
                <Box
                    id='socials-section'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        alignSelf: 'flex-start',
                        width: '100%',
                        borderRadius: '15px',
                        backgroundColor: '#403d39',
                        mt: 1,
                        py: 2,
                        px: 2,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            /* textDecoration: 'underline', */
                            /* textDecorationThickness: '3px', */
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
                                        color: '#403d39',
                                        backgroundColor: '#ccc5b9',
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
                                        color: '#403d39',
                                        backgroundColor: '#ccc5b9'
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
                                        color: '#403d39',
                                        backgroundColor: '#ccc5b9'
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
            </Box>
        </Box>
    )
}

export default Home
