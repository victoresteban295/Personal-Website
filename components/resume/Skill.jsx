import { Typography, Box, List, ListItem } from "@mui/material"

const Skill = () => {
    return (
        <Box
            id="skills-section"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                width: '100%',
                borderRadius: '15px',
                backgroundColor: 'primary.main',
                boxShadow: '1px 1px 10px #000',
                my: 2,
                py: 2,
                px: 3,
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    my: 1,
                }}
            >
                Skills
            </Typography> 
            <Box
                id="programming-subsection"
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
                    Programming
                </Typography> 
                <Box
                    id="skill-list-section"
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', sm: 'row'},
                        justifyContent: {xs: 'flex-start', sm: 'space-between'},
                    }}
                >
                    <Box
                        id="skill-list-subset01"
                    >
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
                                <Typography variant='body1'>
                                    Java
                                </Typography>
                            </ListItem>                 
                            <ListItem
                                sx={{
                                    display: 'list-item',
                                    p: 0,
                                }}
                            >
                                <Typography variant='body1'>
                                    Javascript
                                </Typography>
                            </ListItem>                 
                            <ListItem
                                sx={{
                                    display: 'list-item',
                                    p: 0,
                                }}
                            >
                                <Typography variant='body1'>
                                    CSS & HTML
                                </Typography>
                            </ListItem>                 
                            <ListItem
                                sx={{
                                    display: 'list-item',
                                    p: 0,
                                }}
                            >
                                <Typography variant='body1'>
                                    React
                                </Typography>
                            </ListItem>                 
                        </List>
                    </Box>
                    <Box
                        id="skill-list-subset02"
                    >
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
                                <Typography variant='body1'>
                                    NextJS
                                </Typography>
                            </ListItem>                 
                            <ListItem
                                sx={{
                                    display: 'list-item',
                                    p: 0,
                                }}
                            >
                                <Typography variant='body1'>
                                    Spring
                                </Typography>
                            </ListItem>                 
                            <ListItem
                                sx={{
                                    display: 'list-item',
                                    p: 0,
                                }}
                            >
                                <Typography variant='body1'>
                                    Spring Boot
                                </Typography>
                            </ListItem>                 
                            <ListItem
                                sx={{
                                    display: 'list-item',
                                    p: 0,
                                }}
                            >
                                <Typography variant='body1'>
                                    Spring Data
                                </Typography>
                            </ListItem>                 
                        </List>
                    </Box>
                    <Box
                        id="skill-list-subset03"
                    >
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
                                <Typography variant='body1'>
                                    Spring Security
                                </Typography>
                            </ListItem>                 
                            <ListItem
                                sx={{
                                    display: 'list-item',
                                    p: 0,
                                }}
                            >
                                <Typography variant='body1'>
                                    Apache Cassandra
                                </Typography>
                            </ListItem>                 
                        </List>
                    </Box>
                </Box>
            </Box>
            <Box
                id="other-subsection"
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
                    Other
                </Typography> 
                <Box
                    id="other-list-section"
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'column', sm: 'row'},
                        justifyContent: 'flex-start',
                    }}
                >
                    <Box
                        id="other-list-subset03"
                    >
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
                                <Typography variant='body1'>
                                    Bilingual - Fluent in Spanish & English
                                </Typography>
                            </ListItem>                 
                        </List>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Skill