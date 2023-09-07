import Main from '@/components/Main'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Main/>
      <About/>
      <Services/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>    
  )
}
