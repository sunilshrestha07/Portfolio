import { useState } from "react"
import moon from "/images/moon.png"
import sun from "/images/sun.png"

export default function Navbar() {
  const [isDarkModeActive,setIsDarkModeActive]=useState<boolean>(false)
  const toggleMode = () =>{
    setIsDarkModeActive(!isDarkModeActive)
  }
  return (
    <>
        <div className={` h-20 ${isDarkModeActive ? "dark":""}`}>
          <div className=" grid grid-cols-7 px-36 h-20 bg-bgLight dark:bg-bgDark transition ease-in-out duration-300 border-b-2">
              <div className=" col-span-3 flex items-center">
                <div className=" font-poppins text-titleLight dark:text-titleDark text-3xl font-bold  ">suneel.dev</div>
              </div>
              <div className=" col-span-4 h-full grid grid-cols-5 gap-4 font-poppins text-base font-medium items-center text-titleLight dark:text-titleDark">
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
                <div className="-mt-2">
                  <img className=" w-8 h-auto cursor-pointer hover:scale-105" src={isDarkModeActive? sun : moon} alt=""  onClick={toggleMode}/>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
