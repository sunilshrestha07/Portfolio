import moon from "/images/moon.png"
import sun from "/images/sun.png"
import { paddingForNav } from "../defineSize"
import Hamburger from "./Hamburger"
import { useDispatch,useSelector } from "react-redux"
import { toggleTheme } from "../redux/themSlice"
import { RootState } from "../redux/store"

export default function Navbar() {
  const dispatch = useDispatch()
  const isDarkModeActive = useSelector((state: RootState) => state.theme.isDarkMode);
  const toggleMode = () =>{
    dispatch(toggleTheme())
  }
  console.log(isDarkModeActive)

  
  return (
    <>
        <div className={` h-20 ${isDarkModeActive ? "dark":""}`}>
          <div className={`grid grid-cols-7  h-20 bg-bgLight dark:bg-bgDark transition ease-in-out duration-300 border-b-2 ${paddingForNav}`}>
            {/* logo right section of the navbar */}
              <div className=" col-span-3 flex items-center">
                <div className=" font-poppins text-titleLight dark:text-titleDark text-3xl font-bold  ">suneel.dev</div>
              </div>
              {/* left side with navlinks and darkmode toggle */}
              <div className=" col-span-4 h-full grid grid-cols-5  font-poppins text-base font-medium items-center text-titleLight dark:text-titleDark gap-4 xl:text-xl">
                {/* navlinks hidden when small than sm  */}
                <div className=" col-span-4 hidden sm:relative sm:top-0 sm:grid sm:grid-cols-4 ">
                      <div className="">
                        Home
                      </div>
                      <div className="">
                        About
                      </div>
                      <div className="">
                        Projects
                      </div>
                      <div className="">
                        Contact
                      </div>
                </div>
                <div className="-mt-1 sm:-mt-2 col-span-3 sm:col-span-1 grid justify-end sm:justify-start">
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
