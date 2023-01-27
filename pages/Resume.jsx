import { AccountBalance, School } from "@mui/icons-material"
import { Typography, Box, List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material"
import { Fragment } from "react"

const Resume = () => {
    return (
        <Box
            id="page-section"
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                id="resume-page-section"
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
                    id="summary-section"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        width: '100%',
                        borderRadius: '15px',
                        backgroundColor: '#403d39',
                        mt: 1.5,
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
                        Summary
                    </Typography> 
                    <Typography
                        variant="body1"
                    >
                        Enthusiastic software engineer devoted to developing new
                        software technologies that will improve the function of your 
                        company. Loves to work hands-on with any given assignment. 
                        Comfortable working independently or in a team. Experience in 
                        frontend and backend web development, UX design, and database 
                        management systems like MySQL and Apache Cassandra.
                    </Typography>
                </Box>
                <Box
                    id="education-section"
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
                            my: 1,
                        }}
                    >
                        Education
                    </Typography> 
                    <Box
                        id="albioncollege-section"
                        sx={{
                            mt: 1,
                            mb: 1.5,
                        }}
                    >
                        <Box
                            id="title-subsection"
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <Avatar
                                sx={{
                                    color: '#403d39',
                                    backgroundColor: '#ccc5b9',
                                    mr: 2,
                                }}
                            >
                                <AccountBalance />
                            </Avatar>
                            <Box
                                id="collegeinfo-subsection" 
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
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
                                    Albion College | Albion, MI 
                                </Typography> 
                                <Typography
                                    varitant='body1'
                                    sx={{
                                        my: 0,
                                        py: 0,
                                    }}
                                >
                                    Bachelor of Arts in Computer Science
                                </Typography> 
                                <Typography
                                    varitant='body1'
                                    sx={{
                                        my: 0,
                                        py: 0,
                                    }}
                                >
                                    Minor: Applied Mathematics
                                </Typography> 
                                <Typography
                                    varitant='body2'
                                    sx={{
                                        my: 0,
                                        py: 0,
                                    }}
                                >
                                    Graduated May 2021
                                </Typography> 
                                <Typography
                                    varitant='body2'
                                    sx={{
                                        my: 0,
                                        py: 0,
                                        fontStyle: 'italic',
                                    }}
                                >
                                    GPA: 3.04 / 4.00
                                </Typography> 
                            </Box>
                        </Box> 
                    </Box>
                    <Box
                        id="animoralphbunche-section"
                    >
                        <Box
                            id="title-subsection"
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <Avatar
                                sx={{
                                    color: '#403d39',
                                    backgroundColor: '#ccc5b9',
                                    mr: 2,
                                }}
                            >
                                <School />
                            </Avatar>
                            <Box
                                id="HSinfo-subsection" 
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
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
                                    Animo Ralph Bunche High School | Los Angeles, CA 
                                </Typography> 
                                <Typography
                                    varitant='body1'
                                    sx={{
                                        my: 0,
                                        py: 0,
                                    }}
                                >
                                    High School Diploma
                                </Typography> 
                                <Typography
                                    varitant='body2'
                                    sx={{
                                        my: 0,
                                        py: 0,
                                    }}
                                >
                                    Graduated June 2016
                                </Typography> 
                            </Box>
                        </Box> 
                    </Box>
                </Box>
                <Box
                    id="volunteer-section"
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
                                >
                                    Assisted potential new members in the application process and 
                                    ensured they fulfilled all the required requisites.
                                </Typography>
                            </ListItem>                 
                        </List>
                    </Box>
                </Box>
                <Box
                    id="skills-section"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'left',
                        width: '100%',
                        borderRadius: '15px',
                        backgroundColor: '#403d39',
                        my: 1,
                        py: 2,
                        px: 3,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            /* textDecoration: 'underline', */
                            /* textDecorationThickness: '3px', */
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
            </Box>

        </Box>
    )
}

export default Resume
