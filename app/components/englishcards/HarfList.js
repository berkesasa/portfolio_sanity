// HarfList.js
import React from "react";


export default function HarfList({ text }) {
    const letters = text.split(""); // Metni harf harf ayırın

    return (
        <div className="flex space-x-2 absolute -top-20 max-sm:flex-wrap">
            {letters.map((letter, index) => (
                <div key={index} className="shadow-lg flex items-center justify-center rounded-full w-8 h-8 text-sm bg-[#176B87] text-white">
                    {letter}
                </div>
            ))}
        </div>
    );
}
