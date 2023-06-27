import React from 'react'

function Services() {
  return (
    <section id='services' className='flex flex-col justify-center items-center bg-[#1f242d] gap-5 h-[210vh] p-5'>
        <div>
            <h2 className='text-3xl'>Our <span className='text-span'>Services</span></h2>
        </div>
        <div className=' flex justify-between flex-wrap gap-1'>
            <div className='flex flex-col bg-page2 p-1 gap-2 w-[47%] hover:scale-[1.02] 2xl:w-[33%] 2xl:p-5'>
                <h3 className='text-xl font-bold te text-center'>Web Development</h3>
                <p className='text-lg'>Design and development of responsive and user-friendly web applications using modern front-end technologies and frameworks.</p>
                <a className='text-btn1 mx-auto bg-btn px-[2rem] py-[1rem] rounded-[4rem] btn' href="">Read More</a>
            </div>
            <div className='flex flex-col bg-page2 p-1 gap-2 w-[47%] hover:scale-[1.02] 2xl:w-[33%] 2xl:p-5'>
                <h3 className='text-xl font-bold te text-center'>Back-End Development</h3>
                <p className='text-lg'>Building robust and scalable server-side applications using languages like Node.js or Python, and integrating with databases such as MySQL or MongoDB.</p>
                <a className='text-btn1 mx-auto bg-btn px-[2rem] py-[1rem] rounded-[4rem] btn' href="">Read More</a>
            </div>
            <div className='flex flex-col bg-page2 p-1 gap-2 w-[47%] hover:scale-[1.02] 2xl:w-[33%] 2xl:p-5'>
                <h3 className='text-xl font-bold te text-center'>API Development</h3>
                <p className='text-lg'>Creating efficient and secure APIs (Application Programming Interfaces) to facilitate communication between different software components or third-party services.</p>
                <a className='text-btn1 mx-auto bg-btn px-[2rem] py-[1rem] rounded-[4rem] btn' href="">Read More</a>
            </div>
            <div className='flex flex-col bg-page2 p-1 gap-2 w-[47%] hover:scale-[1.02] 2xl:w-[33%] 2xl:p-5'>
                <h3 className='text-xl font-bold te text-center'>Database Management</h3>
                <p className='text-lg'>Designing and managing databases to ensure efficient data storage and retrieval, as well as optimizing queries for improved performance.</p>
                <a className='text-btn1 mx-auto bg-btn px-[2rem] py-[1rem] rounded-[4rem] btn' href="">Read More</a>
            </div>
            <div className='flex flex-col bg-page2 p-1 gap-2 w-[47%] hover:scale-[1.02] 2xl:w-[33%] 2xl:p-5'>
                <h3 className='text-xl font-bold te text-center'>Deployment and DevOps</h3>
                <p className='text-lg'>Deploying web applications to production environments, configuring servers, and implementing continuous integration/continuous deployment (CI/CD) pipelines.</p>
                <a className='text-btn1 mx-auto bg-btn px-[2rem] py-[1rem] rounded-[4rem] btn' href="">Read More</a>
            </div>
            <div className='flex flex-col bg-page2 p-1 gap-2 w-[47%] hover:scale-[1.02] 2xl:w-[33%] 2xl:p-5'>
                <h3 className='text-xl font-bold te text-center'>Collaboration and Communication</h3>
                <p className='text-lg'>Working closely with cross-functional teams, communicating project requirements and progress effectively, and participating in agile development processes.</p>
                <a className='text-btn1 mx-auto bg-btn px-[2rem] py-[1rem] rounded-[4rem] btn' href="">Read More</a>
            </div>
        </div>
    </section>
  )
}

export default Services