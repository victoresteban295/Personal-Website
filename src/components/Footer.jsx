import { Box, Typography } from "@mui/material";

const Footer = () => {
    let currentYear = new Date().getFullYear().toString();
    return (
        <Box
            sx={{
                mt: 4,
                mb: 2,
            }}
        >
            <Typography 
                align="center" 
                variant="subtitle1"
                sx={{
                    fontWeight: 'bold',
                }}
            >
                © {currentYear} Victor Esteban. All Right Reserved 
            </Typography>
        </Box>
    )
}

export default Footer;
