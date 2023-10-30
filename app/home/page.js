import Computers from '../components/models/Computers'
import HomeAbout from '../components/HomeAbout'
import HomeProjects from '../components/HomeProjects'
import HomeContact from '../components/HomeContact'
import Link from 'next/link'

export const revalidate = 60
export default async function Home() {



    return (
        <div>
            {/* Computers */}
            <section className='max-lg:hidden lg:block'>
                <Computers />
            </section>

            {/* About */}
            <section className='max-lg:mt-10 lg:mt-24'>
                <HomeAbout />
            </section>

            {/* Projects */}
            <section className='max-lg:mt-10 lg:mt-24'>
                <HomeProjects />
            </section>

            {/* Contact */}
            <section className='max-lg:mt-10 lg:mt-24'>
                <HomeContact />
            </section>

            <div className='fixed max-lg:top-1/2 lg:top-[calc(50%+55px)] right-2 z-30'>
                <Link href="/englishpractices" className='block w-10 h-10 relative rounded-full bg-black dark:bg-white text-black cursor pointer'>
                    <div className='flex items-center justify-center text-2xl h-full !font-semibold peer text-white dark:text-black'>?</div>
                    <div className='hidden peer-hover:block absolute whitespace-nowrap tranform  -translate-x-[calc(100%+10px)] top-1/2 -translate-y-1/2 bg-black text-white p-2 text-sm rounded-lg'>In English, would you like to do some practice?</div>
                </Link>
            </div>

        </div>
    )
}
