import { Typography, Box } from "@mui/material"
import Jobs from "./Jobs";
import { jobs } from "@/src/lib/data/jobs";

const Work = () => {
    return (
        <Box
            id="work-section"
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
                        borderBottom: '4px solid',
                        my: 1,
                        fontWeight: 'bold',
                    }}
                >
                    Work Experience
                </Typography> 
            </Box>
            {jobs.map(job => {
                const { company, jobTitle, startDate, endDate, description } = job;
                return (
                    <Jobs 
                        key={company}
                        company={company}
                        jobTitle={jobTitle}
                        startDate={startDate}
                        endDate={endDate}
                        description={description}
                    />
                )
            })}
        </Box>
    )
}

export default Work;
