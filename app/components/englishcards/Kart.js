// Kart.js
"use client"
import { useState, useEffect, Fragment } from "react";
import HarfList from "./HarfList";
import { Dialog, Transition } from '@headlessui/react'
import Info from "./Info";

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
        <div className="flex justify-center items-start space-x-8">
            {/* Kontrol Et */}
            <div className="flex flex-col justify-center mt-[136px]">
                <button
                    onClick={handleCheck}
                    className="bg-[#F97B22] text-white px-4 py-2 rounded-lg  active:scale-90 transition-all duration-300 hover:scale-105"
                >
                    Kontrol Et!
                </button>
            </div>

            {/* Kart */}
            <div className="flex flex-col space-y-5 items-center justify-center relative">

                {/* Kart */}
                <div
                    style={{ backgroundColor: `${palette[randomColorIndex].colors[paletteIndex]}` }}
                    className={`hover:scale-105 transition-all duration-300 active:scale-90 max-w-md mx-auto p-7 flex flex-col shadow-lg rounded-2xl select-none  !text-black ${result}`}
                // Üzerine gelince büyütme animasyonu
                >
                    <div className='flex justify-between'>
                        <div>{data[randomDataIndex].no}</div>
                        <div>{data[randomDataIndex].level}</div>
                    </div>
                    <div className='flex items-center justify-center h-52 w-52 !font-bold'>
                        {data[randomDataIndex].word}
                    </div>
                    <div className='flex justify-center'>
                        {data[randomDataIndex].subject}
                    </div>
                </div>

                {/* Input-Result */}
                <div className="relative">
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

                <div className="flex items-center justify-center -top-5 -left-[72px] absolute active:scale-90 transition-all duration-300">
                    <button onClick={handleHint} className="bg-[#64CCC5] rounded-full text-white w-10 h-10 flex items-center justify-center">
                        !
                    </button>
                </div>
                <Info data={data} randomDataIndex={randomDataIndex} />
            </div>

            {/* Sıradaki */}
            <div className="flex flex-col justify-center mt-[136px]">
                <button onClick={handleNext} className="bg-[#186F65] text-white px-4 py-2 rounded-lg active:scale-90 transition-all duration-300 hover:scale-105">
                    Sonraki
                </button>
            </div>

            <div className="absolute top-32 right-10">
                <h2 className="text-2xl text-center">Bildiğim Kelimeler</h2>
                <div>
                    <div
                        onClick={openList}
                        className={`mt-5 w-96 h-52 overflow-y-auto p-7 shadow-center rounded-2xl flex flex-wrap bg-white cursor-pointer !text-black`}>
                        {knownWords.map((word, index) => (
                            <span className="basis-1/3 h-10 text-sm" key={index}>{word}</span>
                        ))}
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
                                                    <span className="basis-1/3 h-10" key={index}>{word}</span>
                                                ))}
                                            </div>
                                            <div className="mt-4">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={closeList}
                                                >
                                                    Anladım, teşekkürler
                                                </button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>

                <button onClick={handleClear} className="bg-red-600 text-white px-4 py-2 rounded-lg mt-5 active:scale-90 transition-all duration-300">
                    Listeyi Temizle
                </button>
            </div>

        </div>
    );
}
