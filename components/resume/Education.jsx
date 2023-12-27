import { AccountBalance, School } from "@mui/icons-material"
import { Typography, Box, Avatar } from "@mui/material"
import { Cabin, Inter } from '@next/font/google'

const cabin = Cabin({
    weight: '700',
    subsets: ['latin'],
})

const cabinBody = Cabin({
    weight: '400',
    subsets: ['latin'],
})

const Education = () => {
    return (
        <Box
            id="education-section"
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
                            color: 'iconColor.icon',
                            backgroundColor: 'iconColor.background',
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
                            className={cabin.className}
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
                            className={cabinBody.className}
                            sx={{
                                my: 0,
                                py: 0,
                            }}
                        >
                            Bachelor of Arts in Computer Science
                        </Typography> 
                        <Typography
                            varitant='body1'
                            className={cabinBody.className}
                            sx={{
                                my: 0,
                                py: 0,
                            }}
                        >
                            Minor: Applied Mathematics
                        </Typography> 
                        <Typography
                            varitant='body2'
                            className={cabinBody.className}
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
                            className={cabin.className}
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
                            className={cabinBody.className}
                            sx={{
                                my: 0,
                                py: 0,
                            }}
                        >
                            High School Diploma
                        </Typography> 
                        <Typography
                            varitant='body2'
                            className={cabinBody.className}
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
