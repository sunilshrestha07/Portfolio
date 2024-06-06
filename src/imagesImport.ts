interface Image {
    light: string;
    dark: string;
  }
  
  const images: Record<string, Image> = {
    linkedin: {
      light: "/images/linkedin.png",
      dark: "/images/linkedinDark.png",
    },
    github: {
      light: "/images/github.png",
      dark: "/images/githubDark.png",
    },
    html: {
      light: "/images/htmlLight.png",
      dark: "/images/htmlDark.png",
    },
    css: {
      light: "/images/cssLight.png",
      dark: "/images/cssDark.png",
    },
    react: {
      light: "/images/reactLight.png",
      dark: "/images/reactDark.png",
    },
    js: {
      light: "/images/jsLight.png",
      dark: "/images/jsDark.png",
    },
    ts: {
      light: "/images/tsLight.png",
      dark: "/images/tsDark.png",
    },
    db: {
      light: "/images/dbLight.png",
      dark: "/images/dbDark.png",
    },
    ex: {
      light: "/images/exLight.png",
      dark: "/images/exDark.png",
    },
    node: {
      light: "/images/nodeLight.png",
      dark: "/images/nodeDark.png",
    },
  };
  
  export default images;
  