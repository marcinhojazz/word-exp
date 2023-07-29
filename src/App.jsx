import { Canvas, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls, OrthographicCamera, PerspectiveCamera, Stats } from "@react-three/drei";
import AnimatedBox from "./components/AnimatedBox";
import Player from "./components/Player";

function App() {
  const testing = true;
  
  return (
    <Canvas shadows or>
      {testing ? <Stats /> : null}
      {testing ? <gridHelper args={[20, 20]} /> : null}
      {testing ? <axesHelper visible={'testing'} args={[3]}/> : null}
      <Player />
      <OrbitControls position={[0,3,5]}/>
      <ambientLight intensity={0.5} />
      <directionalLight color="yellow" position={[0,0,5]} />
      <PerspectiveCamera position={[1.5, 3.2, 3.5]} makeDefault />

      <AnimatedBox isTesting={testing} />
      <CameraLogger />
    </Canvas>
  );
}

function CameraLogger() {
  const { camera } = useThree();

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(camera.position);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [camera]);

  return null;
}

export default App;
