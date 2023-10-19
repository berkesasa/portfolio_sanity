"use client"
import React, { useRef } from 'react'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three';

function PhoneModel() {
    const groupRef = useRef(new Group());
    const contact = useGLTF('./contact.glb')

    useFrame(() => {
        if (groupRef.current) {
            // groupRef.current.rotation.x += 0.01; // X ekseni etrafında döndürme
            groupRef.current.rotation.y -= 0.001; // Y ekseni etrafında döndürme
        }
    });

    return (
        <>
            <OrbitControls />
            <group ref={groupRef}>
                <primitive object={contact.scene} />
            </group>
            <Environment preset={'city'} />
        </>
    )
}
useGLTF.preload('./contact.glb')

export default PhoneModel
