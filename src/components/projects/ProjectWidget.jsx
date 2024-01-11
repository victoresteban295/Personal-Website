import { Typography, Box, Stack, Button } from "@mui/material"
import Image from "next/image";
import { GitHub } from "@mui/icons-material";
import Link from "next/link";


const ProjectWidget = ({ thumbnail, title, info, imgAlt, github }) => {
    return (
        <Stack
            id = "project-widget"
            spacing={1}
            alignItems='center'
            sx={{
                p: 1,
                m: 0,
                width: '100%',
            }}
        >
            <Box
                sx={{
                    maxWidth: '360px',
                    maxHeight: '204px',
                }}
            >
                <Image 
                    src={thumbnail}
                    alt={imgAlt} 
                    width={360}
                    height={204}
                    style={{
                        maxWidth: '100%',
                        borderRadius: '15px',
                        borderStyle: 'solid',
                        borderWidth: '2px',
                        borderColor: '#252422',
                    }}
                />
            </Box>
            <Stack
                spacing={1} 
                sx={{
                    py: 0.5,
                    px: 2,
                    maxWidth: '350px',
                }} 
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant='h6' 
                        align='center'
                        sx={{
                            fontWeight: 'bold',
                            color: 'text.primary',
                            borderBottom: '4px solid',
                            borderColor: 'text.primary',
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Typography
                    variant='body1'
                    align='center'
                    sx={{
                        fontWeight: 'bold',
                        color: 'text.primary',
                    }}
                >
                    {info}
                </Typography>
            </Stack>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    height: '100%',
                }}
            >
                <Link
                    href={github}
                    rel='noopener noreferrer'
                    target='_blank'
                    style={{textDecoration: 'none'}}
                >
                    <Button
                        startIcon={<GitHub />}
                        variant='text'
                        sx={{
                            px: 2,
                            py: 1,
                            color: 'iconColor.icon',
                            backgroundColor: 'iconColor.background',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderColor: 'iconColor.icon',
                        }}
                    >
                        <Typography
                            variant='body1'
                            sx={{
                                fontWeight: 'bold',
                            }}
                        >
                            GitHub
                        </Typography>
                    </Button>
                </Link>
            </Box>
        </Stack>
    )
}

export default ProjectWidget;
