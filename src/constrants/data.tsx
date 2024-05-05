
export const navData = [
    {
        name: "Projects",
        path: "/#projects",
    }, {
        name: "Skills & Experience",
        path: "/#skils",
    },
    {
        name: "Education",
        path: "/#education",
    },

    {
        name: "Contact",
        path: "/#contact",
    },
];


export const skillData = [
    {
        name: "HTML",
        icon: "/assets/skillsIcons/html.png",
        type: "Frontend"
    },
    {
        name: "Illustrator",
        icon: "/assets/skillsIcons/adobe-illustrator.png",
        type: "Tools"
    },
    {
        name: "Adobe Photoshop",
        icon: "/assets/skillsIcons/adobe-photoshop-express.svg",
        type: "Tools"
    },
    {
        name: "Angular",
        icon: "/assets/skillsIcons/angularjs.png",
        type: "Frontend"
    },
    {
        name: "Flutter",
        icon: "/assets/skillsIcons/flutter.png",
        type: "Frontend"
    },
    {
        name: "CSS 3",
        icon: "/assets/skillsIcons/css.png",
        type: "Frontend"
    },
    {
        name: "Bootstrap",
        icon: "/assets/skillsIcons/bootstrap.svg",
        type: "Frontend"
    },
    {
        name: "ExpressJs",
        icon: "/assets/skillsIcons/express.svg",
        type: "Backend"
    },
    {
        name: "Mysql",
        icon: "/assets/skillsIcons/mysql.png",
        type: "Backend"
    },
    {
        name: "PostgreSql",
        icon: "/assets/skillsIcons/postgresql.svg",
        type: "Backend"
    },
    {
        name: "Figma",
        icon: "/assets/skillsIcons/figma.svg",
        type: "Tools"
    },
    {
        name: "Git",
        icon: "/assets/skillsIcons/git.png",
        type: "Tools"
    },
    {
        name: "JS",
        icon: "/assets/skillsIcons/javascript.png",
        type: "Frontend"
    },
    {
        name: "MongoDB",
        icon: "/assets/skillsIcons/mongodb.svg",
        type: "Backend"
    },
    {
        name: "NodeJS",
        icon: "/assets/skillsIcons/nodejs.svg",
        type: "Backend"
    },
    {
        name: "NPM",
        icon: "/assets/skillsIcons/npm.png",
        type: "Tools"
    },
    {
        name: "React",
        icon: "/assets/skillsIcons/react.png",
        type: "Frontend"
    },
    {
        name: "Tailwind Css",
        icon: "/assets/skillsIcons/tailwind.png",
        type: "Frontend"
    },
    {
        name: "Typescript",
        icon: "/assets/skillsIcons/typescript.png",
        type: "Frontend"
    },
    {
        name: "Vs Code",
        icon: "/assets/skillsIcons/visual-studio-code.png",
        type: "Tools"
    },




]



export const socialData = [
    {
        name: "Facebook",
        path: "https://www.facebook.com/JonasRyanGomes",
        src: "/assets/icons/facebook.svg",
    },
    {
        name: "Instagram",
        path: "https://www.instagram.com/super___nova94/",
        src: "/assets/icons/instagram.svg",
    },
    {
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/JonasRyanGomes",
        src: "/assets/icons/linkedin.svg",
    },
    {
        name: "GitHub",
        path: "https://github.com/Ryangom",
        src: "/assets/icons/github.svg",
    },
]

export const educationData = [
    {
        name: "Unieversity of Greenwich, London",
        startDate: "2019",
        endDate: "2023",
        desc: "B.Sc (Hons) in Computer Science",
        img: "/assets/education/greenWich.gif",
        result: "Got 1st Class in B.Sc",
        courses: [
            'DBMS,',
            'Data Structures and Algorithms,',
            'Requrements Management,',
            'Computer Project,',
            'Human Computer Interaction and Design,',
            'Information and Content Management '
        ]
    },
    {
        name: "Bandura Holy Cross High School & College, Dhaka",
        startDate: "2017",
        endDate: "2019",
        desc: "HSC",
        img: "/assets/education/holyCross.jpg",
        result: "GPA: 4.40",
        courses: [
            'NCTB Standards'
        ]
    }
]

export const experiences = [
    {
        position: "Frontend Developer",
        startDate: "Oct 2021",
        endDate: "Sep 2023",
        companyName: "Quintet Technology Limited",
        companyImg: "/assets/experiences/quintet.jpg",
        location: "Dhaka, Bangladesh",
        jobType: "Fulltime",
        achivementList: [
            "Design and Developed web-based applications and frameworks using Angular",
            "Worked on improving the web-application’s design and make the application look more user-friendly. ",
            "Collaborated with designers, project manager to build great experiences.",
            "Communicated with the backend using Restful APIs.",
            "Followed MVC design pattern",
            "Integrated Google map service",
            "Integrated SSL commerce Payment getaway ",
            "Integrated Notification system with help of firebase.",
        ],
    },

]

export const projectsData = [
    {
        name: "Pharmaid-rx",
        desc: "PharmAid-Rx, your Online medicine assistant that enables you to compare prices and access affordable medication, delivered conveniently to your doorsteps.",
        longDesc: "PharmAid-Rx, your Online medicine assistant that enables you to compare prices and access affordable medication, delivered conveniently to your doorsteps.",
        thumbnail: "/assets/projects/pharmaAid-rx.gif",
        gitLink: "",
        liveLink: "https://pharmaid-rx.com/",
        liveLinkAvailable: true,
        techUsed: [
            "Angular",
            "Typescript",
            "CSS",
            "HTML",
            "Tailwind",
        ],
        keyFeatures: [
            'sss'
        ],
        isGit: false,
        images: [
            { src: "", },
        ]

    },
    {
        name: "Exa ski tracker",
        desc: "Exa ski tracker is a ski tracking app that tracks different types of ski related information of a skier. The main purpose of this application is to track the skiing activities of its users and provide a report on the ski track.",
        longDesc: "Exa ski tracker is a ski tracking app that tracks different types of ski related information of a skier. The main purpose of this application is to track the skiing activities of its users and provide a report on the ski track. This application provides some features that are very similar to this purpose application. This app allows its user to track his skiing activities and displays all the statistics like speed, duration, route maps, etc.on skiing.",
        thumbnail: "/assets/projects/Exa_ski_tracker/thumbnail.gif",
        gitLink: "",
        liveLink: "",
        liveLinkAvailable: false,
        isGit: false,
        techUsed: [
            "UX",
            "UI",
            "Figma",
            "Mobile"
        ],
        keyFeatures: [
            "Users can see their current location weather. ",
            "Users can check weather forecast around the ski resort. ",
            "Activity tracking to track users ski activity. So, users can see his/her activity in the app.",
            "Users can see all ski resort lists and resort related information around him/her.  ",
            "Users can see and update his/her profile information. ",
            "Login system to verify user authentication or authenticity  ",
            "A news portal system to check any ski related news. ",
        ],

        images: [

            {
                src: '/assets/projects/Exa_ski_tracker/1.png',
            },
            {
                src: '/assets/projects/Exa_ski_tracker/2.png',
            },
            {
                src: '/assets/projects/Exa_ski_tracker/3.png',
            },
            {
                src: '/assets/projects/Exa_ski_tracker/4.png',
            },
            {
                src: '/assets/projects/Exa_ski_tracker/5.png',
            },
            {
                src: '/assets/projects/Exa_ski_tracker/6.png',
            },
            {
                src: '/assets/projects/Exa_ski_tracker/7.png',
            },
            {
                src: '/assets/projects/Exa_ski_tracker/8.png',
            },
            {
                src: '/assets/projects/Exa_ski_tracker/9.png',
            },

        ]
    },
    {
        name: "Ride",
        desc: "Exa ski tracker is a ski tracking app that tracks different types of ski related information of a skier. The main purpose of this application is to track the skiing activities of its users and provide a report on the ski track.",
        longDesc: "Exa ski tracker is a ski tracking app that tracks different types of ski related information of a skier. The main purpose of this application is to track the skiing activities of its users and provide a report on the ski track. This application provides some features that are very similar to this purpose application. This app allows its user to track his skiing activities and displays all the statistics like speed, duration, route maps, etc.on skiing.",
        thumbnail: "/assets/projects/Ride_app/thumbnail.gif",
        gitLink: "",
        liveLink: "",
        liveLinkAvailable: false,
        isGit: true,
        techUsed: [
            "UX",
            "UI",
            "Figma",
            "Mobile",
            "Flutter",
            "Angular",
            "NodeJS",
            "MongoDB",
        ],
        keyFeatures: [
            "Users can see their current location weather. ",
            "Users can check weather forecast around the ski resort. ",
            "Activity tracking to track users ski activity. So, users can see his/her activity in the app.",
            "Users can see all ski resort lists and resort related information around him/her.  ",
            "Users can see and update his/her profile information. ",
            "Login system to verify user authentication or authenticity  ",
            "A news portal system to check any ski related news. ",
        ],

        images: [

            {
                src: '/assets/projects/Ride_app/1.png',
            },
            {
                src: '/assets/projects/Ride_app/2.png',
            },
            {
                src: '/assets/projects/Ride_app/3.png',
            },
            {
                src: '/assets/projects/Ride_app/4.png',
            },
            {
                src: '/assets/projects/Ride_app/5.png',
            },
            {
                src: '/assets/projects/Ride_app/6.png',
            },
            {
                src: '/assets/projects/Ride_app/7.png',
            },
            {
                src: '/assets/projects/Ride_app/8.png',
            },
            {
                src: '/assets/projects/Ride_app/9.png',
            },
            {
                src: '/assets/projects/Ride_app/10.png',
            },
            {
                src: '/assets/projects/Ride_app/11.png',
            },
            {
                src: '/assets/projects/Ride_app/12.png',
            },
            {
                src: '/assets/projects/Ride_app/13.png',
            },
            {
                src: '/assets/projects/Ride_app/4.png',
            },
            {
                src: '/assets/projects/Ride_app/15.png',
            },
            {
                src: '/assets/projects/Ride_app/16.png',
            },
            {
                src: '/assets/projects/Ride_app/17.png',
            },
            {
                src: '/assets/projects/Ride_app/18.png',
            },
            {
                src: '/assets/projects/Ride_app/19.png',
            },
            {
                src: '/assets/projects/Ride_app/20.png',
            },



        ]
    },
]