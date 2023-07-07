import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#162554] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
                    About
                </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
        <div className='sm:text-right text-4xl font-bold'>
            <p>Hi! I'm Himakar, nice to meet you. Please take a look around.</p>
        </div>
        <div>
            <p>
            As a Full Stack Developer, I possess a versatile skill set encompassing front-end and back-end technologies, enabling me to create comprehensive web and mobile applications. With expertise in JavaScript, React.js, Node.js, Python, Django, MySQL, and MongoDB, I am equipped to develop robust and user-friendly solutions that seamlessly integrate across platforms.

            </p>
        </div>

            </div>
        </div>
        </div>
  )
}

export default About