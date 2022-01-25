import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Html,
  useProgress,
  Environment,
} from "@react-three/drei";
import { Box, Text } from "@chakra-ui/react";
import WizLoader from "./WizLoader";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <Text>{progress}% loaded</Text>
    </Html>
  );
}

export default function WizScene() {
  return (
    <Box
      m="auto"
      mb={["-160px", "-190px", "-260px"]}
      w={[375, 480, 640]}
      h={[375, 480, 640]}
      position="relative"
    >
      <Canvas camera={{ fov: 50, position: [-6, 6, 12] }}>
        <Suspense fallback={<Loader />}>
          <WizLoader />
          <OrbitControls enablePan={false} enableZoom={false} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </Box>
  );
}
