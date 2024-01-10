import { Devices, GitHub } from "@mui/icons-material";
import { Avatar, Stack, Tooltip, Typography } from "@mui/material";
import Link from 'next/link'

const ProjectWeb = ({ website, github }) => {
    const hasWebsite = (website != '');
    const hasGithub = (github != '');
    return (
        <Stack
            spacing={2}
            sx={{
                py: 2,
            }}
        >
                {hasWebsite && (
                    <Link
                        href={website}
                        rel='noopener noreferrer'
                        target='_blank'
                        style={{textDecoration: 'none'}}
                    >
                        <Stack
                            direction='row'
                            spacing={2}
                        >
                            <Tooltip
                                arrow
                                placement="right"
                                title="Website"
                            >
                                <Avatar
                                    sx={{
                                        color: 'iconColor.icon',
                                        backgroundColor: 'iconColor.background',
                                    }}
                                >
                                    <Devices />
                                </Avatar>
                            </Tooltip>
                            <Typography
                                variant='h6'
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: '700',
                                }}
                            >
                                Website
                            </Typography>
                        </Stack>
                    </Link>
                )}
                {hasGithub && (
                    <Link
                        href={github}
                        rel='noopener noreferrer'
                        target='_blank'
                        style={{textDecoration: 'none'}}
                    >
                        <Stack
                            direction='row'
                            spacing={2}
                        >
                            <Tooltip
                                arrow
                                placement="right"
                                title="Github"
                            >
                                <Avatar
                                    sx={{
                                        color: 'iconColor.icon',
                                        backgroundColor: 'iconColor.background',
                                    }}
                                >
                                    <GitHub />
                                </Avatar>
                            </Tooltip>
                            <Typography
                                variant='h6'
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: '700',
                                }}
                            >
                                GitHub
                            </Typography>
                        </Stack>
                    </Link>
                )}
        </Stack>
    )
}

export default ProjectWeb;
