"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


function Hero() {

    const [text, count] = useTypewriter({
        words:["Hi, my name is Berke",
        "I am a Frontend Developer",
        "Indie Cyber Security Searcher",
        "<Lego />"],
        loop: true,
        delaySpeed: 2000,

    });

    return (
        <section className='relative w-full h-screen'>
            <div className='text-white mx-auto text-6xl'>
                <span>{text}</span>
                <Cursor cursorColor='#16B09F' />

            </div>
            <div className="px-20 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-teal-500'>
                    </div>
                    <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-teal-500 to-transparent'>
                    </div>
                </div>
                <div>
                    <h1 className='text-6xl'>Hi I am <span className='text-teal-500'>Berke SASA</span></h1>
                    <p className='mt-2 text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, obcaecati.</p>
                </div>
            </div>
            {/* <ComputerCanvas /> */}
        </section>
    )
}

export default Hero