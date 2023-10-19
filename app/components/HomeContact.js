import React from 'react'
import ContactForm from '../components/ContactForm'
import mcqueen from '../../public/lightning.gif'
import Image from 'next/image'

function HomeContact() {
    return (
        <div className='container'>
            <h2>Contact</h2>
            <div className='max-lg:mt-7 lg:mt-14 lg:max-2xl:max-w-[80%] 2xl:max-w-[60%] mx-auto'>
                <div className='rounded-4xl p-10 shadow-lg shadow-teal-200 border border-sasaGreenLM relative z-10'>
                    <div className='max-lg:mb-5 lg:mb-10'>
                        <h3>Hey!</h3>
                        <div className='max-lg:mt-3 lg:mt-5 max-md:text-sm'>You can write here for fast contact (but very fast, like <span className='text-sasaGreenLM dark:text-sasaGreenDM relative'>
                            <span className='peer cursor-pointer'>Lightning McQueen</span>
                            <div className='bg-white rounded-full w-20 h-20 absolute opacity-0 left-[115%] peer-hover:opacity-100 -top-8 transition-all duration-300'>
                                <Image
                                    src={mcqueen}
                                    className="w-auto h-auto"
                                    alt='mcqueen'
                                />
                            </div>

                        </span>)</div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default HomeContact