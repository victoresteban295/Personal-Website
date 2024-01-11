import { Typography, Box, List, ListItem } from "@mui/material"

const Volunteer = () => {
    return (
        <Box
            id="volunteer-section"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
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
                        borderBottom: '4px solid',
                        fontWeight: 'bold',
                        my: 1,
                    }}
                >
                    Volunteer Experience
                </Typography> 
            </Box>
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
                        >
                            {"Chaperone prospective students, making sure they're on schedule for their events."}
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
                        >
                            {"Responsible for providing them a glimpse into everyday life as an Albion College Student."}
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
                        >
                            Recommend students the appropriate resources needed to succeed 
                            at Albion.
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
                        >
                            {"Monitored student projects to ensure the lab's equipment was respected."}
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
                        >
                            {"Worked closely with the club’s president and treasury to process and approve student's requests for item purchases."}
                        </Typography>
                    </ListItem>                 
                </List>
            </Box>
        </Box>
    )
}

export default Volunteer
