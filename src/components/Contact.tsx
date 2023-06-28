import React from 'react'

function Contacto() {
  return (
    <section id='contact' className='flex flex-col justify-center items-center bg-page1 h-[85vh] gap-5 '>
      <h2 className='text-3xl 2xl:text-8xl'>Contact <span className='text-span'>Me!</span></h2>
      <form action="" className='flex-row justify-center items-center flex-wrap md:text-xl 2xl:text-3xl w-[85%] 2xl:h-[80%]'>
        <div className='mb-5 w-100% 2xl:flex 2xl:justify-between'>
          <input className='flex bg-page2 w-[100%] h-[3rem] p-5 2xl:w-[48%] 2xl:m-0 mb-5 2xl:h-[5rem]' type="text" placeholder='Full Name' />
          <input className='flex bg-page2 w-[100%] h-[3rem] p-5 2xl:w-[48%] 2xl:m-0 2xl:h-[5rem]' type="email" placeholder='Email Address - example@gmail.com' />
        </div>
        <div className='mb-5 2xl:flex 2xl:justify-between'>
          <input className='flex bg-page2 w-[100%] h-[3rem] p-5 2xl:w-[48%] 2xl:m-0 2xl:mr-2 mb-5 2xl:h-[5rem]' type="number" placeholder='Movil Number' />
          <input className='flex bg-page2 w-[100%] h-[3rem] p-5 2xl:w-[48%] 2xl:m-0 2xl:h-[5rem]' type="text" placeholder='Email Subject' />
        </div>

        <textarea className='w-[100%] h-[8rem] 2xl:h-[12rem] bg-page2 mb-5 p-5 2xl:mb-20' placeholder='Your Message'></textarea>        
          <a className='h-max text-xl text-btn2 bg-btn rounded-[4rem] px-[2rem] py-[1rem] btn 2xl:text-6xl 2xl:px-16 2xl:py-8 2xl:mt-6 2xl:ml-[28rem]' href="">Send  Message</a>               
      </form>
    </section>
  )
}

export default Contacto