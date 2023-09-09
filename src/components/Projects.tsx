import React from 'react'
import Image from 'next/image'
import style from '@/styles/Project.module.css'

function Projects() {
  return (
    <section id='projects' className={style.projects}>
      <h2 className={style.title}>Ultimos  <span className={style.span}>Proyectos</span></h2>
      <h2 className={style.name}>Modidecor MD</h2>
      <div className={style.box}>
        <p className={style.description}>Página web de la empresa ModidecorMD dedicada a la fabricación de muebles. <span className={style.skills}>Hecho con NextJS (React, Typecript, HTML5, CSS)</span></p>
        <div className={style.image}>
          <a href="https://modidecor-md-julianalmanza.vercel.app/" target='_blank'>
            <Image src={'/image/Projects/Captura3.jpg'} alt='' layout='fill' className={style.img} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects