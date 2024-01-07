import ProjectDescription from "@/src/components/projects/ProjectDescription";
import ProjectTitle from "@/src/components/projects/ProjectTitle";
import { verifyProjects } from "@/src/lib/utils/verifyProject";
import { Box, Grow, Stack } from "@mui/material";
import { notFound } from "next/navigation";

const ProjectPage = ({ params }) => {
    const route = params.project;
    const project = verifyProjects(route);

    if(!project.found) {
        notFound(); 
    }

    return (
        <Grow in={true}>
            <Box
                id="page-section"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Stack
                    id="projects-page-section"
                    spacing={2}
                    sx={{
                        /* maxWidth: '1000px', */
                        width: '1000px',
                        m: 2,
                    }}
                >
                    <ProjectTitle 
                        title={project.title}
                    />
                    <ProjectDescription 
                    /> 
                </Stack>

            </Box>
        </Grow>

    )

}

export default ProjectPage;
