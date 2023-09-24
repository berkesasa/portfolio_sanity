"use client"

const { ThemeProvider } = require("next-themes")

function Provider({children}) {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default Provider