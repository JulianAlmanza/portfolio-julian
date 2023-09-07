import React from 'react'
import Image from 'next/image'
import style from '@/styles/Project.module.css'

function Projects() {
  return (
    <section id='projects' className={style.projects}>
      <h2 className={style.title}>Latest  <span className={style.span}>Project</span></h2>
      <h2 className={style.name}>Modidecor MD</h2>
      <div className={style.box}>
        <p className={style.description}>Web page for the company ModidecorMD dedicated to the manufacture of furniture. <span className={style.skills}>Made with NextJS (React, Typescript, HTML5, CSS) </span></p>
        <div className={style.image}>
          <a href="https://modidecor-md-julianalmanza.vercel.app/" target='_blank'>
            <Image src={'/image/Projects/Captura 3.jpg'} alt='' layout='fill' className={style.img} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects