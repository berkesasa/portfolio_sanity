// Kart.js
"use client"
import { useState, useEffect, Fragment } from "react";
import HarfList from "./HarfList";
import { Dialog, Transition } from '@headlessui/react'
import Info from "./Info";
import Duck from '../../../public/duck-pixel.gif'
import Image from "next/image";
import StartTourButton from '../../components/StartTourButton';


export default function Kart({ data, palette }) {
    const [randomDataIndex, setRandomDataIndex] = useState(0);
    const [randomColorIndex, setRandomColorIndex] = useState(0);
    const [paletteIndex, setPaletteIndex] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState("");
    const [knownWords, setKnownWords] = useState([]);
    const [hint, setHint] = useState("");
    const [knownWordsList, setKnownWordsList] = useState(false)


    // Tarayıcıdan yerel depolamadan bildiği kelimeleri al
    useEffect(() => {
        const savedKnownWords = localStorage.getItem("knownWords");
        if (savedKnownWords) {
            setKnownWords(JSON.parse(savedKnownWords));
        }
    }, []);

    useEffect(() => {
        const newDataIndex = Math.floor(Math.random() * data.length);
        setRandomDataIndex(newDataIndex);
        const newColorIndex = Math.floor(Math.random() * palette.length);
        setRandomColorIndex(newColorIndex);
        const newPaletteIndex = Math.floor(Math.random() * 5);
        setPaletteIndex(newPaletteIndex);
    }, [data.length, palette.length]);

    const handleCheck = () => {
        const currentData = data[randomDataIndex];
        if (userInput.toLowerCase() === currentData.turkish.toLowerCase()) {
            setResult("correct");
            setUserInput("");

            // Bildiğiniz kelimeyi knownWords dizisine ekleyin (eğer daha önce eklenmemişse)
            if (!knownWords.includes(currentData.word)) {
                setKnownWords([...knownWords, currentData.word]);

                // Yerel depolama (localStorage) kullanarak bildiği kelimeleri saklayın
                localStorage.setItem("knownWords", JSON.stringify([...knownWords, currentData.word]));
            }
        } else {
            setResult("incorrect");
        }

        setTimeout(() => {
            setResult("");
        }, 3000);
    };

    const handleNext = () => {
        const newDataIndex = Math.floor(Math.random() * data.length);
        setRandomDataIndex(newDataIndex);
        const newColorIndex = Math.floor(Math.random() * palette.length);
        setRandomColorIndex(newColorIndex);
        const newPaletteIndex = Math.floor(Math.random() * 5);
        setPaletteIndex(newPaletteIndex);
        setResult("")
        setUserInput("");
        setHint("");
    }

    const handleClear = () => {
        localStorage.removeItem("knownWords");
        setKnownWords([])
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleCheck();
        }
        if (e.key === 'Tab') {
            event.preventDefault();
            // "Tab" tuşuna basıldığında yapılması gereken işlemleri burada gerçekleştirin
            handleNext();
        }
    };

    const handleHint = () => {
        const currentData = data[randomDataIndex];
        const turkishWord = currentData.turkish.toLowerCase();
        const hintLength = Math.min(hint.length + 1, turkishWord.length);
        const newHint = turkishWord.slice(0, hintLength);
        setHint(newHint);
    };

    function closeList() {
        setKnownWordsList(false)
    }

    function openList() {
        setKnownWordsList(true)
    }

    return (
        <div className="max-lg:flex-col flex justify-center w-full ">

            <div className="flex justify-center items-start max-sm:space-x-3 sm:space-x-8">
                {/* Kontrol Et */}
                <div className="flex flex-col justify-center mt-[136px] step-3">
                    <button
                        onClick={handleCheck}
                        className="bg-[#F97B22] text-white sm:w-36 p-3 max-sm:rounded-full sm:py-2 sm:rounded-lg  active:scale-90 transition-all duration-300 hover:scale-105"
                    >
                        <div className="max-sm:hidden">Kontrol Et!</div>
                        <svg
                            className="w-4 h-4 sm:hidden"
                            viewBox="0 0 24 24"
                            data-name="Line Color"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m5 12 5 5 9-9"
                                style={{
                                    fill: "none",
                                    stroke: "white",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 4,
                                }}
                            />
                        </svg>
                    </button>
                </div>

                {/* Kart */}
                <div className="flex flex-col space-y-5 items-center justify-center relative">


                    {/* Kart */}
                    <div
                        style={{ backgroundColor: `${palette[randomColorIndex].colors[paletteIndex]}` }}
                        className={`hover:scale-105 transition-all duration-300 active:scale-90 max-w-md mx-auto p-7 flex flex-col shadow-lg rounded-2xl select-none step-1  !text-black ${result} max-sm:text-sm`}
                    // Üzerine gelince büyütme animasyonu
                    >
                        <div className='flex justify-between'>
                            <div>{data[randomDataIndex].no}</div>
                            <div>{data[randomDataIndex].level}</div>
                        </div>
                        <div className='flex items-center justify-center max-sm:h-32 max-sm:w-32 sm:h-52 sm:w-52 !font-bold'>
                            {data[randomDataIndex].word}
                        </div>
                        <div className='flex justify-center'>
                            {data[randomDataIndex].subject}
                        </div>
                    </div>

                    {/* Input-Result */}
                    <div className="relative step-2">
                        <input type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="shadow-center rounded-xl focus:ring-0 outline-none p-3 mb-2 bg-gray-300 dark:bg-white border-none !text-black"
                        />
                        <div
                            className="absolute top-16 text-green-500 left-1/2 -translate-x-1/2">{result}</div>
                    </div>
                    <HarfList text={hint} />

                    <div className="flex items-center justify-center -top-5 max-sm:-left-[52px] sm:-left-[72px] absolute active:scale-90 transition-all duration-300 step-5">
                        <button onClick={handleHint} className="bg-[#64CCC5] rounded-full text-white w-10 h-10 flex items-center justify-center">
                            !
                        </button>
                    </div>
                    <Info data={data} randomDataIndex={randomDataIndex} />
                    <div className="!mt-12"><StartTourButton /></div>
                </div>

                {/* Sıradaki */}
                <div className="flex flex-col justify-center mt-[136px] step-4">
                    <button onClick={handleNext} className="bg-[#186F65] text-white sm:w-36 p-3 sm:py-2 rounded-full sm:rounded-lg active:scale-90 transition-all duration-300 hover:scale-105">
                        <div className="max-sm:hidden">Sonraki</div>
                        <svg
                            className="sm:hidden w-4 h-4 shrink-0 fill-white"
                            viewBox="0 0 24 24"
                            data-name="Flat Color"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m18.6 11.2-12-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .55.89 1 1 0 0 0 1-.09l12-9a1 1 0 0 0 0-1.6Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Bildiğim Kelimeler */}
            <div className="lg:absolute lg:top-32 lg:right-10 step-7 max-lg:mt-10">
                <h2 className="lg:max-xl:text-base xl:max-2xl:text-xl 2xl:text-2xl text-center mb-5">Bildiğim Kelimeler</h2>
                <div className="flex max-lg:justify-center lg:justify-end">
                    <div className="max-lg:w-1/2 shadow-center rounded-2xl overflow-hidden">
                        <div
                            onClick={openList}
                            className={`lg:max-xl:w-40 xl:max-2xl:w-52 2xl:w-96 h-52 overflow-y-auto p-7 flex lg:max-2xl:flex-col max-lg:flex-wrap 2xl:flex-wrap lg:max-2xl:space-y-2 bg-white cursor-pointer !text-black`}>
                            {knownWords.map((word, index) => (
                                <span className="max-sm:basis-1/2 sm:max-2xl:basis-1/3 2xl:basis-1/3 h-10 text-sm" key={index}>{word}</span>
                            ))}
                        </div>
                    </div>
                    <Transition appear show={knownWordsList} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeList}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all !text-black">

                                            <div className="flex flex-wrap">
                                                {knownWords.map((word, index) => (
                                                    <span className="max-sm:basis-1/2 sm:max-2xl:basis-1/3 2xl:basis-1/3 h-10 text-sm" key={index}>{word}</span>
                                                ))}
                                            </div>
                                            <div className="flex justify-center items-center flex-col space-y-3 mt-5">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-300 focus-visible:ring-offset-2 transition-all duration-300"
                                                    onClick={closeList}
                                                >
                                                    Anladım, teşekkürler
                                                </button>
                                                <button onClick={handleClear} className="inline-flex justify-center rounded-md bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-300 focus-visible:ring-offset-2 transition-all duration-300">
                                                    Listeyi Temizle
                                                </button>
                                            </div>

                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>

        </div>
    );
}
