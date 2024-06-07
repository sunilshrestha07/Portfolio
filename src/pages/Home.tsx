import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useState } from "react";
import wave from "/images/wave.png";
import lowImage from "/images/lowImage.jpg";
import highImage from "/images/highImage.jpg";
import images from "../imagesImport"
import { paddingForPages } from "../defineSize";
import {motion ,useTransform,useViewportScroll} from "framer-motion"

export default function Home() {
  const isDarkModeActive = useSelector((state: RootState) => state.theme.isDarkMode);
  const [isHighQualityImageLoaded, setIsHighQualityImageLoaded] = useState<boolean>(false);
  const {scrollYProgress}=useViewportScroll()
  const scale = useTransform(scrollYProgress,[0,1],[1,4])

  const getImage = (imageKey: string) => {
    return isDarkModeActive ? images[imageKey].dark : images[imageKey].light;
  };

  return (
    <>
      <div className={isDarkModeActive ? "dark" : ""}>
        <div className=" h-screen bg-bgLight dark:bg-bgDark transition ease-in-out duration-300">
          <div className={`grid grid-rows-4 gap-0 sm:gap-12 xl:gap-20 ${paddingForPages}  `}>
            <div className="row-span-3 grid sm:grid-cols-2 gap-6 sm:gap-0">
              {/* left side for the intro */}
              <motion.div
              initial={{
                opacity:0,
                translateX:-500
                }}
                animate={{
                  opacity:1,
                  translateX:0
                }}
                transition={{
                  delay:0.1,
                  duration:.6
                }}
              className="row-span-1 sm:col-span-1 flex flex-col gap-5 sm:gap-10 order-2 sm:order-1">
                <div className="text-3xl md:text-3xl xl:text-5xl flex items-end gap-5 font-poppins font-bold text-titleLight dark:text-titleDark justify-center sm:justify-start">
                  <div className="">
                    <p className="ml-8 sm:ml-0">Full Stack</p>
                    <div className="flex gap-4 items-center">
                      <p>Developer </p>
                      <div className="">
                        <motion.img
                        animate={{
                          rotate:[0, 30, 0],
                        }}
                        transition={{
                          duration: 2, // Duration of one cycle
                          ease: "easeInOut", // Easing function
                          repeat: Infinity, // Repeat the animation indefinitely
                          repeatType: "loop", // Loop the animation
                        }}
                        className="h-10" src={wave} alt="wave image" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-base xl:text-xl font-mulish text-titleLight dark:text-titleDark">
                  <p>Hi, I'm Sunil Shrestha. A passionate Full Stack Developer from Banepa, Nepal 📍</p>
                </div>
                <div className="flex gap-5 justify-center sm:justify-start">
                  <a href="https://www.linkedin.com/in/suneelshrestha/" target="blank">
                    <img className="h-7 sm:h-7 sm:w-7 xl:h-8 xl:w-8 cursor-pointer" src={getImage('linkedin')} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/sunilshrestha07" target="blank">
                    <img className="h-7 sm:h-7 sm:w-7 xl:h-8 xl:w-8 cursor-pointer" src={getImage('github')} alt="GitHub" />
                  </a>
                </div>
              </motion.div>
              <motion.div 
              initial={{
              opacity:0,
              translateX:500
              }}
              animate={{
                opacity:1,
                translateX:0
              }}
              transition={{
                delay:0.1,
                duration:.6
              }}
              className="row-span-1 sm:col-span-1 flex justify-center sm:justify-end pr-0 sm:pr-14 order-1">
                <div 
                className="h-56 sm:h-60 xl:h-72 aspect-square rounded-full overflow-hidden">
                  {!isHighQualityImageLoaded && (
                    <img className="w-full h-full object-cover object-center" src={lowImage} alt="Low Quality" />
                  )}
                  <motion.img 
                   style={{scale:scale}}
                  className="w-full h-full object-cover object-center" src={highImage} alt="High Quality" onLoad={() => setIsHighQualityImageLoaded(true)} />
                </div>
              </motion.div>
            </div>

            <motion.div
            initial={{
              opacity:0,
              translateY:500
              }}
              animate={{
                opacity:1,
                translateY:0
              }}
              transition={{
                delay:0.1,
                duration:.6
              }}
            className="row-span-1 flex flex-col sm:flex-row gap-6 xl:gap-32 ">
              <div className="sm:text-xl xl:text-3xl font-poppins font-semibold text-titleLight dark:text-titleDark flex items-center justify-center sm:justify-start mt-16 sm:mt-0">
                <p>Tech Stack</p>
              </div>
              <div className="flex flex-row md:justify-start justify-center items-center gap-3 sm:gap-6 xl:gap-16 ">
                <div className="xl:gap-4 flex items-center">
                  <span><img className="h-9 sm:h-10 md:h-14" src={getImage('css')} alt="CSS" /></span>
                  <span><img className="h-8 sm:h-9 md:h-12" src={getImage('html')} alt="HTML" /></span>
                </div>
                <div className="gap-2 sm:gap-6 flex items-center">
                  <span><img className="h-9 sm:h-10 md:h-14" src={getImage('js')} alt="JavaScript" /></span>
                  <span><img className="h-[1.6rem] sm:h-7 md:h-10" src={getImage('ts')} alt="TypeScript" /></span>
                </div>
                <div className="gap-3 sm:gap-6 flex items-center">
                  <span><img className="h-7 sm:h-8 md:h-11" src={getImage('react')} alt="React" /></span>
                  <span><img className="h-7 sm:h-8 md:h-11" src={getImage('node')} alt="Node.js" /></span>
                  <span><img className="h-7 sm:h-8 md:h-11" src={getImage('db')} alt="Database" /></span>
                  <span><img className="h-7 sm:h-8 md:h-11" src={getImage('ex')} alt="Express.js" /></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
