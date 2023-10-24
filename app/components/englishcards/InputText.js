"use client"
import { useState } from 'react';

function InputText({ checkValue }) {
    const [inputText, setInputText] = useState('');
    const [bilinenler, setBilinenler] = useState([]);

    const bilinenleriEkle = (yeniBilinen) => {
        setBilinenler((prevBilinenler) => [...prevBilinenler, yeniBilinen]);
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleAddToKnown = () => {
        if (isTextEqual) {
            bilinenleriEkle(checkValue);
        }
    };

    const isTextEqual = inputText === checkValue;


    return (
        <div className='max-w-[90%]'>
            <input
                className='w-full border focus:ring-0 outline-none rounded-xl border-black px-2 py-2'
                type="text"
                value={inputText}
                onChange={handleInputChange}
                bilinenleriEkle={bilinenleriEkle}
                placeholder="Metin girin..."
            />
            {isTextEqual ? (
                <div>
                    <p>Metinler aynıdır.</p>
                    <button onClick={handleAddToKnown}>Bildiklerime Ekle</button>
                </div>
            ) : (
                <p>Metinler farklıdır.</p>
            )}
            {bilinenler}
        </div>
    );
}

export default InputText;
