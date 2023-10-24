"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, BakeShadows, Environment } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { easing } from 'maath'
import { Instances } from './ComputersModel'
import ComputersModel from './ComputersModel'
import { useState } from 'react'
import Link from 'next/link'

export default function Computers() {

    const [hideComputers, sethideComputers] = useState(false);

    const handleHideComputers = () => {
        sethideComputers(!hideComputers)
    }

    return (

        <>
            <div className={`lg:h-[calc(100vh-66px)] w-full relative top-0 left-0 max-lg:mt-16 ${hideComputers && 'hidden'} `}>
                <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 10, 10], fov: 55, near: 1, far: 20 }} eventPrefix="client">
                    <Environment preset='city' />
                    {/* Lights */}
                    <color attach="background" args={['black']} />
                    <hemisphereLight intensity={0.15} groundColor="white" />
                    <spotLight position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
                    {/* Main scene */}
                    <group position={[-0, -1, 0]}>
                        {/* Auto-instanced sketchfab model */}
                        <Instances>
                            <ComputersModel scale={0.5} />
                        </Instances>
                        {/* Plane reflections + distance blur */}
                        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                            <planeGeometry args={[50, 50]} />
                            <MeshReflectorMaterial
                                blur={[300, 30]}
                                resolution={2048}
                                mixBlur={1}
                                mixStrength={80}
                                roughness={1}
                                depthScale={1.2}
                                minDepthThreshold={0.4}
                                maxDepthThreshold={1.4}
                                color="#06170a"
                                metalness={1}
                            />
                        </mesh>
                    </group>
                    {/* Postprocessing */}
                    <EffectComposer disableNormalPass>
                        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={6} />
                        {/* <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={700} /> */}
                    </EffectComposer>
                    {/* Camera movements */}
                    <CameraRig />
                    {/* Small helper that freezes the shadows for better performance */}
                    <BakeShadows />
                </Canvas>
            </div>
            <div className='fixed top-1/2 right-2 z-30'>
                <div className='max-lg:hidden relative w-10 h-10 rounded-full bg-black dark:bg-white' onClick={handleHideComputers}>
                    <div className='flex items-center justify-center h-full peer cursor-pointer'>
                        <svg
                            width={24}
                            height={24}
                            className='fill-white dark:fill-black'
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 0c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1zM4.863 1.816a.954.954 0 0 0-.367.125 7.013 7.013 0 0 0-3.258 7.872A7.012 7.012 0 0 0 7.988 15a7.008 7.008 0 0 0 6.766-5.168 7.006 7.006 0 0 0-3.23-7.879.994.994 0 0 0-1.368.36 1 1 0 0 0 .36 1.367 5 5 0 1 1-7.344 5.613 4.99 4.99 0 0 1 2.324-5.621.997.997 0 0 0 .363-1.363 1.008 1.008 0 0 0-.996-.492zm0 0"
                            />
                        </svg>
                    </div>
                    <div className='hidden peer-hover:block absolute whitespace-nowrap tranform  -translate-x-[calc(100%+10px)] top-1/2 -translate-y-1/2 bg-black text-white p-2 text-sm rounded-lg'>Let&apos;s hide the computers if you want</div>
                </div>
                <Link href="/englishpractices" className='block w-10 h-10 relative rounded-full bg-black dark:bg-white text-black mt-5 cursor pointer'>
                    <div className='flex items-center justify-center text-2xl h-full !font-semibold peer text-white dark:text-black'>?</div>
                    <div className='hidden peer-hover:block absolute whitespace-nowrap tranform  -translate-x-[calc(100%+10px)] top-1/2 -translate-y-1/2 bg-black text-white p-2 text-sm rounded-lg'>In English, would you like to do some practice?</div>
                </Link>
            </div>
        </>

    )
}

function CameraRig() {
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0 + (state.pointer.x * state.viewport.width) / 10, (1 + state.pointer.y * state.viewport.height) / 15, 5.5], 0.5, delta)
        state.camera.lookAt(0, 0, 0)
    })
}
