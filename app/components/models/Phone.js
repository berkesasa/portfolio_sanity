"use client"
import React from 'react'
import { Canvas } from '@react-three/fiber'
import PhoneModel from './PhoneModel'

function Phone() {
    return (
        <div className='h-full translate-y-20 transform'>
            {/* camera={{position: [-200, 300, -500]}} */}
            <Canvas camera={{ position: [12, 5, -10], fov: 2, near: 1 }} >
                <PhoneModel />
            </Canvas>

        </div>
    )
}

export default Phone