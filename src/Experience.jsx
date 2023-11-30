
import { MeshReflectorMaterial, OrbitControls, Stars } from '@react-three/drei'
import { Perf } from 'r3f-perf'

import { Face } from './Face'

import { Face2 } from './Face2'
import { Suspense } from 'react'

export default function Experience()
{
    return <>

        {/* <Perf position="top-left" /> */}

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />
       {/* <Dumbledore scale={0.4} position={[-2, -1, 0]}/>
        <Harry scale={0.4}  position={[2, -1, 0]}/> */}

        <Suspense>
        <Face />
        </Suspense>

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1}/>
        <mesh  position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry args={[10, 10]}/>
            <MeshReflectorMaterial
             blur={[500, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.85}
            color="#151515"
            metalness={0.6}
            roughness={0.5} />
        </mesh>

    </>
}