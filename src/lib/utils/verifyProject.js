import projects from "../data/projects";

export const verifyProjects = (route) => {
    for(const project of projects) {
        if(project.route === route) {
            return {
                found: true, 
                ...project,
            }
        }
    }

    return {
        found: false,
    }
}
