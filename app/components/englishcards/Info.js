"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Info({data, randomDataIndex}) {
    let [isOpen, setIsOpen] = useState(false)
    const [wordInfo, setWordInfo] = useState("");

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
        const currentData = data[randomDataIndex];
        const turkishWords = currentData.turkish.split(" ");
        const numberOfWords = turkishWords.length;
        const firstLetter = turkishWords[0][0].toLowerCase();
        const info = `Cevap ${numberOfWords} kelime ve ilk harfi "${firstLetter}".`;
        setWordInfo(info);
    }


    return (
        <>
            <div className="flex items-center justify-center absolute -top-5 -right-[72px] active:scale-90 transition-all duration-300">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-full bg-[#12486B] text-white w-10 h-10 flex items-center justify-center"
                >?</button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all text-center">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Kelime Bilgisi
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-gray-500">
                                            {wordInfo}
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Anladım!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
