import React from 'react'
import Logo from "../assets/logo.webp"

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>ClassHub</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#service" className='hover:text-gray-400'>Study Material</a>
                <a href="#project" className='hover:text-gray-400'>Lecture Video's</a>
                <a href="#contact" className='hover:text-gray-400'>Assignment's</a>
                <a href="#contact" className='hover:text-gray-400'>Time Table</a>
            </div>
            <img src={Logo} alt="" className='h-10 w-12'/>
        </div>
    </nav>
  )
}

export default Navbar