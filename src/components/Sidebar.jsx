'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { BsHouseDoor, BsFillBriefcaseFill, BsGear, BsQuestionCircle } from "react-icons/bs";
import { BsChevronRight } from 'react-icons/bs'

import { usePathname } from 'next/navigation'
import { MenuContext } from '@/context/MenuContext';

const Sidebar = () => {
    const asideStyle ="overflow-y-auto fixed light:bg-[#fff] bg-[#31353d] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-200 ease-in-out"

    const pathname = usePathname()
const {open, toggle} = useContext(MenuContext)

    return (
        <aside className={`${asideStyle} ${open ? 'w-[15rem]' : 'w-0'}`}>
            <div className='sidebar-top relative flex item-center py-5 px-3.5'>
                <Image alt='' src='/logo.png' className='w-12 mx-3.5 min-h-fit ' width={35} height={35}></Image>
                <h3 className='pl-2 font-bold text-2xl text-[#e6e9ee] min-w-max pt-2'>
                    Dashboard</h3>
            </div>
            <div className='flex flex-col gap-2 transition duration-300 ease-in-out'>
                <div className=''>
                    <ul className='flex flex-col gap-2 transition duration-300 ease-in-out'>
                        <li>
                            <a href="/"  className={`ml-3 mr-3 font-semibold flex gap-2 py-2 px-4 ${pathname === '/' ? 'text-white bg-[#3a3f48] rounded-md min-w-[18px] min-h-[40px]' : 'hover:text-white'}`}>
                                <BsHouseDoor size={20} />
                                <span className='ml-3 font-semibold'>Dashboard</span>
                            </a>
                        </li>
                        <li className=''>
                            <a href="/project" onClick={toggle} className={`ml-3 mr-3 font-semibold flex items-center gap-2 py-2 px-4 ${pathname === '/project' ? 'text-white bg-[#3a3f48] rounded-md min-w-[18px] min-h-[40px]' : 'hover:text-white'}`}>
                                <MdOutlineFeaturedPlayList size={20} />
                                <span className='ml-3 font-semibold'>Project</span>
                                <BsChevronRight className='ml-auto stroke-2 text-xs' />
                            </a>
                            <ul className={`grid gap-y-2 overflow-hidden ${open ? 'px-10 py-3' : 'w-0'}`}>
                                <li>
                                    <a href="/all">All</a>
                                </li>
                                <li>
                                    <a href="/new">New</a>
                                </li>
                            </ul>
                        </li>
                        <li >
                            <a href="/career" className={`ml-3 mr-3 font-semibold flex items-center gap-2 py-2 px-4 ${pathname === '/career' ? 'text-white bg-[#3a3f48] rounded-md min-w-[18px] min-h-[40px]' : 'hover:text-white'}`}>
                                <BsFillBriefcaseFill size={20} />
                                <span className='ml-3 font-semibold'>Career</span>
                                <BsChevronRight className='ml-auto stroke-2 text-xs' />
                            </a>
                            <ul className='grid gap-y-2 px-10 py-3'>
                                <li>
                                    <a href="/all">All</a>
                                </li>
                                <li>
                                    <a href="/new">New</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/account" className={`ml-3 mr-3 font-semibold flex gap-2 py-2 px-4 ${pathname === '/account' ? 'text-white bg-[#3a3f48] rounded-md min-w-[18px] min-h-[40px]' : 'hover:text-white'}`}>
                                <BsGear size={20} />
                                <span className='ml-3 font-semibold'>Account</span>
                            </a>
                        </li>
                        <li>
                            <a href="/help" className={`ml-3 mr-3 font-semibold flex gap-2 py-2 px-4 ${pathname === '/help' ? 'text-white bg-[#3a3f48] rounded-md min-w-[18px] min-h-[40px]' : 'hover:text-white'}`}>
                                <BsQuestionCircle size={20} />
                                <span className='ml-3 font-semibold'>Help</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar