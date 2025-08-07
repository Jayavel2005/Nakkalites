import React from 'react'
import logo from "../assets/logo.png"




const Navbar = () => {
    return (
        <nav className='flex justify-between px-10  items-center  py-2 font-poppins'>
            <img src={logo} alt="logo" className='h-20' />

            <div className='flex items-center justify-center max-md:hidden'>
                <ul className='flex gap-5 bg-white p-5 px-10 rounded-full text-sm'>
                    <li>Home</li>
                    <div className='border-s text-gray-500 rounded-full'></div>
                    <li>About</li>
                    <div className='border-s text-gray-500 rounded-full'></div>
                    <li>Events</li>
                    <div className='border-s text-gray-500 rounded-full'></div>
                    <li>Business &amp; Careers</li>
                </ul>
            </div>
            <button className='bg-[#0B9CFF] px-5 py-3 text-white rounded-full'>Contact <i className='bi bi-arrow-right'></i></button>

        </nav>
    )
}

export default Navbar
