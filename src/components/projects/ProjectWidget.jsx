import { Typography, Box, Stack } from "@mui/material"
import Image from "next/image";
import { Teko } from "next/font/google"

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
})

const ProjectWidget = ({ imgPath, title, info, githubLink }) => {
    return (
        <Box
            id = "project-widget"
            sx={{
                display: 'flex',
                display: {xs: 'grid', sm: 'flex'},
                p: 0,
                borderRadius: '15px',
                backgroundColor: 'secondary.main',
                boxShadow: '1px 1px 10px #000',
                color: 'text.primary',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    maxWidth: '288px',
                    maxHeight: '163px',
                    overflow: 'clip',
                    borderRadius: '15px',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    borderColor: '#403d39',
                }}
            >
                <Image 
                    src={imgPath}
                    alt="Academic Dashboard Checklist Page" 
                    fill={true}
                />
            </Box>
            <Stack
                sx={{
                    py: 0.5,
                    px: 2,
                    maxWidth: '412px',
                }} 
            >
                <Typography
                    variant='h6' 
                    sx={{
                        fontFamily: teko.style.fontFamily
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant='body1'
                >
                    {info}
                </Typography>
            </Stack>
        </Box>
    )
}

export default ProjectWidget;
