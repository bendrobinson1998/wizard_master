import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Html, useProgress } from '@react-three/drei'
import { Box } from '@chakra-ui/react'
import WizLoader from './WizLoader'

function Loader() {
  const { progress } = useProgress()
  return( <Html center>{progress}% loaded</Html>)
}

export default function WizScene() {
  return (
  <Box
    m="auto"
    mt={['40px', '0px', '-20px']}
    mb={['-160px', '-190px', '-260px']}
    w={[375, 480, 640]}
    h={[375, 480, 640]}
    position="relative"
  >
      <Canvas camera={{ fov: 15, position: [-30, 25, 20]}} >
        <Suspense fallback={<Loader />}>
          <WizLoader />
          <OrbitControls enablePan={false} enableZoom={false}  />
<Environment preset="city" />
        </Suspense>
      </Canvas>
  </Box>
  )
}

