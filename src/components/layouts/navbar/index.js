import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [sideBar, setSideBar] = useState(false)
    return (
        <nav className='flex justify-between border items-center px-20 sticky top-0 bg-white'>
            <div className='flex items-center'>
                <div className='w-[150px] h-[70px] overflow-hidden'>
                    <img src="/logo.png" alt="" className='relative w-[100px] scale-150 -top-5' />
                </div>
                <div className='md:flex gap-4 font-semibold hidden'>
                    <Link className='hover:text-green-700'>Home</Link>
                    <Link className='hover:text-green-700'>Courses</Link>
                    <Link className='hover:text-green-700'>About Us</Link>
                    <Link className='hover:text-green-700'>Contact</Link>
                </div>
            </div>
            <div>
                <Link className='hover:text-green-700 hidden md:block'>login</Link>
                <FiMenu className='md:hidden w-5 hover:text-green-700' onClick={() => setSideBar(true)} />
            </div>
            <SideBar sideBar={sideBar} setSideBar={setSideBar} />
        </nav>
    )
}
function SideBar({ sideBar, setSideBar }) {
    return (
        <div className={`fixed top-0 ${sideBar ? 'right-0' : '-right-[100%]'} bg-white border-l w-72 h-[100vh] md:hidden transition-all ease-linear p-4`}>
            <div className='flex gap-5 items-center border-b'>
                <IoClose onClick={() => setSideBar(false)} className='text-2xl text-zinc-500 hover:text-zinc-900' />
                <div className='w-[150px] h-[70px] overflow-hidden'>
                    <img src="/logo.png" alt="" className='relative w-[100px] scale-150 -top-5' />
                </div>

            </div>
            <div className='flex flex-col gap-4 mt-8'>
                <Link className='hover:bg-green-100 p-2'>Login</Link>
                <Link className='hover:bg-green-100 p-2'>Home</Link>
                <Link className='hover:bg-green-100 p-2'>Courses</Link>
                <Link className='hover:bg-green-100 p-2'>About Us</Link>
                <Link className='hover:bg-green-100 p-2'>Contact</Link>
            </div>
        </div>
    )
}
export default Navbar