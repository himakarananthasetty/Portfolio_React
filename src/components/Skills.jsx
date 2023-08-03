import React from 'react'
import JsImg from '../assets/javascript.png'
import AwsImg from '../assets/aws.png'
import CssImg from '../assets/css.png'
import HtmlImg from '../assets/html.png'
import ExpressImg from '../assets/express.png'
import PythonImg from '../assets/python.png'
import JavaImg from '../assets/java.png'
import MySQL from '../assets/mysql.png'
import DotNet from '../assets/NET_Core.png'
// import Django from '../assets/django.png'
import Docker from '../assets/docker.png'
import Spring from '../assets/springboot.png'
import Bootstrap from '../assets/bootstrap.png'
import Angular from '../assets/angular.png'




import GithubImg from '../assets/github.png'
import ReactImg from '../assets/react.png'
import TailwindImg from '../assets/tailwind.png'
import FirebaseImg from '../assets/firebase.png'
import MongoDbImg from '../assets/mongo.png'
import NodeJsImg from '../assets/node.png'



const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#162554] text-gray-300'>
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div >
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className= 'text-xl py-4'> These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaImg} alt="Html" />
                    <p className='my-4'>JAVA</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PythonImg} alt="Html" />
                    <p className='my-4'>PYTHON</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={DotNet} alt="Html" />
                    <p className='my-4'>DOTNET</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MySQL} alt="Html" />
                    <p className='my-4'>MYSQL</p>
                </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HtmlImg} alt="Html" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CssImg} alt="Html" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JsImg} alt="Html" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Spring} alt="Html" />
                    <p className='my-4'>SPRINGBOOT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={TailwindImg} alt="Html" />
                    <p className='my-4'>TAILWIND CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MongoDbImg} alt="Html" />
                    <p className='my-4'>MONGO DB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ExpressImg} alt="Html" />
                    <p className='my-4'>EXPRESS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="Html" />
                    <p className='my-4'>REACT.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={NodeJsImg} alt="Html" />
                    <p className='my-4'>NODE.js</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FirebaseImg} alt="Html" />
                    <p className='my-4'>FIREBASE</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GithubImg} alt="Html" />
                    <p className='my-4'>GITHUB</p>
                </div>
                {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Django} alt="Html" />
                    <p className='my-4'>DJANGO</p>
                </div> */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Angular} alt="Html" />
                <p className='my-4 py-5'>ANGULAR</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Bootstrap} alt="Html" />
                <p className='my-4 py-5'>BOOTSTRAP</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Docker} alt="Html" />
                    <p className='my-4 py-5'>DOCKER</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={AwsImg} alt="Html" />
                    <p className='my-4'>AWS</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills