"use client"
import { Cursor, useTypewriter } from 'react-simple-typewriter'

function TypeWriter() {
    const [text, count] = useTypewriter({
        words: ["<Frontend Developer/>",
            "<Next.js Learner/>",
            "<Typescript Learner/>",
            "<Lego Lover/>"],
        loop: true,
        delaySpeed: 1000,
    });

    return (
        <>
            <span>{text}</span>
            <Cursor cursorColor='#16B09F' />
        </>
    )
}

export default TypeWriter