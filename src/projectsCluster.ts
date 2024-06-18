interface ProjectsInterface {
    name: string;
    description: string; 
    image: string;
    codeLink: string;
    codeLinkImage: string;
    liveLink: string;
    liveLinkImage: string;
}

export const projects: ProjectsInterface[] = [
    {
        name : "HoodiesHUb",
        description : "HoodiesHub is my e-commerce brainchild, a website designed specifically for hoodie enthusiasts. Built with cutting-edge technologies like React and Redux for state management." ,
        image:"/images/hoodieshub.jpg",
        codeLink:"https://github.com/suneelcrestha9/hoodieshub",
        liveLink: "https://hoodieshub.vercel.app/",
        codeLinkImage : "/images/github.png",
        liveLinkImage : "/images/share.png",
    },
    {
        name : "City Travel",
        description : "This responsive travel website, built using React.js, is your one-stop shop for exploring the vibrant city . It boasts a user-friendly interface that flawlessly adapts to any device." ,
        image:"/images/travel.jpg",
        codeLink:"https://github.com/suneelcrestha9/travel",
        liveLink: "https://travel-nine-xi.vercel.app/",
        codeLinkImage : "/images/github.png",
        liveLinkImage : "/images/share.png",
    },
    {
        name : "Hantay",
        description : "Hantay, a food ordering website, lets you explore  order delicious meals with ease. Built with the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS, it offers secure logins (Firebase), a user-friendly interface" ,
        image:"/images/hantay.jpg",
        codeLink:"https://github.com/sunilshrestha07/Hantay",
        liveLink: "https://frontend-steel-chi.vercel.app/",
        codeLinkImage : "/images/github.png",
        liveLinkImage : "/images/share.png",
    },
    {
        name : "Hiker Heven",
        description : "HikerHeaven is a comprehensive hiking website where users can explore various hiking trails, read reviews, and save their favorite hikes. Built with the MERN stack (MongoDB, Express, React, Node.js) using TypeScript and Tailwind CSS" ,
        image:"/images/hiker.png",
        codeLink:"https://github.com/sunilshrestha07/HikerHeven",
        liveLink: "https://hiker-heven.vercel.app/",
        codeLinkImage : "/images/github.png",
        liveLinkImage : "/images/share.png",
    },

];
