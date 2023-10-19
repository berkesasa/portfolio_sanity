"use client"
import { Disclosure, Transition } from "@headlessui/react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import ThemeButton from "./ThemeButton"
import { motion } from "framer-motion"
import { Typewriter } from 'react-simple-typewriter'
import { useState } from "react"



function Navbar() {

    const [startTyping, setStartTyping] = useState(false);

    let pathname = usePathname() || ''

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div
                        className={`${pathname === '/' ? 'hidden' : ''} transition-all duration-300 top-0 left-0 w-full z-50 right-0 top bg-white dark:bg-sasaDark border-b-2 border-black dark:border-white fixed`}>
                        <div className="container">
                            <div className="flex justify-between h-16">
                                <div className="flex justify-between w-full">
                                    {/* Logo */}
                                    <motion.div
                                        initial={{ x: -500, opacity: 0, scale: 0.5 }}
                                        animate={{ x: 0, opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6 }}
                                        className="flex items-center">
                                        <Link
                                            onMouseEnter={() => setStartTyping(true)}
                                            onMouseLeave={() => setStartTyping(false)}
                                            className="text-2xl font-medium group relative"
                                            href="/home">
                                            <div className="group-hover:opacity-0 transition-all ease-in-out whitespace-nowrap">Berke <span className="text-sasaGreenLM dark:text-sasaGreenDM">SASA</span></div>
                                            {startTyping && (
                                                <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out whitespace-nowrap">
                                                    <Typewriter
                                                        cursor
                                                        cursorColor='#16B09F'
                                                        delaySpeed={100}
                                                        words={['Berke SASA']}
                                                        typeSpeed={100}
                                                        deleteSpeed={50}
                                                        stopBlinkinOnComplete
                                                    />
                                                </div>)}
                                        </Link>
                                    </motion.div>

                                    {/* Desktop Navbar */}
                                    <motion.div
                                        initial={{ x: 500, opacity: 0, scale: 0.5 }}
                                        animate={{ x: 0, opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6 }}
                                        className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                                        <Link
                                            href="/home"
                                            prefetch
                                            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-black ${pathname === "/home" ? 'border-sasaGreenLM dark:border-sasaGreenDM dark:text-white ' : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white'} `}>
                                            Home
                                        </Link>
                                        <Link
                                            href="/about"
                                            prefetch
                                            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-black ${pathname === "/about" ? 'border-sasaGreenLM dark:border-sasaGreenDM dark:text-white' : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white'} `}>
                                            About
                                        </Link>
                                        <Link
                                            href="/projects"
                                            prefetch
                                            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-black ${pathname === "/projects" ? 'border-sasaGreenLM dark:border-sasaGreenDM dark:text-white' : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white'} `}>
                                            Projects
                                        </Link>
                                        <Link
                                            href="/contact"
                                            prefetch
                                            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-black ${pathname === "/contact" ? 'border-sasaGreenLM dark:border-sasaGreenDM dark:text-white' : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white'} `}>
                                            Contact
                                        </Link>
                                        <ThemeButton />
                                    </motion.div>
                                </div>

                                {/* Mobile Navbar */}
                                <div className="-mr-2 flex items-center space-x-1 sm:hidden">
                                    <ThemeButton />
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sasaGreenLM dark:hover:bg-gray-800">
                                        {open ? (
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        ) : (
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                            </svg>
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Transition
                        enter="transition duration-700 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-500 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >

                        <Disclosure.Panel static className="sm:hidden mt-[70px]">
                            <div className={`pb-2 space-y-1`}>
                                <Link
                                    href="/home"
                                    prefetch
                                    className={`py-2 text-center block dark:text-white ${pathname === "/home" ? "bg-sasaGreenLM/20 dark:bg-sasaGreenDM/40 border-sasaGreenLM text-black dark:border-sasaGreenDM border-l-4 text-base font-medium" : "border-transparent dark:bg-gray-700 dark:text-white"}`}>
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    prefetch
                                    className={`py-2 text-center block dark:text-white ${pathname === "/about" ? "bg-sasaGreenLM/20 dark:bg-sasaGreenDM/40 border-sasaGreenLM text-black dark:border-sasaGreenDM border-l-4 text-base font-medium" : "border-transparent dark:bg-gray-700 dark:text-white"}`}>
                                    About
                                </Link>
                                <Link
                                    href="/projects"
                                    prefetch
                                    className={`py-2 text-center block dark:text-white ${pathname === "/projects" ? "bg-sasaGreenLM/20 dark:bg-sasaGreenDM/40 border-sasaGreenLM text-black dark:border-sasaGreenDM border-l-4 text-base font-medium" : "border-transparent dark:bg-gray-700 dark:text-white"}`}>
                                    Projects
                                </Link>
                                <Link
                                    href="/contact"
                                    prefetch
                                    className={`py-2 text-center block dark:text-white ${pathname === "/contact" ? "bg-sasaGreenLM/20 dark:bg-sasaGreenDM/40 border-sasaGreenLM text-black dark:border-sasaGreenDM border-l-4 text-base font-medium" : "border-transparent dark:bg-gray-700 dark:text-white"}`}>
                                    Contact
                                </Link>
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure >
    )
}

export default Navbar