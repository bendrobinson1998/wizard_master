import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import WizLoader from './WizLoader'



export default function WizScene() {
  return (
    <div className="App">
      <Canvas shadows={true}>
        <Suspense fallback={null}>
          <WizLoader />
          <OrbitControls />
          <ambientLight intensity={0.2} />
            
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  )
}
