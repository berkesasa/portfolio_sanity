"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

function WebProject({name, url, imageSrc}) {

    const [isChecked, setIsChecked] = useState("");

    const handleToggle = () => {
        if (!isChecked) {
            setIsChecked("checked");
        } else {
            setIsChecked("");
        }
    };

    return (
        <div className="rounded-4xl border-2 border-sasaGreenLM shadow-lg shadow-teal-200 w-full p-5 md:p-7 h-full grid grid-cols-2 gap-5 items-center group select-none">

            {/* Turn On-Off */}
            <button onClick={handleToggle} className={`switch max-w-max max-lg:text-sm flex space-x-2 items-center max-md:px-4 md:px-5 max-md:py-2 md:py-3 dark:bg-white dark:text-black text-white bg-black max-md:rounded-lg md:rounded-2xl ${isChecked} order-2 `}>
                <span className={`shrink-0 rounded-full border-black max-md:w-2 md:w-3 max-md:h-2 md:h-3 transition-all duraiton-300 ${isChecked === "checked" ? "dark:sasaGreenDM bg-sasaGreenLM" : "bg-white dark:bg-black"}`}></span>
                <span>Turn</span>
                <span className='switch-label'>{isChecked === "checked" ? "off" : "on"}</span>
            </button>

            {/* Dots */}
            <div className='flex justify-end items-center order-3'>
                <div className='flex max-lg:space-x-3 lg:space-x-5'>
                    <div className='rounded-full w-1 lg:w-2 h-1 lg:h-2 bg-black dark:bg-white'></div>
                    <div className='rounded-full w-1 lg:w-2 h-1 lg:h-2 bg-black dark:bg-white'></div>
                    <div className='rounded-full w-1 lg:w-2 h-1 lg:h-2 bg-black dark:bg-white'></div>
                </div>
            </div>

            {/* TV Frame */}
            <div className="flex flex-col space-y-5 items-start justify-start tvFrame col-span-2">
                <div className="tvContainer w-full max-lg:h-52 lg:max-xl:h-52 xl:h-72 overflow-hidden rounded-2xl border-2 border-sasaGreenLM dark:border-sasaGreenDM">
                    <div className="relative w-full h-full overflow-y-scroll scrollbar-hide screen">
                        <Image
                            src={imageSrc}
                            alt="Resim"
                            className='w-full h-auto'
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className="overlay">AV-1</div>
                    <div className={`project-scroll max-lg:hidden group-hover:hidden ${isChecked === "checked" ? "" : "hidden"}`}>
                        <div className="project-scroll2 dark:!border-white">
                            <div className="project-scroller dark:!bg-white"></div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div>
                    <h4 className=''>{name}
                    </h4>
                    <Link href={`https://www.${url}`} target='_blank' className="text-gray-700 dark:text-gray-100 max-md:text-xs md:max-lg:text-sm">{url}</Link>
                </div>
            </div>

        </div>
    )
}

export default WebProject