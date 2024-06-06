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
        description : "HoodiesHub is my e-commerce brainchild, a website designed specifically for hoodie enthusiasts. Built with cutting-edge technologies like React and Redux for state management, it boasts a user-friendly UI/UX design and lightning-fast performance, ensuring a smooth browsing experience and hassle-free purchases." ,
        image:"/images/hoodieshub.png",
        codeLink:"https://github.com/suneelcrestha9/hoodieshub",
        liveLink: "https://hoodieshub.vercel.app/",
        codeLinkImage : "/images/github.png",
        liveLinkImage : "/images/linkedin.png",
    },
    {
        name : "City Travel",
        description : "This responsive travel website, built using React.js, is your one-stop shop for exploring the vibrant city . It boasts a user-friendly interface that flawlessly adapts to any device, ensuring a seamless travel planning experience on desktops, tablets, and smartphones." ,
        image:"/images/travel.png",
        codeLink:"https://github.com/suneelcrestha9/travel",
        liveLink: "https://travel-nine-xi.vercel.app/",
        codeLinkImage : "/images/github.png",
        liveLinkImage : "/images/linkedin.png",
    },
    {
        name : "Hantay",
        description : "Hantay, a food ordering website, lets you explore  order delicious meals with ease. Built with the MERN stack (MongoDB, Express, React, Node.js) and Tailwind CSS, it offers secure logins (Firebase), a user-friendly interface. From browsing diverse menus to smooth checkouts, Hantay caters to your culinary cravings." ,
        image:"/images/hantay.png",
        codeLink:"https://github.com/sunilshrestha07/Hantay",
        liveLink: "https://frontend-steel-chi.vercel.app/",
        codeLinkImage : "/images/github.png",
        liveLinkImage : "/images/linkedin.png",
    },

];
