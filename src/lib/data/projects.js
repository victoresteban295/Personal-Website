const academicDashboard = {
    route: 'academicdashboard',
    thumbnail: '/images/academicDashboard/checklistpage.png',
    thumbnailAlt: 'Academic Dashboard Checklist Page',
    title: 'Academic Dashboard',
    info: 'A web application for academic institutions that improves how students interact with course-related work assigned by professors.',
    description: 'For educational institutions looking to boost academic performance, Academic Dashboard is a web application that improves how students interact with course-related work assigned by professors. Unlike similar products that are uniquely designed for a single institution, our software product was built to be adopted across different campuses and provide all students with a sense of familiarity. Its built-in calendar, checklist, and reminders allow users to become more organized without switching applications.',
    website: '',
    github: '',
    stack: [
        {
            resource: 'React', 
            info: 'Frontend Javascript Library for Building User Interfaces'
        }, 
        {
            resource: 'Nextjs 13', 
            info: 'React Web Development Framework'
        }, 
        {
            resource: 'Material UI', 
            info: 'React Component Library'
        }, 
        {
            resource: 'React Hook Form', 
            info: 'Form Management Library'
        }, 
        {
            resource: 'Zod', 
            info: 'Input Validation'
        }, 
        {
            resource: 'Dnd-Kit', 
            info: 'Drag & Drop Toolkit for React'
        }, 
        {
            resource: 'Icons8', 
            info: 'Provided Icons Used in Project'
        }
    ],
    gallery: [
        '/images/academicDashboard/loginpage.png', 
        '/images/academicDashboard/acadinstitpage.png', 
        '/images/academicDashboard/profilepage.png', 
        '/images/academicDashboard/reviewpage.png', 
        '/images/academicDashboard/checklistpage.png', 
        '/images/academicDashboard/errorhandling.png', 
    ]
}

const restApi = {
    route: 'restapi',
    thumbnail: '/images/restapi.png',
    thumbnailAlt: 'REST API Java + Spring Boot + MongoDB',
    title: 'RESTful API',
    info: 'A RESTful API written in Java that uses the Spring framework to allow Academic Dashboard to access and manipulate data stored in a MongoDB database.'
}

const projects = [academicDashboard, restApi];
export default projects;
