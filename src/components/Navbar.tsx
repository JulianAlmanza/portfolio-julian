'use client'
import { useState, useEffect } from 'react'
import style from '@/styles/Navbar.module.css'
import Link from 'next/link'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);    


    useEffect(() => {        
        // Verificar si se está ejecutando en el cliente antes de acceder al DOM
        if (typeof document !== 'undefined') {
            const barra = document.querySelector(`.${style.links}`) as HTMLElement;
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
        <section className={style.navbar}>
            <Link href="#" className={style.logo}>Julian Almanza Dev</Link>
            <nav className={style.links}>
                <Link href="#main" className={style.link}>Inicio</Link>
                <Link href="#about" className={style.link}>¿Quien Soy?</Link>
                <Link href="#services" className={style.link}>Servicios</Link>
                <Link href="#projects" className={style.link}>Portafolio</Link>
                <Link href="#contact" className={style.link}>Contacto</Link>
            </nav>
            <div className={style.menu__hamburguer}>
                <i className={style.menu + ` bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} absolute nav__hamburguer`} onClick={toggleMenu}></i>
            </div>
        </section>
    )
}

export default Navbar