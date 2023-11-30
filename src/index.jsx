import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Environment } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        shadows
        // camera={ {
        //     fov: 50,
        //     near: 0.1,
        //     far: 200,
        //     position: [ - 4, 3, 6 ]
            
        // } 
        // }
    >
    <fog attach="fog" args={['#17171b', 30, 40]} />
    <color attach="background" args={['#17171b']} />
    <Environment preset="dawn" />
        <Experience />
    </Canvas>
)