"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

function GithubProject({ name, technologies, url, description, date, key }) {

    let pathname = usePathname()

    return (
        <Link key={key} target="_blank" href={url} className={`rounded-4xl border-2 border-sasaGreenLM shadow-lg shadow-teal-200 w-full p-7 h-auto flex flex-col justify-start hover:animate-pulse relative ${pathname === '/home' ? '' : 'hover:scale-105'} transition-all duration-500 group`}>
            <div>
                <svg
                    viewBox="0 0 1.92 1.92"
                    id="folder"
                    data-name="Flat Color"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 sm:h-8 dark:fill-sasaGreenDM"
                >
                    <path
                        id="primary"
                        d="M1.6 0.48h-0.527L0.88 0.287A0.16 0.16 0 0 0 0.767 0.24H0.32a0.16 0.16 0 0 0 -0.16 0.16v1.12a0.16 0.16 0 0 0 0.16 0.16h1.28a0.16 0.16 0 0 0 0.16 -0.16V0.64a0.16 0.16 0 0 0 -0.16 -0.16Z"
                    />
                </svg>
            </div>
            <div className="flex max-sm:flex-col max-sm:space-y-2 justify-between mt-2">
                <div>
                    <h4>{name}</h4>
                    <span className="text-gray-700 dark:text-gray-100">{technologies}</span>
                </div>
                <div>{date}</div>
            </div>
            <p className="max-lg:mt-3 lg:mt-5 max-sm:text-sm">{description}</p>
            <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <svg className="h-8 w-8 dark:fill-white fill-black animat" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </div>
        </Link>
    )
}

export default GithubProject