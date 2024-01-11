import { AccountBalance, School } from "@mui/icons-material"
import { Typography, Box, Avatar } from "@mui/material"

const Education = () => {
    return (
        <Box
            id="education-section"
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
                        m: 0,
                        mb: 1,
                        p: 0,
                        borderBottom: '4px solid',
                        fontWeight: 'bold',
                    }}
                >
                    Education
                </Typography> 
            </Box>
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
                            color: 'iconColor.icon',
                            backgroundColor: 'iconColor.background',
                            borderRadius: '50px',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderColor: 'iconColor.icon',
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
                            color: 'iconColor.icon',
                            backgroundColor: 'iconColor.background',
                            borderRadius: '50px',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderColor: 'iconColor.icon',
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
    )
}

export default Education
