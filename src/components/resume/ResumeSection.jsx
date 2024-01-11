import { Stack, Typography } from "@mui/material";
import Summary from "./Summary";
import Work from "./Work";
import Volunteer from "./Volunteer";
import Skill from "./Skill";
import Education from "./Education";

const ResumeSection = () => {
    return (
        <Stack
            id="resume"
            spacing={2}
            sx={{
                maxWidth: '700px',
                mx: 2,
                py: 5,
            }}
        >
                <Typography
                    variant='h5'
                    sx={{
                        fontWeight: '700',
                    }}
                >
                    Resume
                </Typography>
            <Stack
                spacing={2}
                sx={{
                    bgcolor: 'resume.background',
                    borderRadius: '15px',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    borderColor: 'resume.border',
                }}
            >
                <Summary /> 
                <Work />
                <Education />
                <Volunteer />
                <Skill />
            </Stack>
        </Stack>
    )
}

export default ResumeSection;
