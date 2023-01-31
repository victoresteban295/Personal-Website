import { Typography, Box } from "@mui/material"

const Aboutme = () => {
    return (
        <Box
            id="aboutme-section"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                width: '100%',
                borderRadius: '15px',
                backgroundColor: 'secondary.main',
                boxShadow: '1px 1px 10px #000',
                mt: 2,
                py: 2,
                px: 3,
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    m: 0,
                    mb: 1,
                    p: 0,
                }}
            >
                About Me
            </Typography> 
            <Typography
                variant="body1"
            >
                I’m a 1st generation Mexican American 
                born and raised in South Central Los Angeles. I attended 
                Animo Ralph Bunche Charter High School and obtained my high 
                school diploma in June 2016. After graduating from high school, 
                I moved to Michigan to pursue my undergraduate studies at 
                Albion College and became the first in my family to attend 
                college. While at Albion, I became involved in many organizations 
                and clubs, such as the Engineering Club, Organization 
                for Latinx Awareness (OLA), and Tau Kappa Epsilon Fraternity. 
                Through these organizations, I had the opportunity to organize 
                and participate in many events that included fraternity recruitment, 
                fundraisers for St. Jude, and Latinx cultural events. 
                On top of that, I became the vice president of the Engineering Club 
                and the director of recruitment for Tau Kappa Epsilon. 
                In May 2021, I graduated from Albion College and obtained my 
                Bachelor of Arts in Computer Science with a minor in 
                Applied Mathematics. 
            </Typography>
        </Box>
    )
}

export default Aboutme
