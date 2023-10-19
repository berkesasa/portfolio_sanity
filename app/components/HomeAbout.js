import Link from "next/link"
import Image from "next/image"
import Me from "@/public/me.png"
import Technology from "./Technology"
import TypeWriter from "./TypeWriter"

function HomeAbout() {

    return (
        <div className='container'>
            <div>
                <h2>About</h2>
            </div>
            <div className='max-lg:mt-7 lg:mt-14'>
                <div className='flex max-lg:flex-col items-center max-sm:space-y-5 sm:max-lg:space-y-10 lg:space-x-20'>
                    <div className='flex flex-col justify-center items-center space-y-3 basis-1/3'>
                        <Image
                            src={Me}
                            className='max-lg:w-60 lg:w-80 rounded-full '
                            alt='Berke SASA Profile Photo'
                        />
                        <div className=' text-center'>Hi! I&apos;m Berke SASA!</div>
                        <div className=' text-center dark:text-white flex justify-center items-center  xl:max-2xl:text-xl 2xl:text-3xl'>
                            <TypeWriter />
                        </div>
                    </div>
                    <div className='basis-2/3'>
                        <div className="max-sm:text-sm">
                            <p>In 2022, I started web development as a Front-end Developer. In my nearly 2 years of experience, I worked as a Front-end Developer in corporate and e-commerce sites as well as CMS and CRM projects. In some of these projects, I also personally realized WordPress integration.</p>
                        </div>
                        <div className='max-lg:mt-5 lg:mt-10 max-lg:flex max-lg:flex-col items-center'>
                            <h3 className='max-lg:text-center'>Most used technologies</h3>
                            <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-10 max-lg:mt-3 lg:mt-5 items-center'>

                                {/* React */}
                                <Technology
                                    name="React"
                                    href="https://react.dev">
                                    <svg
                                        className='max-sm:h-10 sm:max-lg:h-14 lg:h-20'
                                        viewBox="0 0 2.56 2.56"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.494 1.278a.211.211 0 0 0-.214-.208.211.211 0 0 0-.214.208c0 .115.096.208.214.208a.211.211 0 0 0 .214-.208Z"
                                            fill="#53C1DE"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M1.976.893c.045-.179.102-.509-.098-.621s-.459.102-.596.23C1.144.376.878.162.677.275.477.387.539.712.586.891.4.942.08 1.053.08 1.278s.318.346.504.397c-.046.181-.106.501.094.613.202.112.467-.096.606-.226.138.13.395.339.595.227s.149-.438.102-.619c.179-.051.499-.168.499-.39 0-.224-.322-.334-.504-.386Zm-.022.682a2.293 2.293 0 0 0-.122-.295 2.29 2.29 0 0 0 .117-.291c.134.038.429.125.429.29 0 .168-.283.254-.424.296Zm-.125.629c-.149.083-.37-.117-.472-.211a2.349 2.349 0 0 0 .202-.248 2.475 2.475 0 0 0 .325-.048c.032.128.096.424-.054.507ZM.731 2.202C.582 2.119.649 1.832.685 1.7a2.483 2.483 0 0 0 .323.045 2.445 2.445 0 0 0 .206.246c-.086.082-.333.294-.483.21Zm-.549-.924c0-.168.293-.254.431-.291a2.341 2.341 0 0 0 .117.294 2.374 2.374 0 0 0-.118.298c-.132-.037-.43-.133-.43-.301ZM.728.36c.15-.085.381.12.482.213a2.397 2.397 0 0 0-.205.245C.893.828.784.845.685.866.648.72.579.443.728.36Zm.902.566c.077.01.15.022.219.037a2.101 2.101 0 0 1-.077.2A3.293 3.293 0 0 0 1.63.926ZM1.282.645a2.16 2.16 0 0 1 .141.165 3.112 3.112 0 0 0-.283 0 2.213 2.213 0 0 1 .142-.165Zm-.493.52A2.15 2.15 0 0 1 .712.963 2.381 2.381 0 0 1 .93.926a2.904 2.904 0 0 0-.141.238Zm.144.474a2.246 2.246 0 0 1-.221-.035 1.63 1.63 0 0 1 .078-.206 2.904 2.904 0 0 0 .144.24Zm.352.282a2.251 2.251 0 0 1-.144-.168c.094.003.19.003.285 0a2.13 2.13 0 0 1-.141.168Zm.49-.525c.032.07.059.139.08.205a2.238 2.238 0 0 1-.224.037 3.282 3.282 0 0 0 .144-.242Zm-.274.254a3.318 3.318 0 0 1-.437.002 2.794 2.794 0 0 1-.219-.368 2.792 2.792 0 0 1 .219-.368 2.992 2.992 0 0 1 .437 0 3.131 3.131 0 0 1 .219.366 3.131 3.131 0 0 1-.218.368ZM1.826.357c.15.083.083.381.051.51a2.528 2.528 0 0 0-.322-.049 2.35 2.35 0 0 0-.203-.245c.101-.094.325-.298.474-.216Z"
                                            fill="#53C1DE"
                                        />
                                    </svg>
                                </Technology>

                                {/* Next.js */}
                                <Technology
                                    name="Next.js"
                                    href="https://nextjs.org/">
                                    <svg
                                        className='max-sm:h-10 sm:max-lg:h-14 lg:h-20 dark:fill-white fill-black'
                                        viewBox="0 0 1.2 1.2"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m0.36 0.36 0.032 -0.023A0.04 0.04 0 0 0 0.32 0.36h0.04Zm0.24 0.76A0.52 0.52 0 0 1 0.08 0.6H0A0.6 0.6 0 0 0 0.6 1.2v-0.08ZM1.12 0.6A0.52 0.52 0 0 1 0.6 1.12v0.08A0.6 0.6 0 0 0 1.2 0.6h-0.08ZM0.6 0.08A0.52 0.52 0 0 1 1.12 0.6h0.08A0.6 0.6 0 0 0 0.6 0v0.08Zm0 -0.08A0.6 0.6 0 0 0 0 0.6h0.08A0.52 0.52 0 0 1 0.6 0.08V0ZM0.4 0.96V0.36H0.32V0.96h0.08Zm-0.072 -0.577 0.52 0.72 0.065 -0.047 -0.52 -0.72 -0.065 0.047ZM0.8 0.32v0.48h0.08V0.32h-0.08Z"

                                        />
                                    </svg>
                                </Technology>

                                {/* TailwindCSS */}
                                <Technology
                                    name="Tailwindcss"
                                    href="https://tailwindcss.com/">
                                    <svg
                                        className='max-sm:h-10 sm:max-lg:h-14 lg:h-20'
                                        viewBox="0 0 2.56 2.56"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.72 1.096q0.112 -0.448 0.56 -0.448c0.448 0 0.504 0.336 0.728 0.392q0.224 0.056 0.392 -0.168 -0.112 0.448 -0.56 0.448c-0.448 0 -0.504 -0.336 -0.728 -0.392q-0.224 -0.056 -0.392 0.168Zm-0.56 0.672q0.112 -0.448 0.56 -0.448c0.448 0 0.504 0.336 0.728 0.392q0.224 0.056 0.392 -0.168 -0.112 0.448 -0.56 0.448c-0.448 0 -0.504 -0.336 -0.728 -0.392q-0.224 -0.056 -0.392 0.168Z"
                                            style={{
                                                fill: "#44a8b3",
                                            }}
                                        />
                                    </svg>
                                </Technology>

                                {/* JS */}
                                <Technology
                                    name="Javascript"
                                    href="https://www.javascript.com/">
                                    <svg
                                        className='max-sm:h-10 sm:max-lg:h-14 lg:h-20'
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-label="JavaScript"
                                        role="img"
                                        viewBox="0 0 64 64"
                                    >
                                        <path
                                            width={512}
                                            height={512}
                                            rx="15%"
                                            fill="#f7df1e"
                                            d="M0.366 0H63.634A0.366 0.366 0 0 1 64 0.366V63.634A0.366 0.366 0 0 1 63.634 64H0.366A0.366 0.366 0 0 1 0 63.634V0.366A0.366 0.366 0 0 1 0.366 0z"
                                        />
                                        <path d="M40.5 46.25c1.25 2.125 3 3.625 5.875 3.625 2.5 0 4.125 -1.25 4.125 -3 0 -2 -1.625 -2.75 -4.375 -4l-1.5 -0.625c-4.375 -1.875 -7.25 -4.125 -7.25 -9 0 -4.5 3.375 -8 8.75 -8 3.875 0 6.625 1.375 8.5 4.875l-4.625 3c-1 -1.875 -2.125 -2.625 -3.875 -2.625s-2.875 1.125 -2.875 2.625c0 1.75 1.125 2.5 3.75 3.625l1.5 0.625c5.125 2.25 8 4.375 8 9.5 0 5.375 -4.25 8.375 -10 8.375 -5.625 0 -9.25 -2.625 -11 -6.125zm-21.25 0.5c1 1.625 1.75 3.125 3.875 3.125 2 0 3.25 -0.75 3.25 -3.75V25.375h6v20.5c0 6.25 -3.625 9 -9 9 -4.875 0 -7.625 -2.5 -9 -5.5z" />
                                    </svg>
                                </Technology>

                            </div>
                        </div>
                        <Link
                            href="/about"
                            className='group flex mt-5'
                        >
                            <div>Look More</div>
                            <div className='flex text-sasaGreenLM dark:text-sasaGreenDM'>
                                <div className='transition-all group-hover:-translate-y-2'>.</div>
                                <div className='transition-all group-hover:-translate-y-2 delay-100'>.</div>
                                <div className='transition-all group-hover:-translate-y-2 delay-200'>.</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout