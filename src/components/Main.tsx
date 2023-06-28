import React from 'react'
import Image from 'next/image'

function Main() {
    return (
        <section id='main' className='flex bg-[#1f242d] justify-center items-center flex-wrap h-[94vh] w-[100%] p-5'>
            <div className='flex flex-col text-white  text-xl gap-8 w-[100%] md:w-[50%] md:p-4'>
                <div>                    
                    <h3 className='text-xl 2xl:text-7xl'>Hello, It`s <span className='text-[#00EEFF]'>Me!</span></h3>
                    <h1 className='text-3xl 2xl:text-8xl text-green-400'>Julian Almanza</h1>
                    <h3 className='text-xl 2xl:text-7xl'>And I`m a&nbsp;<span className=' text-[#00EEFF]'>FullStack Developer</span></h3>
                    <p className='text-lg 2xl:text-4xl'>Developer full stack trainee form Colombia. With skills in different programming languages 💻⭐</p>
                </div>
                <div className='flex gap-8 justify-center items-center 2xl:gap-16 2xl:justify-start'>
                    <a className='inline-flex justify-center items-center text-[#0ef] text-[2rem] border-[0.2rem] border-[#0eef] rounded-[50%] p-1 Link 2xl:text-7xl' href="https://www.facebook.com/julian.almanza1930"><i className='bx bxl-facebook' ></i></a>
                    <a className='inline-flex justify-center items-center text-[#0ef] text-[2rem] border-[0.2rem] border-[#0eef] rounded-[50%] p-1 Link 2xl:text-7xl' href="https://www.instagram.com/julian30_07/"><i className='bx bxl-instagram-alt' ></i></a>
                    <a className='inline-flex justify-center items-center text-[#0ef] text-[2rem] border-[0.2rem] border-[#0eef] rounded-[50%] p-1 Link 2xl:text-7xl' href="https://github.com/JulianAlmanza"><i className='bx bxl-github' ></i></a>
                    <a className='inline-flex justify-center items-center text-[#0ef] text-[2rem] border-[0.2rem] border-[#0eef] rounded-[50%] p-1 Link 2xl:text-7xl' href="https://www.linkedin.com/in/julian-almanza-dev/"><i className='bx bxl-linkedin'></i></a>
                </div>
                <a className='h-max self-center text-2xl px-4 py-2 text-btn1 bg-[#0ef] rounded-[4rem] btn 2xl:text-6xl 2xl:px-16 2xl:py-8 2xl:self-start' href="/dates/CV.pdf" download="CV-Julian-Almanza.pdf">Downloaded CV</a>
            </div>
            <div className='flex justify-center items-center w-[100%] md:w-[50%]'>
                <Image className='object-cover rounded-[50%] min-w-min w-[80vh] h-[40vh] 2xl:h-[80vh]' src={"/image/IMG20230128161913.jpg"} alt='' width={800} height={600}></Image>
            </div>
        </section>
    )
}

export default Main