import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Environment, OrbitControls, OrthographicCamera, PerspectiveCamera, Stats } from "@react-three/drei";
import AnimatedBox from "./components/AnimatedBox";
import Player from "./components/Player";
import Ground from "./components/Ground";
import City from "./components/City";
import { Physics } from "@react-three/rapier";

function App() {
  const testing = true;
  
  return (
    <>
      <Canvas shadows>
        {testing ? <Stats /> : null}
        {testing ? <gridHelper args={[20, 20]} /> : null}
        {testing ? <axesHelper visible={'testing'} args={[3]}/> : null}

        <Suspense>
          <Physics debug>
            <Player />
            <City />
          </Physics>
        </Suspense>

        {/* <ambientLight intensity={0.4} />
        <directionalLight 
          color="white" 
          position={[0,2,5]} 
          intensity={0.5} 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.3} 
          intensity={0.5} 
          castShadow
        /> */}
        <PerspectiveCamera position={[1.5, 3.2, 3.5]} makeDefault />
        {/* <Ground /> */}

        <AnimatedBox isTesting={testing} />
        <CameraLogger />
        <Environment preset="city" />
      </Canvas>
      <div className="helpcontrols">
        <img width={400} src="/helpcontrol.png" alt="help" />
      </div>
    </>
  );
}

function CameraLogger() {
  const { camera } = useThree();

  useEffect(() => {
    const intervalId = setInterval(() => {
      // console.log(camera.position);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [camera]);

  return null;
}

export default App;
