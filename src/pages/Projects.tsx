import { paddingForPages } from "../defineSize"
import { projects } from "../projectsCluster"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export default function Projects() {
    const isDarkModeActive = useSelector((state:RootState)=>state.theme.isDarkMode)
  return (
    <>
        <div className={isDarkModeActive ? "dark":""}>
           <div className=" bg-bgLight dark:bg-bgDark transition ease-in-out duration-300">
                <div className={paddingForPages}>
                    <div className=" flex flex-col gap-16 py-6">
                        <div className=" flex flex-col gap-5">
                            <div className=" text-4xl font-poppins font-bold text-hoverText">
                                <p>Projects</p>
                            </div>
                            <div className=" text-2xl font-bold font-poppins text-titleLight dark:text-titleDark">
                                <p>Each project is a unique piece of development</p>
                            </div>
                        </div>
                        <div className="">
                            {/* project cluster displayed using map extraced from the projectsCluster interface */}
                            <div className=" flex flex-col gap-20">
                                {projects.map((project,index)=>(
                                    <div className=" h-1/2 grid grid-rows-2 sm:grid-rows-none sm:grid-cols-6 gap-2 py-4 rounded-xl shadow-2xl shadow-custom-black dark:shadow-custom-white border-2 dark:border-slate-700 " key={index}>
                                        <div className=" h-full row-span-1 sm:col-span-3 px-2">
                                            <div className="h-full overflow-hidden rounded-xl bg-black object-cover">
                                                <img className="  h-full w-full hover:scale-110 transition ease-in-out duration-300" src={project.image} alt="" />
                                            </div>
                                        </div>
                                        <div className=" row-span-1 sm:col-span-3 ">
                                            <div className=" text-xl font-bold font-mulish text-titleLight dark:text-titleDark text-center sm:pb-1 xl:pb-2">
                                                <p>{project.name}</p>
                                            </div>
                                            <div className=" font-mulish px-6 sm:px-3 xl:px-10 flex flex-col h-full  justify-around ">
                                                <div className="  text-titleLight dark:text-titleDark text-sm xl:text-base">
                                                    <p>{project.description}</p>
                                                </div>
                                                <div className=" flex sm:gap-6 xl:gap-10 pb-6  flex-row justify-around sm:justify-start">
                                                    <div className=" flex bg-hoverText px-3 py-1 xl:px-4 xl:py-2 rounded-lg font-poppins font-medium gap-2 items-center justify-center hover:scale-105 transition ease-in-out duration-300">
                                                        <a href={project.codeLink} target="blank">
                                                            Code
                                                        </a>
                                                        <div className="">
                                                            <img className=" h-4 xl:h-5" src={project.codeLinkImage} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className=" flex bg-hoverText px-2 py-1 xl:px-4 xl:py-2 rounded-lg font-poppins font-medium gap-2 items-center justify-center hover:scale-105 transition ease-in-out duration-300">
                                                        <a href={project.liveLink} target="blank">
                                                            Live Demo
                                                        </a >
                                                        <div className="">
                                                            <img className=" h-4 xl:h-5" src={project.liveLinkImage} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </>
  )
}
