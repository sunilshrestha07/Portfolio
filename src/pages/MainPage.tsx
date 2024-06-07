import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
export default function MainPage() {
  return (
    <>
      <Navbar/>
      <div id="home" className="">
        <Home/>
      </div>
      <div id="about" className="">
        <About/>
      </div>
      <div id="projects" className="">
        <Projects/>
      </div>
      <div id="contact" className="">
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}
