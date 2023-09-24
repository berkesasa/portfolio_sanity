"use client"
import { Disclosure, Transition } from "@headlessui/react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import ThemeButton from "./ThemeButton"
import { motion } from "framer-motion"



function Navbar() {
    

    let pathname = usePathname() || ''

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div
                    className={`top-0 left-0 w-full z-50 right-0 fixed ${pathname === "/" ? '' : ' bg-white dark:bg-[#090908]'} `}>
                        <div className="container">
                            <div className="flex justify-between h-16">
                                <div className="flex justify-between w-full">
                                    {/* HomePage */}
                                    <motion.div
                                    initial={{ x: -500, opacity: 0, scale: 0.5 }}
                                    animate={{ x: 0, opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    className="flex items-center">
                                        <Link href="/">
                                            <h1 className="text-2xl font-medium">
                                                Berke <span className="text-teal-500">SASA</span>
                                            </h1>
                                        </Link>
                                    </motion.div>
    
                                    {/* Desktop Navbar */}
                                    <motion.div
                                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                                    animate={{ x: 0, opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                                        <Link
                                            href="/"
                                            prefetch
                                            className={`${pathname === "/" ? 'border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'} `}>
                                            Home
                                        </Link>
                                        <Link
                                            href="/guestbook"
                                            prefetch
                                            className={`${pathname === "/guestbook" ? 'border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'} `}>
                                            Guestbook
                                        </Link>
                                        <Link
                                            href="/projects"
                                            prefetch
                                            className={`${pathname === "/projects" ? 'border-teal-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : 'border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'} `}>
                                            Projects
                                        </Link>
                                        <ThemeButton />
                                    </motion.div>
                                </div>
    
                                {/* Mobile Navbar */}
                                <div className="-mr-2 flex items-center sm:hidden">
                                    <ThemeButton />
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 dark:hover:bg-gray-800">
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

                        <Disclosure.Panel static className="sm:hidden">
                            <div className="mt-14 pt-2 pb-3 space-y-1">
                                <Link
                                    href="/"
                                    prefetch
                                    className={`pl-3 pr-4 py-2 text-center block ${pathname === "/" ? "bg-teal-50 border-teal-500 text-teal-500 border-l-4 text-base font-medium dark:text-gray-800" : "border-transparent text-gray-50 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:bg-gray-700"}`}>
                                    Home
                                </Link>
                                <Link
                                    href="/guestbook"
                                    prefetch
                                    className={`pl-3 pr-4 py-2 text-center block ${pathname === "/guestbook" ? "bg-teal-50 border-teal-500 text-teal-500 border-l-4 text-base font-medium dark:text-gray-800" : "border-transparent text-gray-50 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:bg-gray-700"}`}>
                                    Guestbook
                                </Link>
                                <Link
                                    href="/projects"
                                    prefetch
                                    className={`pl-3 pr-4 py-2 text-center block ${pathname === "/projects" ? "bg-teal-50 border-teal-500 text-teal-500 border-l-4 text-base font-medium dark:text-gray-800" : "border-transparent text-gray-50 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:bg-gray-700"}`}>
                                    Projects
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