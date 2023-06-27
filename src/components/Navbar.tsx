import React from 'react'

function Navbar() {
    return (
        <section className='flex w-full text-white p-5 bg-[#1f242d] justify-between nav sticky top-0'>
            <a href="" className='text-lg 2xl:text-5xl'>Julian Almanza Dev</a>
            <nav className='flex text-xl gap-3 nav__links barra'>
                <a href="#main" className='2xl:text-3xl nav__link navbar'>Home</a>
                <a href="#about" className='2xl:text-3xl nav__link navbar'>About</a>
                <a href="#services" className='2xl:text-3xl nav__link navbar'>Services</a>
                <a href="#projects" className='2xl:text-3xl nav__link navbar'>Portfolio</a>                
                <a href="#contact" className='2xl:text-3xl nav__link navbar'>Contact</a>
            </nav>
            <div className='flex absolute right-5 text-3xl'>
                <i className='bx bx-menu absolute nav__hamburguer'></i>
                <i className='bx bx-x nav__close'></i>
            </div>
        </section>
    )
}

export default Navbar