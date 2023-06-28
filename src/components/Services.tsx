import React from 'react'

function Services() {
  return (
    <section id='services' className='flex flex-col justify-center items-center text-white bg-[#1f242d] gap-5 h-[210vh] p-5 2xl:h-[120vh] '>
        <div>
            <h2 className='text-3xl 2xl:text-8xl'>Our <span className='text-span'>Services</span></h2>
        </div>
        <div className=' flex justify-between flex-wrap gap-1'>
            <div className='flex flex-col bg-page2 p-1 gap-2 w-[47%] hover:scale-[1.02] hover: 2xl:w-[32%] 2xl:p-8 2xl:h-[45vh] 2xl:mb-3'>
                <h3 className='text-xl text-green-400 font-bold te text-center 2xl:text-4xl'>Web Development</h3>
                <p className='text-lg 2xl:text-2xl'>Design and development of responsive and user-friendly web applications using modern front-end technologies and frameworks.</p>
                <a className='text-btn1 mx-auto bg-btn px-[2rem] py-[1rem] rounded-[4rem] btn my-auto 2xl:text-4xl' href="">Read More</a>
            </div>
            <div className='flex flex-col bg-page2 p-1 gap-2 w-[47%] hover:scale-[1.02] hover: 2xl:w-[32%] 2xl:p-8 2xl:h-[45vh] 2xl:mb-3'>
                <h3 className='text-xl text-green-400 font-bold te text-center 2xl:text-4xl'>Back-End Development</h3>
                <p className='text-lg 2xl:text-2xl'>Building robust and scalable server-side applications using languages like Node.js or Python, and integrating with databases such as MySQL or MongoDB.</p>
                <a className='text-btn1 mx-auto bg-btn px-[2rem] py-[1rem] rounded-[4rem] btn my-auto 2xl:text-4xl' href="">Read More</a>
            </div>
            <div className='flex flex-col bg-page2 p-1 gap-2 w-[47%] hover:scale-[1.02] hover: 2xl:w-[32%] 2xl:p-8 2xl:h-[45vh] 2xl:mb-3'>
                <h3 className='text-xl text-green-400 font-bold te text-center 2xl:text-4xl'>API Development</h3>
                <p className='text-lg 2xl:text-2xl'>Creating efficient and secure APIs (Application Programming Interfaces) to facilitate communication between different software components or third-party services.</p>
                <a className='text-btn1 mx-auto bg-btn px-[2rem] py-[1rem] rounded-[4rem] btn my-auto 2xl:text-4xl' href="">Read More</a>
            </div>
            <div className='flex flex-col bg-page2 p-1 gap-2 w-[47%] hover:scale-[1.02] hover: 2xl:w-[32%] 2xl:p-8 2xl:h-[45vh] 2xl:mb-3'>
                <h3 className='text-xl text-green-400 font-bold te text-center 2xl:text-4xl'>Database Management</h3>
                <p className='text-lg 2xl:text-2xl'>Designing and managing databases to ensure efficient data storage and retrieval, as well as optimizing queries for improved performance.</p>
                <a className='text-btn1 mx-auto bg-btn px-[2rem] py-[1rem] rounded-[4rem] btn my-auto 2xl:text-4xl' href="">Read More</a>
            </div>
            <div className='flex flex-col bg-page2 p-1 gap-2 w-[47%] hover:scale-[1.02] hover: 2xl:w-[32%] 2xl:p-8 2xl:h-[45vh] 2xl:mb-3'>
                <h3 className='text-xl text-green-400 font-bold te text-center 2xl:text-4xl'>Deployment and DevOps</h3>
                <p className='text-lg 2xl:text-2xl'>Deploying web applications to production environments, configuring servers, and implementing continuous integration/continuous deployment (CI/CD) pipelines.</p>
                <a className='text-btn1 mx-auto bg-btn px-[2rem] py-[1rem] rounded-[4rem] btn my-auto 2xl:text-4xl' href="">Read More</a>
            </div>
            <div className='flex flex-col bg-page2 p-1 gap-2 w-[47%] hover:scale-[1.02] hover: 2xl:w-[32%] 2xl:p-8 2xl:h-[45vh] 2xl:mb-3'>
                <h3 className='text-xl text-green-400 font-bold te text-center 2xl:text-4xl'>Collaboration and Communication</h3>
                <p className='text-lg 2xl:text-2xl'>Working closely with cross-functional teams, communicating project requirements and progress effectively, and participating in agile development processes.</p>
                <a className='text-btn1 mx-auto bg-btn px-[2rem] py-[1rem] rounded-[4rem] btn my-auto 2xl:text-4xl' href="">Read More</a>
            </div>
        </div>
    </section>
  )
}

export default Services