import { Box, Stack, Typography } from "@mui/material";

const Name = () => {
    return (
        <Stack
            spacing={0}
            sx={{
                textAlign: {xs: 'center', sm: 'left'},
                color: 'text.primary',
            }}
        >
            <Typography
                variant='h3' 
            >
                Victor Manuel Esteban
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: {xs: 'center', sm: 'flex-start'}
                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        fontWeight: 'bold',
                        color: '#eb5e28',
                        borderBottom: '4px solid',
                        borderColor: 'text.primary',
                    }}
                >
                    Full Stack Developer 
                </Typography>
            </Box>
        </Stack>
    )
}

export default Name;
