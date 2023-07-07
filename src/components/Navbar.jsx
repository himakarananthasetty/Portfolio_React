import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
// import {AiOutlineProfile} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed  w-full h-[80px] flex justify-between items-center px-4 bg-[#162554] text-gray-300 '>
        <div>
            
            <img  src={Logo} alt="/logo" style={{width: '100px'}} />
            
        </div>
        <ul className='hidden md:flex'>
            <li>
            <Link to='home' smooth={true} offset={50} duration={500}>
          Home
        </Link>
            </li>
            <li> 
             <Link to='about' smooth={true} offset={50} duration={500}>
          About
        </Link></li>
            <li>
            <Link to='skills' smooth={true} offset={50} duration={500}>
          Skills
        </Link>
            </li>
            <li>
            <Link to='work' smooth={true} offset={50} duration={500}>
          Work
        </Link>
            </li>
            <li>
            <Link to='contacts' smooth={true} offset={50} duration={500}>
          Contact
        </Link>
            </li>
        </ul>

{/*Menu */}
    <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
    </div>
{/* Mobile Menu*/}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#162554] flex flex-col justify-center items-center'}>
    <li  className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} offset={50} duration={500}>
          Home
        </Link></li>
    <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} offset={50} duration={500}>
          About
        </Link></li>
    <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} offset={50} duration={500}>
          Skills
        </Link></li>
    <li className='py-6 text-4xl'><Link onClick={handleClick} to='work' smooth={true} offset={50} duration={500}>
          Work
        </Link></li>
    <li className='py-6 text-4xl'><Link onClick={handleClick} to='contacts' smooth={true} offset={50} duration={500}>
          Contact
        </Link></li>
    </ul>
{/* Social icons */}
    <div className='hidden  lg:flex fixed flex-col top-[35%] left-0'>
<ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 rounded-xl'>
        <a className='flex justify-between items-center w-full text-gray-200' href="https://www.linkedin.com/in/himakarananthasetty/"> LinkedIn <FaLinkedin size={30} /></a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#181c23] rounded-xl'>
        <a className='flex justify-between items-center w-full text-black-200' href="https://github.com/himakarananthasetty"> Github <FaGithub size={30} /></a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400 rounded-xl'>
        <a className='flex justify-between items-center w-full text-gray-200' href="mailto:himakarananthasetty@gmail.com"> Mail <HiOutlineMail size={30} /></a>
    </li>

    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-xl'>
        <a className='flex justify-between items-center w-full text-gray-200' href='mailto:himakarananthasetty@gmail.com'> Message <BsFillPersonLinesFill size={30} /></a>
    </li>
</ul>
    </div>

    </div>
  )
}

export default Navbar