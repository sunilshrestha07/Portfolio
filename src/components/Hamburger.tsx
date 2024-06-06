import { useState } from "react"
import hamLight from "/images/hamLight.png"
import hamDark from "/images/hamDark.png"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export default function Hamburger() {
    const [isMenuActive,setIsMenuActive] = useState<boolean>(false)
    const isDarkModeActive = useSelector((state: RootState) => state.theme.isDarkMode);
    const handelMenu = () =>{
        setIsMenuActive(!isMenuActive)
    }
    const menuItems = [
        {  text: "Home" },
        {  text: "About" },
        {  text: "Products" },
        {  text: "Contacts" },
    ];
  return (
    <>
        <div className="">
            <img className=" h-7 grid justify-end pl-5" src={isDarkModeActive ? hamDark : hamLight } alt="" onClick={handelMenu} />
        </div>
        <div className={`${isMenuActive ? "":"hidden"}`}>
            <div className="absolute  bg-bgLight dark:bg-bgDark top-20 right-0 w-full h-screen flex flex-col p-10 gap-8">
                {menuItems.map((items,index)=>(
                    <div className=" flex flex-col text-xl text-end gap-32 cursor-pointer hover:text-hoverText" key={index}>
                        {items.text}
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
