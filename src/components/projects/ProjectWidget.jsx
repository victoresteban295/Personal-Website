import { Typography, Box, Stack } from "@mui/material"
import Image from "next/image";
import { Teko } from "next/font/google"
import Link from "next/link";

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
})

const ProjectWidget = ({ route, thumbnail, title, info, imgAlt }) => {
    return (
        <Link
            href={`/projects/${route}`}
            style={{textDecoration: 'none'}}
        >
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
                    sx={{
                        py: 0.5,
                        px: 2,
                        maxWidth: '350px',
                    }} 
                >
                    <Typography
                        variant='h6' 
                        align='center'
                        sx={{
                            fontFamily: teko.style.fontFamily,
                            color: 'text.primary',
                        }}
                    >
                        {title}
                    </Typography>
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
            </Stack>
        </Link>
    )
}

export default ProjectWidget;
