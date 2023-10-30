import React, { useState, useEffect } from 'react';
import TourComponent from './TourComponent';

function StartTourButton() {
    const [isTourOpen, setIsTourOpen] = useState(false);

    const handleStartTour = () => {
        setIsTourOpen(true);
    };

    return (
        <>
            <button className='block bg-sasaGreenDM text-black p-3 rounded-xl max-lg:text-sm' onClick={handleStartTour}>Nasıl Oynanır?</button>
            <TourComponent isOpen={isTourOpen} onRequestClose={() => {setIsTourOpen(false)}} />
        </>
    );
}

export default StartTourButton;
