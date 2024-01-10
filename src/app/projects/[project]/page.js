import ProjectDescription from "@/src/components/projects/ProjectDescription";
import ProjectStack from "@/src/components/projects/ProjectStack";
import ProjectTitle from "@/src/components/projects/ProjectTitle";
import ProjectWeb from "@/src/components/projects/ProjectWeb";
import { verifyProjects } from "@/src/lib/utils/verifyProject";
import { Box, Divider, Grow, Stack } from "@mui/material";
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
                    spacing={4}
                    sx={{
                        maxWidth: '700px',
                        m: 2,
                    }}
                >
                    <ProjectTitle 
                        title={project.title}
                    />
                    <Stack
                        direction={{ xs: 'column', sm: 'row'}}
                        spacing={2}
                        divider={
                            <Divider 
                                orientation='vertical'
                                flexItem
                                sx={{
                                    bgcolor: 'text.primary'
                                }}
                            />
                        }
                        sx={{
                            p: 2,
                            borderRadius: '15px',
                            backgroundColor: 'secondary.main',
                            boxShadow: '1px 1px 10px #000',
                        }}
                    >
                        <ProjectDescription 
                            description={project.description}
                        /> 
                        <ProjectWeb 
                            website={project.website}
                            github={project.github}
                        />
                    </Stack>
                    <ProjectStack 
                        stack={project.stack}
                    />
                </Stack>

            </Box>
        </Grow>

    )

}

export default ProjectPage;
