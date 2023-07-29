import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { BoxHelper } from 'three';

const AnimatedBox = ({isTesting}) => {
  const meshRef = useRef();
  {
    isTesting ? useHelper(meshRef, BoxHelper, "blue") : null
  }
  

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
      <axesHelper />

      <boxGeometry />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

export default AnimatedBox;