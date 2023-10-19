import Link from 'next/link'
import ErrorGif from '../public/error-page.webp'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center max-lg:mt-24 lg:mt-32 container'>
            <h2>404 Not Found</h2>
            <p className='max-lg:mt-3 lg:mt-7 text-center'>Dude, we gotta get out of here, let&apos;s go to the homepage.</p>

            <Link className="px-5 py-3 border rounded-2xl dark:border-sasaGreenDM border-sasaGreenLM dark:text-white flex items-center justify-center hover:bg-sasaGreenLM dark:hover:bg-sasaGreenDM transition-all duration-300 hover:text-black mt-5" href="/home">Homepage</Link>
            <Image
                className='mt-10 rounded-2xl'
                src={ErrorGif}
                alt='Error Gif'
            />
        </div>
    )
}