'use client'
import { useState, useEffect } from 'react'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);    


    useEffect(() => {
        const barra = document.querySelector('.barra');
        // Verificar si se está ejecutando en el cliente antes de acceder al DOM
        if (typeof document !== 'undefined') {
            const barra = document.querySelector('.barra');
            // Verifica si el elemento existe antes de realizar operaciones
            if (barra && screen.width <= 767) {
                // Realiza operaciones con el elemento
                barra.style.display = isMenuOpen ? 'grid' : 'none';
                // Ajusta otros estilos o funcionalidades según sea necesario
            }
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);        
    };

    return (
        <section className='flex w-full text-gray-500 p-5 bg-[#1f242d] justify-between nav sticky top-0'>
            <a href="" className='text-lg text-green-400 md:text-3xl  2xl:text-5xl'>Julian Almanza Dev</a>
            <nav className='flex text-xl  gap-3 nav__links barra'>
                <a href="#main" className='2xl:text-3xl nav__link navbar'>Home</a>
                <a href="#about" className='2xl:text-3xl nav__link navbar'>About</a>
                <a href="#services" className='2xl:text-3xl nav__link navbar'>Services</a>
                <a href="#projects" className='2xl:text-3xl nav__link navbar'>Portfolio</a>
                <a href="#contact" className='2xl:text-3xl nav__link navbar'>Contact</a>
            </nav>
            <div className='flex absolute right-[50px] text-3xl text-white'>
                <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} absolute nav__hamburguer`} onClick={toggleMenu}></i>
            </div>
        </section>
    )
}

export default Navbar