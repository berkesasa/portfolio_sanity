import Link from "next/link"

function Technology({ children, href, name }) {
    return (
        <div className="max-w-max group mx-auto">
            <Link
                href={href}
                target="_blank"
                className='p-3 border-2 border-transparent transition-all duration-300 ease-in-out hover:border-sasaGreenLM dark:hover:border-sasaGreenDM block max-w-max group-hover:scale-110 mx-auto rounded-xl'
            >
                {children}
            </Link>
            <div className="text-center lg:opacity-0 transition-all duration-300 mt-2 lg:group-hover:opacity-100 dark:text-white">{name}</div>
        </div>
    )
}

export default Technology