import { useState } from "react";
import hamLight from "/images/hamLight.png";
import hamDark from "/images/hamDark.png";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-scroll";

export default function Hamburger() {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const isDarkModeActive = useSelector((state: RootState) => state.theme.isDarkMode);

  const handleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const menuItems = [
    { text: "Home", to: "home" },
    { text: "About", to: "about" },
    { text: "Projects", to: "projects" },
    { text: "Contact", to: "contact" },
  ];

  return (
    <>
      <div className="">
        <img
          className="h-7 grid justify-end pl-5"
          src={isDarkModeActive ? hamDark : hamLight}
          alt=""
          onClick={handleMenu}
        />
      </div>
      <div className={`${isMenuActive ? "" : "hidden"}`}>
        <div className="absolute bg-bgLight dark:bg-bgDark top-20 right-0 w-full h-screen flex flex-col p-10 gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleMenu} 
            >
              <div className="flex flex-col text-xl text-end gap-32 cursor-pointer hover:text-hoverText">
                {item.text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
