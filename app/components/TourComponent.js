import React from 'react';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const Tour = dynamic(
    () => import('reactour'),
    { ssr: false },
);


function TourComponent({ isOpen, onRequestClose }) {

    const steps = [
        {
            selector: '.step-1', // Selector, turun nerede başlayacağını belirtir
            content: 'Bu alan kart yapın. Burada bilmeye çalıştığın kelime yer alıyor.',
        },
        {
            selector: '.step-2',
            content: 'Cevabını bu alana girebilirsin. "Enter" tuşuna basarak cevabını kontrol edebilir, "Tab" tuşuna basarak bir sonraki kelimeye geçebilirsin.',
        },
        {
            selector: '.step-3',
            content: 'Kontrol etmen için gerekli buton. Buna basarak ya da entera tıklayarak cevabını kontrol edebilirsin.',
        },
        {
            selector: '.step-4',
            content: 'Bir sonraki kelimeye geçmek için buna tıklamalısın.',
        },
        {
            selector: '.step-5',
            content: 'Bilmeye çalıştığın kelime ile ilgili harf isteyebilirsin.',
        },
        {
            selector: '.step-6',
            content: 'Kelime ilgili kısa bir ipucu alabilirsin.',
        },
        {
            selector: '.step-7',
            content: 'Bu alanda ise bildiğin kelimelere bakabilir, listeni tamamen temizleyip beyaz bir başlangıç yapabilirsin.',
        },
    ];

    const handleTourEnd = () => {
        onRequestClose();
    };

    const onClickClose = () => {
        setCurrentStep(1)
    }

    return (
        <Tour
            steps={steps}
            isOpen={isOpen}
            onRequestClose={handleTourEnd}
        />
    );
}

export default TourComponent;
