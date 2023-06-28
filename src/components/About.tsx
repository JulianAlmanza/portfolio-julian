import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <section id='about' className='flex justify-center items-center flex-wrap text-white bg-[#323946] h-[100vh] p-5 pt-[6vh]'>
        <div className='flex justify-start 2xl:w-[50%]'>
        <Image className='object-cover rounded-[50%] min-w-min w-[80vh] h-[40vh] 2xl:h-[80vh]' src={"/image/IMG20230128161913.jpg"} alt='' width={800} height={600}></Image>
        </div>
        <div className='flex flex-col gap-2 2xl:w-[50%] 2xl:gap-8'>
            <h3 className='text-3xl text-center 2xl:text-8xl'>About <span className='text-[#0ef]'>Me!</span></h3>
            <h2 className='text-xl text-green-400 2xl:text-6xl '>FullStack Developer</h2>
            <p className='text-lg 2xl:text-4xl '>Data Systematization Technologist graduate from the Francisco José de Caldas District University. I am a fullstack developer with experience in different languages and technologies. My passion for technology and my ability to solve problems have led me to stand out in my career. I am a proactive person, with teamwork skills and the ability to learn quickly.</p>
            <a className='inline-block text-xl text-[#323946] bg-[#0ef] rounded-[4rem] mx-auto px-[2rem] py-[1rem] btn 2xl:text-6xl 2xl:px-16 2xl:py-8' href="">Read More</a>
        </div>  

    </section>
  )
}

export default About