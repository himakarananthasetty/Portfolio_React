import React from 'react'
import portfolioimg from '../assets/projects/portfolio.png'
import amaz from '../assets/projects/amazonclone.png'
// import imagewo from '/Users/himakarananthasetty/portfolio_himakar_react/src/assets/projects/workImg.jpeg'

const Work = () => {
  return (
    <div name='work' className=' w-full md:h-screen text-gray-300 bg-[#162554]' >
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-4'>Check out the things I have built.</p>
            </div>

{/* Container */}
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item 1  a trvta 3 closing div*/} 

                <div style={{backgroundImage:`url(${portfolioimg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span text-2xl font-bold text-while tracking-wider >
                        My Portfolio Application With React and TailWind CSS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                            </a>
                            <a href="https://github.com/himakarananthasetty/Portfolio_React">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${amaz})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span text-2xl font-bold text-while tracking-wider >
                        Amazon Clone With Next Js and Tail Wind CSS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://amazon-clone-himakar.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'> Demo</button>
                            </a>
                            <a href="https://github.com/himakarananthasetty/AmazonClone">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Work