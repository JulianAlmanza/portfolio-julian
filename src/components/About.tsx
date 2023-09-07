import React from 'react'
import Image from 'next/image'
import style from "@/styles/About.module.css";

function About() {
  return (
    <section id='about' className={style.about}>
        <div className={style.image}>
        <Image className={style.img} src={"/image/IMG20220616113027.jpg"} alt='' layout='fill'></Image>
        </div>
        <div className={style.box}>
            <h3 className={style.title}>¡Acerca de <span className={style.span}>Mi!</span></h3>
            <h2 className={style.opc}>Desarrollador FullStack</h2>
            <p className={style.description}>Tecnólogo en Sistematización de Datos egresado de la Universidad Distrital Francisco José de Caldas. Soy un desarrollador fullstack con experiencia en diferentes lenguajes y tecnologías. Mi pasión por la tecnología y mi capacidad para resolver problemas me han llevado a destacar en mi carrera. Soy una persona proactiva, con capacidad de trabajo en equipo y capacidad de aprender rápidamente.</p>            
        </div>  

    </section>
  )
}

export default About