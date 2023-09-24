"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function ThemeButton() {

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button className="bg-teal-500/30 flex items-center justify-center rounded-lg text-teal-500 p-3">
            <DarkModeSwitch
                checked={theme === 'dark'}
                onChange={toggleTheme}
                size={24}
            />
        </button>
    )
}

export default ThemeButton