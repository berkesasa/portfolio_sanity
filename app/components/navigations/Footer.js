"use client"
import Link from "next/link"
import { Typewriter } from 'react-simple-typewriter';
import { useState } from "react";
import { usePathname } from "next/navigation";


function Footer() {

    const path = usePathname()

    const [startTyping, setStartTyping] = useState(false);

    return (
        <div className={`${path === '/' ? 'hidden' : ''} border-t-2 border-black dark:border-white max-lg:mt-10 lg:mt-24`}>
            <div className="container py-10 flex max-sm:flex-col max-sm:space-y-3 items-center justify-center ">
                <Link className="flex space-x-1 sm:basis-1/3 group max-md:text-sm max-sm:justify-center items-center" href="mailto:sasaberke@outlook.com">
                    <span>sasaberke@outlook.com</span>
                    <span className="max-lg:animate-bounce lg:group-hover:animate-bounce lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 dark:stroke-white"
                            viewBox="0 0 64 64"
                            fill="none"
                            stroke="#000000"
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M10.667 10.667h42.667c2.933 0 5.333 2.4 5.333 5.333v32c0 2.933 -2.4 5.333 -5.333 5.333H10.667c-2.933 0 -5.333 -2.4 -5.333 -5.333V16c0 -2.933 2.4 -5.333 5.333 -5.333z" />
                            <path points="22,6 12,13 2,6" d="M58.667 16L32 34.667L5.333 16" />
                        </svg>
                    </span>
                </Link>
                <Link
                    onMouseEnter={() => setStartTyping(true)}
                    onMouseLeave={() => setStartTyping(false)}
                    className="text-2xl font-medium group relative sm:basis-1/3 flex justify-center"
                    href="/home">
                    <div className="group-hover:opacity-0 transition-all ease-in-out">Berke <span className="text-sasaGreenLM dark:text-sasaGreenDM">SASA</span></div>
                    {startTyping && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all ease-in-out whitespace-nowrap">
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
                <div className="flex space-x-5 items-center sm:basis-1/3 justify-end">
                    <Link
                        href="https://www.linkedin.com/in/berkesasa/"
                        target="_blank"
                        className=""
                    >
                        <svg
                            className="max-sm:h-8 sm:max-md:h-6 md:h-10 dark:fill-white dark:hover:fill-sasaGreenDM hover:fill-sasaGreenLM transition-all duration-300 ease-in-out"
                            viewBox="0 0 1.28 1.28"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.24 0.08a0.16 0.16 0 0 0 -0.16 0.16v0.8a0.16 0.16 0 0 0 0.16 0.16h0.8a0.16 0.16 0 0 0 0.16 -0.16V0.24a0.16 0.16 0 0 0 -0.16 -0.16H0.24zm0.088 0.344a0.096 0.096 0 1 0 0 -0.191 0.096 0.096 0 0 0 0 0.191zm0.08 0.601V0.499h-0.16v0.526h0.16zM0.514 0.499h0.16v0.07c0.024 -0.037 0.075 -0.087 0.172 -0.087 0.115 0 0.178 0.076 0.178 0.221 0 0.007 0.001 0.039 0.001 0.039v0.282h-0.16v-0.282c0 -0.039 -0.008 -0.115 -0.094 -0.115 -0.086 0 -0.094 0.096 -0.096 0.159v0.239h-0.16V0.499z"
                            />
                        </svg>
                    </Link>
                    <Link
                        href="https://github.com/berkesasa"
                        target="_blank"
                    >
                        <svg
                            className="max-sm:h-8 sm:max-md:h-6 md:h-10 dark:fill-white dark:hover:fill-sasaGreenDM hover:fill-sasaGreenLM transition-all duration-300 ease-in-out"
                            viewBox="0 0 1.92 1.92"
                            xmlns="http://www.w3.org/2000/svg"
                            data-name="Layer 1"
                        >
                            <path d="M0.96 0.18a0.8 0.8 0 0 0 -0.253 1.559c0.04 0.007 0.055 -0.017 0.055 -0.038 0 -0.019 -0.001 -0.082 -0.001 -0.149 -0.201 0.037 -0.253 -0.049 -0.269 -0.094a0.291 0.291 0 0 0 -0.082 -0.113c-0.028 -0.015 -0.068 -0.052 -0.001 -0.053a0.16 0.16 0 0 1 0.123 0.082 0.171 0.171 0 0 0 0.233 0.066 0.168 0.168 0 0 1 0.051 -0.107c-0.178 -0.02 -0.364 -0.089 -0.364 -0.395a0.311 0.311 0 0 1 0.082 -0.215 0.288 0.288 0 0 1 0.008 -0.212s0.067 -0.021 0.22 0.082a0.754 0.754 0 0 1 0.4 0c0.153 -0.104 0.22 -0.082 0.22 -0.082a0.287 0.287 0 0 1 0.008 0.212 0.31 0.31 0 0 1 0.082 0.215c0 0.307 -0.187 0.375 -0.365 0.395a0.189 0.189 0 0 1 0.054 0.148c0 0.107 -0.001 0.193 -0.001 0.22 0 0.021 0.015 0.046 0.055 0.038A0.8 0.8 0 0 0 0.96 0.18Z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://stackoverflow.com/users/19209743/berkesasa"
                        target="_blank"
                    >
                        <svg
                            className="max-sm:h-8 sm:max-md:h-6 md:h-10 dark:fill-white dark:hover:fill-sasaGreenDM hover:fill-sasaGreenLM transition-all duration-300 ease-in-out"
                            viewBox="-0.32 -0.16 1.92 1.92"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMinYMin"
                        >
                            <path d="M1.079 1.451v-0.422h0.133v0.562H0.01v-0.562h0.133v0.422z" />
                            <path d="m0.291 0.989 0.654 0.144 0.028 -0.138 -0.654 -0.144 -0.028 0.138zm0.087 -0.327 0.605 0.296 0.055 -0.127 -0.605 -0.298 -0.055 0.129zm0.168 -0.313 0.514 0.449 0.085 -0.107L0.63 0.242l-0.085 0.107zM0.877 0.016 0.77 0.1l0.398 0.564 0.107 -0.084L0.877 0.016zM0.277 1.309h0.668v-0.14H0.277v0.14z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer