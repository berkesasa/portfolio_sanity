"use client"
import Link from "next/link";
import Transition from "../components/Transition";
import { useRouter } from "next/navigation";
import Terminal from "terminal-io";
import template from './welcome_templates'

const Welcome = () => {

    const router = useRouter();

    const commands = [
        {
            name: "summary", value: () => <div>
                <p>Since 2022, I have been working as a Front-end Developer. Among the technologies I use most frequently are TailwindCSS, Javascript, JQuery and React.</p>
                <p>
                    In the last days of my front-end development experience, I take care to improve myself in the field of React and Next.js. In addition to React, my current main goal is to develop projects with Typescript.</p>
            </div>
        },
        { name: "help", value: template.help },
        { name: "-h", value: template.help },
        { name: "social", value: template.social },
        { name: "home", value: () => router.push('/home') },
        {
            name: "contact", value: () =>
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-2 command">email</div>
                    <div className="grid grid-cols-2">
                        <a href="mailto:sasaberke@outlook.com"
                            target="_blank">sasaberke@outlook.com
                        </a>
                    </div>
                </div>
        },
        { name: "clear" },
    ];


    return (
        <Transition>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="py-20">
                    <div>No fun, take me to the homepage</div>
                    <Link className="px-5 py-3 border rounded-2xl dark:border-sasaGreenDM border-sasaGreenLM dark:text-white flex items-center justify-center hover:bg-sasaGreenLM dark:hover:bg-sasaGreenDM transition-all duration-300 hover:text-black mt-5" href="/home">Homepage</Link>
                </div>
                <div className="w-full">
                    <Terminal className="w-full h-full !bg-black px-5 py-3 min-h-[50vh]" commands={commands} initialData={template.banner} />
                </div>

            </div>
        </Transition>
    );
};

export default Welcome;