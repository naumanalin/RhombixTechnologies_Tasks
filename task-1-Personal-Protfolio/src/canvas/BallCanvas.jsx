import { Float, OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const FloatBallMess = () => {

    return (
        <Float >
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75} >
                {/* <iconsahedronGeometry args={[1, 1]} /> */}
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
            </mesh>
        </Float>
    )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas>
        <Suspense >
            <OrbitControls enableZoom={false} />
            <FloatBallMess img={icon} />
        </Suspense>

        <Preload all />
    </Canvas>
  )
}

export default BallCanvas


