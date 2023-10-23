import React from 'react'
import Welcome from './components/Welcome'

export const metadata = {
    title: 'Berke SASA Portfolio',
    description: "Let's look my portfolio :)",
}

function Page() {
    return (
        <div>
            <Welcome />
        </div>
    )
}

export default Page