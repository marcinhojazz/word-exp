import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import AnimatedBox from "./components/AnimatedBox";
import CameraOrbitController from "./components/CameraOrbitController";
import Player from "./components/Player";

function App() {
  const testing = true;
  
  return (
    <Canvas shadows>
      {testing ? <Stats /> : null}
      {testing ? <gridHelper args={[20, 20]} /> : null}
      {testing ? <axesHelper visible={'testing'} args={[3]}/> : null}
      <Player />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight color="yellow" position={[0,0,5]} />
      <AnimatedBox isTesting={testing} />
    </Canvas>
  );
}

export default App;
