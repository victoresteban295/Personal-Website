const { Box, CircularProgress } = require("@mui/material")

const RootLoading = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress color='inherit' />
        </Box>
    )
}

export default RootLoading;
