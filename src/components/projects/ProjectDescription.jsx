import { Box, Typography } from "@mui/material";

const ProjectDescription = ({ description }) => {
    return (
        <Box
            sx={{
                m: 0, 
            }}
        >
            <Typography
                variant='body1'
                sx={{
                    fontWeight: 'bold',
                }}
            >
                {description}
            </Typography>
        </Box>  
    )
}

export default ProjectDescription;
