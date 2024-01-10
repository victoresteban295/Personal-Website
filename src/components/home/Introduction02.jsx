import { GitHub, LinkedIn } from "@mui/icons-material";
import { Typography, Box, Stack, Tooltip, Avatar } from "@mui/material"
import Link from "next/link";

const Introduction02 = () => {
    return (
        <Stack
            spacing={2}
            sx={{
                textAlign: {xs: 'center', sm: 'left'},
                color: 'text.primary',
                maxWidth: '700px',
            }}
        >
            <Stack
                spacing={0}
                sx={{
                    textAlign: {xs: 'center', sm: 'left'},
                    color: 'text.primary',
                }}
            >
                <Typography 
                    variant='h3' 
                >
                    Victor Manuel Esteban
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: {xs: 'center', sm: 'flex-start'}
                    }}
                >
                    <Typography
                        variant='h6'
                        sx={{
                            fontWeight: 'bold',
                            color: '#eb5e28',
                            borderBottom: '4px solid',
                            borderColor: 'text.primary',
                        }}
                    >
                        Full Stack Developer 
                    </Typography>
                </Box>
            </Stack>
            <Typography
                variant="body1"
                sx={{
                    fontWeight: 'bold',
                }}
            >
                A full-stack developer based in Los Angeles passionate about learning new methods and technologies. He loves to challenge himself by developing applications that solve real-world problems. When not programming, he enjoys cycling around the city and traveling to new places.
            </Typography>
            <Stack
                direction='row'
                spacing={2}
                justifyContent={{xs: 'center', sm: 'flex-start'}} 
            >
                <Link
                    href='https://www.linkedin.com/in/victor-esteban295'
                    rel='noopener noreferrer'
                    target='_blank'
                    style={{textDecoration: 'none'}}
                >
                    <Tooltip
                        arrow
                        placement="bottom"
                        title="LinkedIn"
                    >
                        <Avatar
                            sx={{
                                color: 'iconColor.icon',
                                backgroundColor: 'iconColor.background',
                                borderRadius: '50px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'iconColor.icon',
                            }}
                        >
                            <LinkedIn />
                        </Avatar>
                    </Tooltip>
                </Link>
                <Link
                    href='https://www.github.com/victoresteban295'
                    rel='noopener noreferrer'
                    target='_blank'
                    style={{textDecoration: 'none'}}
                >
                    <Tooltip
                        arrow
                        placement="bottom"
                        title="GitHub"
                    >
                        <Avatar
                            sx={{
                                color: 'iconColor.icon',
                                backgroundColor: 'iconColor.background',
                                borderRadius: '50px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'iconColor.icon',
                            }}
                        >
                            <GitHub />
                        </Avatar>
                    </Tooltip>
                </Link>
            </Stack>
        </Stack>
    )
}

export default Introduction02;
