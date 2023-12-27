import { Typography, Box, List, ListItem } from "@mui/material"
import { Cabin, Inter } from '@next/font/google'

const cabin = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabinBody = Cabin({
    weight: '400',
    subsets: ['latin'],
})


const Volunteer = () => {
    return (
        <Box
            id="volunteer-section"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                width: '100%',
                py: 2,
                px: 3,
            }}
        >
            <Typography
                variant="h5"
                className={cabin.className}
                sx={{
                    my: 1,
                }}
            >
                Volunteer Experience
            </Typography> 
            <Box
                id="volunteer01-subsection"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 1,
                }}
            >
                <Typography
                    varitant='h5'
                    className={cabin.className}
                    sx={{
                        fontWeight: 'bold',
                        my: 0,
                        py: 0,
                    }}
                >
                    Overnight Host | Albion College Admission 
                </Typography> 
                <Typography
                    varitant='body1'
                    className={cabin.className}
                    sx={{
                        my: 0,
                        py: 0,
                    }}
                >
                    Jan 2017 - Mar 2018
                </Typography> 
                <List
                    sx={{
                        listStyleType: 'disc',
                        my: 0,
                        pl: 4,
                    }}
                >
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                            className={cabinBody.className}
                        >
                            Volunteered to host a prospective student in our dormitory
                            for a night or two.
                        </Typography>
                    </ListItem>                 
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                            className={cabinBody.className}
                        >
                            Accommodated students by creating a welcoming environment on 
                            campus.
                        </Typography>
                    </ListItem>                 
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                            className={cabinBody.className}
                        >
                            Guided the student around campus and ensured they were on time for their
                            morning events.
                        </Typography>
                    </ListItem>                 
                </List>
            </Box>
            <Box
                id="volunteer02-subsection"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 1,
                }}
            >
                <Typography
                    varitant='h5'
                    className={cabin.className}
                    sx={{
                        fontWeight: 'bold',
                        my: 0,
                        py: 0,
                    }}
                >
                    Ambassador | Albion College Admission 
                </Typography> 
                <Typography
                    varitant='body1'
                    className={cabin.className}
                    sx={{
                        my: 0,
                        py: 0,
                    }}
                >
                    Jan 2017 - Mar 2018
                </Typography> 
                <List
                    sx={{
                        listStyleType: 'disc',
                        my: 0,
                        pl: 4,
                    }}
                >
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                            className={cabinBody.className}
                        >
                            Chaperone prospective students, making sure they're on schedule 
                            for their events.
                        </Typography>
                    </ListItem>                 
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                            className={cabinBody.className}
                        >
                            Responsible for providing them a glimpse into everyday life as
                            an Albion College Student.
                        </Typography>
                    </ListItem>                 
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                            className={cabinBody.className}
                        >
                            Recommended students the appropriate resources needed to succeed 
                            at Albion.
                        </Typography>
                    </ListItem>                 
                </List>
            </Box>
            <Box
                id="volunteer03-subsection"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 1,
                }}
            >
                <Typography
                    varitant='h5'
                    className={cabin.className}
                    sx={{
                        fontWeight: 'bold',
                        my: 0,
                        py: 0,
                    }}
                >
                    Vice President | Engineering Club At Albion College 
                </Typography> 
                <Typography
                    varitant='body1'
                    className={cabin.className}
                    sx={{
                        my: 0,
                        py: 0,
                    }}
                >
                    Jan 2020 - May 2020
                </Typography> 
                <List
                    sx={{
                        listStyleType: 'disc',
                        my: 0,
                        pl: 4,
                    }}
                >
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                            className={cabinBody.className}
                        >
                            Monitored student's projects to ensure that the lab and its equipment
                            were respected.
                        </Typography>
                    </ListItem>                 
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                            className={cabinBody.className}
                        >
                            Worked closely with the club's president and treasury to process student
                            request for item purchases.
                        </Typography>
                    </ListItem>                 
                </List>
            </Box>
            <Box
                id="volunteer04-subsection"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 1,
                }}
            >
                <Typography
                    varitant='h5'
                    className={cabin.className}
                    sx={{
                        fontWeight: 'bold',
                        my: 0,
                        py: 0,
                    }}
                >
                    Director of Recuritment | Tau Kappa Epsilon - Omega Chapter 
                </Typography> 
                <Typography
                    varitant='body1'
                    className={cabin.className}
                    sx={{
                        my: 0,
                        py: 0,
                    }}
                >
                    Jan 2020 - Dec 2020
                </Typography> 
                <List
                    sx={{
                        listStyleType: 'disc',
                        my: 0,
                        pl: 4,
                    }}
                >
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                            className={cabinBody.className}
                        >
                            Organized, advertised, and hosted recritment events around campus.
                        </Typography>
                    </ListItem>                 
                    <ListItem
                        sx={{
                            display: 'list-item',
                            p: 0,
                        }}
                    >
                        <Typography
                            variant='body1'
                            className={cabinBody.className}
                        >
                            Assisted potential new members in the application process and 
                            ensured they fulfilled all the required requisites.
                        </Typography>
                    </ListItem>                 
                </List>
            </Box>
        </Box>
    )
}

export default Volunteer
