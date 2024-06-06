import { paddingForPages } from "../defineSize"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store";
import { useState } from "react";
import linkedin from "/images/linkedin.png"
import linkedinDark from "/images/linkedinDark.png"
import githubDark from "/images/githubDark.png"
import githubImage from "/images/github.png"
import wave from "/images/wave.png"
import lowImage from "/images/lowImage.jpg"
import highImage from "/images/highImage.jpg"
import htmlLight from "/images/htmlLight.png"
import htmlDark from "/images/htmlDark.png"
import cssDark from "/images/cssDark.png"
import cssLight from "/images/cssLight.png"
import reactDark from "/images/reactDark.png"
import reactLight from "/images/reactLight.png"
import jsLight from "/images/jsLight.png"
import jsDark from "/images/jsDark.png"
import tsLight from "/images/tsLight.png"
import tsDark from "/images/tsDark.png"
import dbDark from "/images/dbDark.png"
import dbLight from "/images/dbLight.png"
import exLight from "/images/exLight.png"
import exDark from "/images/exDark.png"
import nodeLight from "/images/nodeLight.png"
import nodeDark from "/images/nodeDark.png"



export default function Home() {
  const isDarkModeActive = useSelector((state: RootState) => state.theme.isDarkMode);
  const [isHighQualityImageLoaded,setisHighQualityImageLoaded] = useState<boolean>(false)
  return (
    <>
        <div className={isDarkModeActive ? "dark":""}>
          <div className={`grid grid-rows-4 gap-0 sm:gap-12 xl:gap-20 bg-bgLight dark:bg-bgDark ${paddingForPages} transition ease-in-out duration-300 `}>
            <div className=" row-span-3 grid grid-cols-2 ">
              {/* left side for the intro */}
                <div className="col-span-1 flex flex-col gap-10 ">
                  <div className=" text-3xl md:text-3xl xl:text-5xl flex items-end gap-5 font-poppins font-bold text-titleLight dark:text-titleDark">
                    <div className="">
                      <p>Full Stack</p>
                      <p>Developer </p>
                    </div>
                    <div className="">
                      <img className=" h-10 " src={wave} alt="wave image" />
                    </div>
                  </div>
                  <div className=" text-base xl:text-xl font-mulish text-titleLight dark:text-titleDark">
                    <p>Hi, I'm Sunil Shrestha. A passionate Full Stack Developer from Banepa, Nepal 📍</p>
                  </div>
                  <div className=" flex gap-5">
                    <img className=" sm:h-7 sm:w-7  xl:h-8 xl:w-8" src={isDarkModeActive ? linkedinDark : linkedin} alt="" />
                    <img className=" sm:h-7 sm:w-7 xl:h-8 xl:w-8" src={isDarkModeActive ? githubDark : githubImage} alt="" />
                  </div>
                </div>
                <div className=" col-span-1 flex justify-end pr-14">
                  <div className=" sm:h-60 xl:h-72 aspect-square rounded-full overflow-hidden ">
                    {!isHighQualityImageLoaded && (
                      <img className=" w-full h-full object-cover object-center" src={lowImage} alt="" />
                    )}
                    <img className=" w-full h-full object-cover object-center" src={highImage} alt="" onLoad={()=>setisHighQualityImageLoaded(true)}/>
                  </div>
                </div>
            </div>

            <div className=" row-span-1 flex flex-row  gap-6 xl:gap-16">
              <div className=" sm:text-xl xl:text-2xl font-poppins font-semibold text-titleLight dark:text-titleDark flex items-center ">
                <p>Tech Stack</p>
              </div>
              <div className=" flex  items-center sm:gap-6 xl:gap-16 sm:ml-0 xl:ml-">
                <div className=" xl:gap-4 flex items-center">
                  <span><img className="sm:h-10 xl:h-14 " src={isDarkModeActive ? cssDark : cssLight} alt="" /></span>
                  <span><img className="sm:h-9 xl:h-12 " src={isDarkModeActive ? htmlDark : htmlLight} alt="" /></span>
                </div>
                <div className=" gap-6 flex items-center">
                  <span><img className="sm:h-10 xl:h-14 " src={isDarkModeActive ? jsDark : jsLight} alt="" /></span>
                  <span><img className="sm:h-7 xl:h-10 " src={isDarkModeActive ? tsDark : tsLight} alt="" /></span>
                </div>
                <div className=" gap-6 flex items-center">
                  <span><img className="sm:h-8 xl:h-11 " src={isDarkModeActive ? reactDark : reactLight} alt="" /></span>
                  <span><img className="sm:h-8 xl:h-11" src={isDarkModeActive ? nodeDark : nodeLight} alt="" /></span>
                  <span><img className="sm:h-8 xl:h-11 " src={isDarkModeActive ? dbDark : dbLight} alt="" /></span>
                  <span><img className="sm:h-8 xl:h-11 " src={isDarkModeActive ? exDark : exLight} alt="" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
