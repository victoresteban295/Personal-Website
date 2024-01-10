import { Stack, Typography } from "@mui/material";

const ProjectStackItem = ({ resource, info }) => {
    return (
        <Stack
            spacing={0}
        >
            <Typography 
                variant='h6' 
                sx={{
                    fontWeight: '700'
                }}
            >
                {resource}
            </Typography>
            <Typography 
                variant='body1' 
            >
                {info}
            </Typography>
        </Stack>
    )
}

export default ProjectStackItem;
