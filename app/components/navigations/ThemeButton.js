"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function ThemeButton() {

    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button className="dark:bg-teal-300/30 bg-teal-500/30 flex items-center justify-center rounded-lg text-teal-500 p-3">

            <DarkModeSwitch 
                checked={theme === 'dark'}
                onChange={toggleTheme}
                size={24}
                sunColor="black"
                moonColor="white"
            />
            
        </button>
    )
}

export default ThemeButton