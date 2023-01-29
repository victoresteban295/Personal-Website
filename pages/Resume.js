import { Box } from "@mui/material"

import Summary from "@/components/resume/Summary"
import Education from "@/components/resume/Education"
import Volunteer from "@/components/resume/Volunteer"
import Skill from "@/components/resume/Skill"

const Resume = () => {
    return (
        <Box
            id="page-section"
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                id="resume-page-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    maxWidth: '700px',
                    mx: 1,
                }}
            >
                <Summary /> 
                <Education />
                <Volunteer />
                <Skill />
            </Box>
        </Box>
    )
}

export default Resume
