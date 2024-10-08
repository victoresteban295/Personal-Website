import { Typography, Box, Stack, Button, Grid } from "@mui/material"
import Image from "next/image";
import { Devices, GitHub } from "@mui/icons-material";
import Link from "next/link";


const ProjectWidget = ({ thumbnail, title, info, imgAlt, github, website }) => {
    const hasWebsite = (website != '');
    return (
        <Grid
            item
            sx={{
                display: 'flex',
                alignItems: 'stretch',
            }}
        >
            <Stack
                id = "project-widget"
                spacing={1}
                alignItems='center'
                justifyContent='space-between'
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
                <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='flex-end'
                    spacing={2}
                    sx={{
                        height: '100%',
                    }}
                >
                    {hasWebsite && (
                        <Link
                            href={website}
                            rel='noopener noreferrer'
                            target='_blank'
                            style={{textDecoration: 'none'}}
                        >
                            <Button
                                startIcon={<Devices />}
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
                                    Website
                                </Typography>
                            </Button>
                        </Link>
                    )}
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
                </Stack>
            </Stack>
        </Grid>
    )
}

export default ProjectWidget;
