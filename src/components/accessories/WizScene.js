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
    <Box className="wiz" w={[375, 480, 640]} h={[375, 480, 640]}>
      <Canvas camera={{ fov: 60, position: [-19, 0, 5] }}>
        <Suspense fallback={<Loader />}>
          <WizLoader />
          <OrbitControls enablePan={false} enableZoom={false} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </Box>
  );
}
