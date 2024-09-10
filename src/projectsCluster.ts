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
        name : "FashionFusion",
        description : "FashionFusion is my e-commerce full stack project build in Next js, it provides a seamless shopping experience for users. It offers a user-friendly interface, secure logins, and shopping cart functionality and for the payment i have intergrated E-sewa payment gateway. ",
        image:"/images/fashion.png",
        codeLink:"https://github.com/sunilshrestha07/FashionFusion",
        liveLink: "https://fashion-fusion-suneel.vercel.app/",
        codeLinkImage : "/images/github.png",
        liveLinkImage : "/images/share.png",
    },
    {
        name : "Moodlift",
        description : "MoodLift is an AI-powered mental health platform that provides personalized well-being suggestions. After users answer initial questions, the AI analyzes the inputs to offer tailored advice on improving mental health. Additionally, users can connect with certified professionals for further guidance, making it a comprehensive resource for mental health support. ",
        image:"/images/fashion.png",
        codeLink:"https://github.com/sunilshrestha07/moodlift",
        liveLink: "https://fashion-fusion-suneel.vercel.app/",
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
    {
        name : "Erlang",
        description : "Erlang is a comprehensive E-commerce website where users can explore various products like colthes,jewellery and showes. Built with the MERN stack (MongoDB, Express, React, Node.js) using TypeScript and Tailwind CSS.This project was build by me and my friend",
        image:"/images/erlang.png",
        codeLink:"https://github.com/bipu01/Erlang",
        liveLink: "https://erlang-next.vercel.app/",
        codeLinkImage : "/images/github.png",
        liveLinkImage : "/images/share.png",
    },

];
