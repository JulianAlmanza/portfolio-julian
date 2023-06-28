import Main from '@/components/Main'
import Contacto from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'

export default function Home() {
  return (
   <section className='font-poppins scroll-smooth'>
      <Navbar/>
      <main>
        <Main/>
        <About/>
        <Services/>
        <Projects/>
        <Contacto/>
      </main>
      <Footer/>      
   </section>
  )
}
