import Link from 'next/link'
import Phone from '../components/models/Phone'
import ContactForm from '../components/ContactForm'

function Contact() {

    return (
        <section className='max-lg:mt-10 lg:mt-20'>
            <div className='container'>
                <div>
                    <h2>Contact Me</h2>
                </div>
                <div className='max-lg:mt-7 lg:mt-14'>
                    <h3 className='text-center'>You can reach me;</h3>
                    <div className='flex max-md:space-y-5 max-md:flex-col items-center max-lg:mt-7 lg:mt-14 justify-between'>
                        <div className='flex justify-center items-center'>
                            <Link className="flex items-center group justify-center relative max-w-max transition-all duration-300 xl:text-xl" href="mailto:sasaberke@outlook.com">
                                <span className='dark:group-hover:text-sasaGreenDM group-hover:text-sasaGreenLM transition-all duration-500 ease-in-out'>sasaberke@outlook.com</span>
                                <div className='dark:bg-teal-300/30 bg-teal-500/30 p-2 opacity-0 flex items-center justify-center rounded-lg absolute left-1/2 group-hover:-top-12 -top-20 -translate-x-1/2 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500'>
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
                                </div>
                            </Link>
                        </div>
                        <div className='!font-bold text-5xl xl:text-8xl hover:text-sasaGreenLM dark:hover:text-sasaGreenDM transition-all duration-500'>||</div>
                        <div className="flex space-x-5 items-center justify-center">
                            <Link
                                href="https://www.linkedin.com/in/berkesasa/"
                                target="_blank"
                                className="group relative"
                            >
                                <svg
                                    className="max-sm:h-8 sm:max-md:h-6 md:h-10 dark:fill-white dark:group-hover:fill-sasaGreenDM group-hover:fill-sasaGreenLM transition-all duration-500 ease-in-out"
                                    viewBox="0 0 1.28 1.28"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M0.24 0.08a0.16 0.16 0 0 0 -0.16 0.16v0.8a0.16 0.16 0 0 0 0.16 0.16h0.8a0.16 0.16 0 0 0 0.16 -0.16V0.24a0.16 0.16 0 0 0 -0.16 -0.16H0.24zm0.088 0.344a0.096 0.096 0 1 0 0 -0.191 0.096 0.096 0 0 0 0 0.191zm0.08 0.601V0.499h-0.16v0.526h0.16zM0.514 0.499h0.16v0.07c0.024 -0.037 0.075 -0.087 0.172 -0.087 0.115 0 0.178 0.076 0.178 0.221 0 0.007 0.001 0.039 0.001 0.039v0.282h-0.16v-0.282c0 -0.039 -0.008 -0.115 -0.094 -0.115 -0.086 0 -0.094 0.096 -0.096 0.159v0.239h-0.16V0.499z"
                                    />
                                </svg>
                                <div className='dark:bg-teal-300/30 bg-teal-500/30 p-2 opacity-0 flex items-center justify-center rounded-lg absolute left-1/2 group-hover:-top-12 -top-20 -translate-x-1/2 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500'>
                                    <svg
                                        className='h-6 fill-black dark:fill-white'
                                        viewBox="0 0 3.84 3.84"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="style=fill">
                                            <g id="profile">
                                                <path
                                                    id="vector (Stroke)"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M1.08 1.04a0.84 0.84 0 1 1 1.68 0 0.84 0.84 0 0 1 -1.68 0Z"

                                                />
                                                <path
                                                    id="rec (Stroke)"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M0.68 2.971a0.851 0.851 0 0 1 0.851 -0.851h0.777a0.851 0.851 0 0 1 0.851 0.851 0.669 0.669 0 0 1 -0.669 0.669H1.349a0.669 0.669 0 0 1 -0.669 -0.669Z"

                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </Link>
                            <Link
                                href="https://github.com/berkesasa"
                                target="_blank"
                                className="group relative"
                            >
                                <svg
                                    className="max-sm:h-8 sm:max-md:h-6 md:h-10 dark:fill-white dark:group-hover:fill-sasaGreenDM group-hover:fill-sasaGreenLM transition-all duration-500 ease-in-out"
                                    viewBox="0 0 1.92 1.92"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-name="Layer 1"
                                >
                                    <path d="M0.96 0.18a0.8 0.8 0 0 0 -0.253 1.559c0.04 0.007 0.055 -0.017 0.055 -0.038 0 -0.019 -0.001 -0.082 -0.001 -0.149 -0.201 0.037 -0.253 -0.049 -0.269 -0.094a0.291 0.291 0 0 0 -0.082 -0.113c-0.028 -0.015 -0.068 -0.052 -0.001 -0.053a0.16 0.16 0 0 1 0.123 0.082 0.171 0.171 0 0 0 0.233 0.066 0.168 0.168 0 0 1 0.051 -0.107c-0.178 -0.02 -0.364 -0.089 -0.364 -0.395a0.311 0.311 0 0 1 0.082 -0.215 0.288 0.288 0 0 1 0.008 -0.212s0.067 -0.021 0.22 0.082a0.754 0.754 0 0 1 0.4 0c0.153 -0.104 0.22 -0.082 0.22 -0.082a0.287 0.287 0 0 1 0.008 0.212 0.31 0.31 0 0 1 0.082 0.215c0 0.307 -0.187 0.375 -0.365 0.395a0.189 0.189 0 0 1 0.054 0.148c0 0.107 -0.001 0.193 -0.001 0.22 0 0.021 0.015 0.046 0.055 0.038A0.8 0.8 0 0 0 0.96 0.18Z" />
                                </svg>
                                <div className='dark:bg-teal-300/30 bg-teal-500/30 p-2 opacity-0 flex items-center justify-center rounded-lg absolute left-1/2 group-hover:-top-12 -top-20 -translate-x-1/2 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500'>
                                    <svg viewBox="0 0 1.92 1.92" id="folder" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="h-6 dark:fill-white"><path id="primary" d="M1.6 0.48h-0.527L0.88 0.287A0.16 0.16 0 0 0 0.767 0.24H0.32a0.16 0.16 0 0 0 -0.16 0.16v1.12a0.16 0.16 0 0 0 0.16 0.16h1.28a0.16 0.16 0 0 0 0.16 -0.16V0.64a0.16 0.16 0 0 0 -0.16 -0.16Z"></path></svg>
                                </div>
                            </Link>
                            <Link
                                href="https://stackoverflow.com/users/19209743/berkesasa"
                                target="_blank"
                                className='group relative'
                            >
                                <svg
                                    className="max-sm:h-8 sm:max-md:h-6 md:h-10 dark:fill-white dark:group-hover:fill-sasaGreenDM group-hover:fill-sasaGreenLM transition-all duration-500 ease-in-out"
                                    viewBox="-0.32 -0.16 1.92 1.92"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="xMinYMin"
                                >
                                    <path d="M1.079 1.451v-0.422h0.133v0.562H0.01v-0.562h0.133v0.422z" />
                                    <path d="m0.291 0.989 0.654 0.144 0.028 -0.138 -0.654 -0.144 -0.028 0.138zm0.087 -0.327 0.605 0.296 0.055 -0.127 -0.605 -0.298 -0.055 0.129zm0.168 -0.313 0.514 0.449 0.085 -0.107L0.63 0.242l-0.085 0.107zM0.877 0.016 0.77 0.1l0.398 0.564 0.107 -0.084L0.877 0.016zM0.277 1.309h0.668v-0.14H0.277v0.14z" />
                                </svg>
                                <div className='dark:bg-teal-300/30 bg-teal-500/30 p-2 opacity-0 flex items-center justify-center rounded-lg absolute left-1/2 group-hover:-top-12 -top-20 -translate-x-1/2 group-hover:opacity-100 group-hover:rotate-0 transition-all duration-500'>
                                    <svg
                                        className='h-6 dark:fill-white'
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 128 128"
                                        style={{
                                            enableBackground: "new 0 0 512 512",
                                        }}
                                        xmlSpace="preserve"
                                    >
                                        <path d="M40.337 81.426v31.936a3.018 3.018 0 1 0 6.036 0V81.426h-6.036zm41.203 0v31.936a3.018 3.018 0 1 0 6.036 0V81.426H81.54zm-30.117 0v36.405a5.753 5.753 0 1 0 11.506 0V81.426H51.424zm13.989 0v36.405a5.753 5.753 0 1 0 11.506 0V81.426H65.413zm8.69-56.802a9.935 9.935 0 0 1-9.934 9.935 9.935 9.935 0 0 1-9.935-9.935 9.935 9.935 0 0 1 19.869 0z" />
                                        <path d="M95.029.544a4.794 4.794 0 0 0-6.467 2.034L70.24 37.724H51.534A12.813 12.813 0 0 0 40 45.029l-7.085 14.988c-1.498 3.169.814 6.842 4.334 6.842h.012l18.437-.046a4.794 4.794 0 0 0-.011-9.588h-.012l-10.848.027 3.841-8.126.039-.08a1.435 1.435 0 0 1 2.714.651v3.147l4.242-.011h.024a9.185 9.185 0 0 1 9.185 9.162 9.139 9.139 0 0 1-1.378 4.861h13.318V45.604c.502-.596-1.016 2.2 20.252-38.595A4.794 4.794 0 0 0 95.03.542zm16.452 70.69H16.518a2.908 2.908 0 0 0 0 5.814h3.13v46.49a4.462 4.462 0 0 0 8.924 0v-46.49h71.121v46.49a4.462 4.462 0 0 0 8.924 0v-46.49h2.867a2.908 2.908 0 0 0 0-5.814z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <div className='!font-bold text-5xl xl:text-8xl hover:text-sasaGreenLM dark:hover:text-sasaGreenDM transition-all duration-500'>||</div>
                        <div className='flex items-center justify-centers max-md:hidden'>
                            <svg
                                className='h-20 xl:h-32 dark:fill-white rotate-90 translate-y-4 xl:translate-y-8 dark:hover:fill-sasaGreenDM hover:fill-sasaGreenLM transition-all duration-500'
                                viewBox="0 0 12.16 12.16"
                                xmlns="http://www.w3.org/2000/svg"
                                baseProfile="full"
                                xmlSpace="preserve"
                            >
                                <path d="M3.52 4.8h4.12L5.88 3.04h1.84l2.24 2.24-2.4 2.4H5.88l1.76-1.76h-3v3.52H3.52V4.8Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 max-lg:mt-5 lg:mt-10'>
                    <div className='h-full transform lg:translate-y-10 max-lg:max-w-[50vw] max-lg:mx-auto max-lg:h-[400px] relative overflow-hidden max-lg:order-2'>
                        <Phone />
                    </div>
                    <div className='rounded-4xl p-10 shadow-lg shadow-teal-200 border border-sasaGreenLM relative z-10'>
                        <div className='max-lg:mb-5 lg:mb-10'>
                            <h3>Hey!</h3>
                            <p className='max-lg:mt-3 lg:mt-5 max-md:text-sm'>I have something very important to discuss with you. The information is top secret, and it&apos;s this;</p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact