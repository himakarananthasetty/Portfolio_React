import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
// import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#162554]'>

    {/* Container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-2xl text-red-500'> Hello world, my name is</p>
    <h1 className='text-5xl sm:text-7xl font-bold text-[#f7f7f8]'>Himakar Ananthasetty</h1>
    <h2 className='text-3xl sm:text-7xl font-bold text-[#acaeb5]'>I am a Full Stack Web Developer.</h2>
    <p className='text-[#edeb4e]'>Welcome to my portfolio! As a Full Stack Web Developer, I strive to create dynamic and engaging digital experiences. 
    With a diverse skill set encompassing both front-end and back-end technologies, I specialize in developing robust and user-friendly web applications. 
    Take a moment to explore my portfolio, where you will find a collection of projects that showcase my technical expertise, problem-solving abilities, and commitment to delivering high-quality solutions. 
    From responsive designs to seamless integrations, I am dedicated to creating exceptional digital experiences that leave a lasting impact. 
    Dive in and discover the world of web development through my eyes.</p>
     <div>
  <a href="https://github.com/himakarananthasetty?tab=repositories">
    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-xl'>
      View Work
      <span className='group-hover:-rotate-180 duration-500'>
      {/* <span className='group-hover:rotate-45 duration-500'> */}
        <HiArrowNarrowRight className='ml-3'/>
      </span>
    </button>
  </a>
</div> 

{/* <Link 
  to="work"  // Replace 'sectionId' with the ID of the target section you want to scroll to
  smooth={true}
  offset={-50}     // Adjust the offset value as needed to align the scroll position
  duration={500}   // Set the duration of the scroll animation
  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
  View Work
  <span className='group-hover:rotate-90 duration-500'>
    <HiArrowNarrowRight className='ml-3' />
  </span>
  </Link> */}


    </div>

    </div>


  )
}

export default Home