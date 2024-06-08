import moon from "/images/moon.png"
import sun from "/images/sun.png"
import { paddingForNav } from "../defineSize"
import Hamburger from "./Hamburger"
import { useDispatch,useSelector } from "react-redux"
import { toggleTheme } from "../redux/themSlice"
import { RootState } from "../redux/store"
import { Link } from 'react-scroll';

export default function Navbar() {
  const dispatch = useDispatch()
  const toggleMode = () =>{
    dispatch(toggleTheme())
  }
  const isDarkModeActive = useSelector((state: RootState) => state.theme.isDarkMode);
  

  
  return (
    <>
        <div className={` h-20 ${isDarkModeActive ? "dark":""} sticky top-0`}>
          <div className={`grid grid-cols-7  h-20 bg-bgLight dark:bg-bgDark transition ease-in-out duration-300 border-b-2 ${paddingForNav}`}>
            {/* logo right section of the navbar */}
              <div className=" col-span-3 flex items-center">
                <div className=" font-poppins text-titleLight dark:text-titleDark text-3xl font-bold ">suneel.dev</div>
              </div>
              {/* left side with navlinks and darkmode toggle */}
              <div className=" col-span-4 h-full grid grid-cols-5  font-poppins text-base font-medium items-center text-titleLight dark:text-titleDark gap-4 xl:text-xl text-end">
                {/* navlinks hidden when small than sm  */}
                <div className=" col-span-4 hidden sm:relative sm:top-0 sm:grid sm:grid-cols-4  ">
                      <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
                        <div className="cursor-pointer hover:text-hoverText">
                          Home
                        </div>
                      </Link>
                      <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                        <div className="cursor-pointer hover:text-hoverText">
                          About
                        </div>
                      </Link>
                      <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                        <div className="cursor-pointer hover:text-hoverText">
                          Projects
                        </div>
                      </Link>
                      <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                        <div className="cursor-pointer hover:text-hoverText">
                          Contact
                        </div>
                      </Link>
                      
                </div>
                <div className="-mt-1 sm:-mt-2 col-span-3 sm:col-span-1 grid justify-end sm:justify-center">
                  <img className=" w-7 h-auto cursor-pointer hover:scale-105" src={isDarkModeActive? sun : moon} alt=""  onClick={toggleMode}/>
                </div>
                <div className="sm:hidden col-span-2">
                  <Hamburger  />
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
