'use client'
import React, { useContext } from 'react'
import { AiOutlineMenu, AiOutlineClose, } from 'react-icons/ai'
import { MenuContext } from '@/context/MenuContext';


const Navbar = () => {
    const {toggle}  = useContext(MenuContext);

    return (
        <nav className=' bg-[#31353d] w-full h-16 shadow-sm shadow-slate-500 sm:pl-[15rem]'>
            <div className='flex items-center justify-between h-16'>
                <button onClick={toggle} className='order-2 sm:order-1 bg-[#3a3f48] text-[#6e768e] hover:bg-white ml-3 rounded-md h-[30px] shadow-md shadow-black/10 flex items-center justify-between mr-5'>
                <AiOutlineMenu size={25} />
                </button>
                <div className='order-1 sm:order-2 h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center text-center mr-10 ml-5'>
                    <span className='font-semibold text-sm'>SR</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar