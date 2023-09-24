"use client"
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, BakeShadows, Environment } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { easing } from 'maath'
import { Instances} from './Model'
import Model from './Model'

export default function Computers() {
    return (

        <div className='h-screen w-full relative top-0 left-0'>
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
                        <Model scale={0.5} />
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

    )
}

function CameraRig() {
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0 + (state.pointer.x * state.viewport.width) / 10, (1 + state.pointer.y * state.viewport.height) / 15, 5.5], 0.5, delta)
        state.camera.lookAt(0, 0, 0)
    })
}
