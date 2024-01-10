import { Box, Stack, Typography } from "@mui/material";
import ProjectStackItem from "./ProjectStackItem";
import { Teko } from "next/font/google"

const teko = Teko({
    weight: '700',
    subsets: ['latin'],
})

const ProjectStack = ({ stack }) => {
    return (
        <Box
            id='stack-section'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                alignSelf: 'flex-start',
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
                        fontFamily: teko.style.fontFamily,
                        borderBottom: '4px solid',
                        m: 0,
                        mb: 1,
                        p: 0,
                    }}
                >
                    Development Stack
                </Typography> 
            </Box>
            <Stack
                spacing={1}
                sx={{
                    mt: 1,
                }}
            >
                {stack.map(stackItem => {
                    const { resource, info } = stackItem;
                    return (
                        <ProjectStackItem 
                            key={resource}
                            resource={resource}
                            info={info}
                        />
                    )
                })}
            </Stack>
        </Box>
    )
}

export default ProjectStack;
