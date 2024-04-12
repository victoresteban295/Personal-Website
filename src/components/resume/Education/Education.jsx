import { educations } from "@/src/lib/data/educations"
import { Typography, Box } from "@mui/material"
import College from "./College"

const Education = () => {
    return (
        <Box
            id="education-section"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
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
                        m: 0,
                        mb: 1,
                        p: 0,
                        borderBottom: '4px solid',
                        fontWeight: 'bold',
                    }}
                >
                    Education
                </Typography> 
            </Box>
            {educations.map(education => {
                const { index, college, city, degree, minor, graduation } = education;
                return (
                    <College 
                        key={index}
                        index={index}
                        college={college}
                        city={city}
                        degree={degree}
                        minor={minor}
                        graduation={graduation}
                    />
                )
            })}
        </Box>
    )
}

export default Education
