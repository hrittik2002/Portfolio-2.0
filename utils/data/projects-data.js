import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: '99Types',
        description: "Me and my team developed 99Types, an interactive web application using ReactJS, where users can create and take quizzes. I worked as a frontend developer in this project.",
        tools: ['ReactJs' , 'Javascript' , 'HTML' , 'CSS' , 'Redux'],
        role: 'Frontend Develper',
        code: 'https://github.com/hrittik2002/gettooly-frontend',
        demo: 'https://www.youtube.com/watch?v=92oFKRuPumc',
        image: crefin,
    },
    {
        id: 2,
        name: 'FileShare Application',
        description: 'FileShare is a Full Stack Web Application that enables users to distribute files using either links or email.',
        tools: ['ReactJS' , 'NodeJS' , 'ExpressJS', 'MongoDB'],
        role: 'Full Stack Developer',
        code: 'https://github.com/hrittik2002/fileShare',
        demo: 'https://file-share-client.vercel.app/',
        image: travel,
    },
    {
        id: 3,
        name: 'Employ Me',
        description: 'Employ Me is a job search website using React that enables users to search for job openings across the globe.  Key features of the platform include filtering jobs by location and searching jobs by roles.',
        tools: ['React', 'Javascript'],
        code: 'https://github.com/hrittik2002/EmployMe?tab=readme-ov-file',
        role: 'Full Stack Developer',
        demo: 'https://employ-me-virid.vercel.app/',
        image: realEstate,
    },
    {
        id: 4,
        name: 'MedConnect',
        description: "MedConnect is an online platform that allows users to book appointments with doctors and purchase medication online. Co-created this web Application, as part of a two-person team, which won 1st prize at an inter-college Hackathon (Appminia).",
        tools: ['CSS' , 'React' , 'MongoDB' , 'ExpressJS' , 'Javascript'],
        code: 'https://github.com/hrittik2002/MedConnect',
        demo: 'https://luminous-empanada-7c893a.netlify.app/',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },