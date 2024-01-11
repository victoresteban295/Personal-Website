import Link from 'next/link'
import { ArrowBack, ErrorOutline } from "@mui/icons-material"
import { Box, Typography, Button, Stack } from "@mui/material"

const NotFound = () => {
    return (
        <html>
            <body>
                <Box
                    id="page-section"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        bgcolor: 'primary.main',
                        height: '100vh',
                        pt: 30,
                        pt: {xs: 10, sm: 10, md: 30},
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: '700px',
                        }}
                    >
                        <Stack
                            spacing={2}
                            alignItems={'center'}
                            sx={{
                                maxWidth: '700px',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: 'iconColor.icon',
                                borderRadius: '15px',
                                mx: 5,
                                p: 5,
                            }}
                        >
                            <Box
                                sx={{
                                    weight: '100px',
                                    height: '100px',
                                }}
                            >
                                <ErrorOutline 
                                    fontSize="large" 
                                    sx={{
                                        color: 'text.primary',
                                        width: '100%', 
                                        height: '100%'
                                    }} 
                                />
                            </Box>
                            <Typography
                                variant="h4"
                                align="center"
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'text.primary',
                                }}
                            >
                                404 - Page Not Found
                            </Typography> 
                            <Typography
                                variant="body1"
                                align="center"
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'text.primary',
                                }}
                            >
                                The page you are looking for does not exist
                            </Typography>
                            <Link href='/' style={{textDecoration: 'none'}}>
                                <Button 
                                    startIcon={<ArrowBack />}
                                    sx = {{
                                        color: 'iconColor.icon',
                                        backgroundColor: 'iconColor.background',
                                        borderStyle: 'solid',
                                        borderWidth: '2px',
                                        borderColor: 'iconColor.icon',
                                        fontWeight: 'bold',
                                        "&:hover": {
                                            backgroundColor: 'iconColor.hover'
                                        }
                                    }}
                                >
                                    Go Back
                                </Button>
                            </Link>
                        </Stack>
                    </Box>
                </Box>
            </body>
        </html>
    )
}

export default NotFound 
