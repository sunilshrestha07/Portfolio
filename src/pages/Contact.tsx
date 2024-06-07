import mail from "/images/emailLight.png"
import phone from "/images/phoneLight.png"
import { paddingForPages } from "../defineSize"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export default function Contact() {
    const isDarkModeActive = useSelector((state:RootState)=>state.theme.isDarkMode)
  return (
    <>
        <div className="">
            <div className={isDarkModeActive ? "dark" : ""}>
                <div className={`flex flex-col gap-10 ${paddingForPages} py-20 bg-bgLight dark:bg-bgDark  transition ease-in-out duration-300`}>
                    <div className=" flex flex-col gap-3 text-center sm:text-start">
                        <p className=" font-poppins font-bold text-hoverText text-4xl ">Contact me</p>
                        <p className=" font-poppins font-bold text-xl sm:text-2xl text-titleLight dark:text-titleDark ">Don't be shy! Hit me up! 👇</p>
                    </div>
                    <div className=" flex flex-col gap-16 sm:flex-row justify-between lg:justify-start lg:gap-56 sm:items-center">
                        <div className=" flex flex-col  sm:flex-row gap-3 items-center">
                            <div className=" h-11 xl:h-14 aspect-square bg-white shadow-custom-black dark:shadow-custom-white p-2 rounded-full flex flex-row justify-center items-center">
                                <img className="h-6 xl:h-8" src={mail} alt="" />
                            </div>
                            <div className=" flex flex-col items-center sm:items-start">
                                <p className=" text-sm xl:text-base font-poppins font-bold text-titleLight dark:text-titleDark">Mail</p>
                                <p className="text-sm xl:text-base font-mulish font-semibold text-titleLight dark:text-titleDark opacity-70">suneelshrestha9@gmail.com</p>
                            </div>
                        </div>
                        <div className=" flex flex-col  sm:flex-row gap-3 items-center">
                            <div className=" h-11 xl:h-14 aspect-square bg-white shadow-custom-black dark:shadow-custom-white p-2 rounded-full flex flex-row justify-center items-center">
                                <img className="h-6 xl:h-8" src={phone} alt="" />
                            </div>
                            <div className=" flex flex-col items-center sm:items-start">
                                <p className=" text-sm xl:text-base font-poppins font-bold text-titleLight dark:text-titleDark">Phone</p>
                                <p className="text-sm xl:text-base font-mulish font-semibold text-titleLight dark:text-titleDark opacity-70">+977 9808048030</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
