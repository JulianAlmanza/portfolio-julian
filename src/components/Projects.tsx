import React from 'react'
import Image from 'next/image'

function Projects() {
  return (
    <section id='projects' className='bg-page2 h-[100vh]'>
      <h2 className='text-3xl text-center'>Latest  <span className='text-span'>Project</span></h2>
      <div className='flex w-[95%] m-auto gap-3 justify-center items-center '>
        <div className='w-[820px] h-[400px] relative px-2 flex'>
          <a href="https://modidecor-md-julianalmanza.vercel.app/" target='_blank'>
            <Image src={'/image/projects/Captura 3.jpg'} alt='' layout='fill' className='object-cover w-[100%] h-[100%] flex' />
          </a>

        </div>
        <p className='text-white text-2xl w-[735px]'>Web page for the company ModidecorMD dedicated to the manufacture of furniture. <span className='text-cyan-500'>Made with NextJS (React, Typescript, HTML5, CSS) </span></p>
      </div>
    </section>
  )
}

export default Projects