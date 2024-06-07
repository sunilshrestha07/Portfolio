import linkedIn from "/images/linkedinDark.png"
import github from "/images/githubDark.png"
import { paddingForPages } from "../defineSize"

export default function Footer() {
  return (
    <>
     <footer>
        <div className={`bg-black opacity-80 flex flex-col gap-6 sm:flex-row  sm:justify-between items-center py-14 ${paddingForPages}`}>
            <div className=" font-poppins font-bold sm:text-base xl:text-xl text-titleDark flex flex-row text-center sm:text-start">
                <p>Copyright &copy; 2024. All Rights Reserved.</p>
            </div>
            <div className=" flex flex-row gap-8 px-4">
                <img className=" h-7" src={linkedIn} alt="" />
                <img className=" h-7" src={github} alt="" />
            </div>
        </div>
     </footer>
    </>
  )
}
