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
    <Box w={[400, 500, 700]} h={[400, 500, 700]}>
      <Canvas camera={{ fov: 20, position: [30, 30, 30] }}>
        <Suspense fallback={<Loader />}>
          <WizLoader />
          <OrbitControls enablePan={false} enableZoom={false} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </Box>
  );
}
