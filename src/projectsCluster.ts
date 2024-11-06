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
        image:"https://firebasestorage.googleapis.com/v0/b/hikerheven.appspot.com/o/profile%2FScreenshot%202024-09-10%20170356.png2734d059-df6d-4132-8caf-035da510a54a?alt=media&token=212682ff-a374-4739-8e7a-5fb42be1dda3",
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
        name : "Vibeconnect",
        description : "VibeConnect is a social media app designed for connecting and sharing thoughts. Built with Next.js, MongoDB, TypeScript, and Tailwind CSS, it allows users to log in via Google or sign up with email verification for added security .Users can create posts, share 24-hour stories, and upload reels. They can also follow others, like posts, and comment, with notifications for likes, follows, and comments to stay updated on interactions. VibeConnect offers a secure, interactive, and user-friendly platform for social connection." ,
        image:"/images/vibeconnect.png",
        codeLink:"https://github.com/sunilshrestha07/vibeconnect",
        liveLink: "https://vibeconnect-suneel.vercel.app/login",
        codeLinkImage : "/images/github.png",
        liveLinkImage : "/images/share.png",
    },

];
