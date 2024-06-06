import { paddingForPages } from "../defineSize"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export default function About() {
    const isDarkModeActive = useSelector((state:RootState)=>state.theme.isDarkMode)
  return (
    <>
        <div className={isDarkModeActive ? "dark":"" }>
            <div className=" bg-bgLight dark:bg-bgDark transition ease-in-out duration-300 mt-0 sm:-mt-28 md:-mt-60 xl:-mt-32">
                <div className={` w-full md:w-4/5 ${paddingForPages} flex flex-col gap-6`}>
                    <div className="flex flex-col gap-4 ">
                        <div className="text-4xl font-bold font-poppins text-hoverText">
                            <p>About Me</p>
                        </div>
                        <div className=" text-2xl  font-poppins font-bold text-titleLight dark:text-titleDark">
                            <p>Full Stack Developer</p>
                            <p>from Banepa,Nepal 📍</p>
                        </div>
                    </div>
                    <div className=" flex text-base flex-col font-mulish gap-2 text-titleLight dark:text-titleDark">
                        <p>Hi there! I'm Sunil , a Full Stack Developer with a passion for crafting intuitive and visually appealing user experiences (UI/UX). I thrive on transforming ideas into clean, functional web applications .</p>
                        <p>My main stack currently is MERN in combination with Tailwind CSS and TypeScript.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
