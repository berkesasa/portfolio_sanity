import Image from 'next/image'
import Me from "@/public/me.png"
import Hero from './components/Hero'
import Computers from './components/Computers'

export default async function Home() {


  return (
    <div className='divide-y divide-gray-100 dark:divide-gray-700'>

      {/* Computers */}
      <section id='computers'>
        <Computers />
      </section>

      {/* About */}
      <section id='about' className=''>
        <div className='container'>
          <div className='space-y-2 pt-5 pb-8 md:space-x-5'>
            <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13 '>
              Home
            </h1>
  
          </div>
          <div className='items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-8 xl:space-y-0'>
            <div className='flex flex-col items-center pt-8'>
              <Image
                alt='Picture of Berke SASA'
                src={Me}
                className='h-48 w-48 rounded-full object-cover'
              />
              <h3 className='pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>Berke SASA</h3>
              <p className='text-gray-500 dark:text-gray-300 text-center'>
                Hey my name is Berke and I am a Frontend Developer
              </p>
              <div className='flex space-x-5 pt-6'>
                <a href="" target='_blank'>
                  <svg
                    className='fill-white w-8 h-8 text-teal-500 hover:text-teal-600'
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href="" target='_blank'>
                  <svg
                    className='fill-white w-8 h-8 text-teal-500 hover:text-teal-600'
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="" target='_blank'>
                  <svg
                    className='stroke-white h-8 text-teal-500 hover:text-teal-600'
                    viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                    <rect height="9.5" width="12.5" y="3.75" x="1.75" />
                    <path d="m2.25 4.25 5.75 5 5.75-5" />
                  </svg>
                </a>
                <a href="" target='_blank'>
                  <svg
                    className='fill-white h-8 text-teal-500 hover:text-teal-600'
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.512 8.272l5.532 3.243-.686 1.162-5.533-3.243.687-1.162zm-1.456 3.113l6.185 1.739-.332 1.23-6.204-1.667.351-1.302zm-.672 2.813l6.498.65-.117 1.28-6.504-.586.123-1.344zm-.193 2.469h6.667v1.333h-6.667v-1.333zm8.833 3.333h-11v-7h1v6h9v-6h1v7zm-.852-8.704l-3.56-5.219 1.115-.76 3.559 5.219-1.114.76zm1.356-.841l-1.08-6.224 1.328-.231 1.082 6.224-1.33.231z" /></svg>
                </a>
              </div>
            </div>
            <div className='prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum numquam consequatur magnam voluptates in vitae voluptatem enim saepe corrupti soluta!</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum numquam consequatur magnam voluptates in vitae voluptatem enim saepe corrupti soluta!</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum numquam consequatur magnam voluptates in vitae voluptatem enim saepe corrupti soluta!</p>
            </div>
          </div>
          <Hero />
        </div>
      </section>

      {/* Projects */}
      <section></section>

      {/* Contact */}
      <section></section>

    </div>
  )
}
