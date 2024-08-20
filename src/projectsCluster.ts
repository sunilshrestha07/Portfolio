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
