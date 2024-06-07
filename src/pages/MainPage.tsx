import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import { motion } from "framer-motion"
export default function MainPage() {

  return (
    <>
      <div className="z-50 sticky top-0">
        <Navbar/>
      </div>

      <div id="home" className="">
        <Home/>
      </div>

      <motion.div 
      initial={{
      opacity:0,
      translateX:-50
      }}
      whileInView={{opacity:1,
      translateX:0,
      transition:{delay:0.2,duration:.8,}}}
      viewport={{ once: true,amount:0.5 }}
      id="about" className="">
        <About/>
      </motion.div>

      <div id="projects" className="">
        <Projects/>
      </div>

      <motion.div 
      initial={{
        opacity:0,
        translateX:-50
        }}
        whileInView={{opacity:1,
        translateX:0,
        transition:{delay:0.2,duration:.8,}}}
        viewport={{ once: true,amount:0.5 }}
      id="contact" className="">
        <Contact/>
      </motion.div>
      <Footer/>
    </>
  )
}
