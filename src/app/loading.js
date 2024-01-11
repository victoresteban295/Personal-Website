"use client"
import { Box, CircularProgress, } from "@mui/material";

const RootLoading = () => {

    return (
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'primary.main',
                }}
            >
                <CircularProgress sx={{ color: 'text.primary'}} />
            </Box>
    )
}

export default RootLoading;
