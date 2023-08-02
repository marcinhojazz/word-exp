import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Ground = ({isTesting}) => {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    materialRef.current.uniforms.time.value = clock.getElapsedTime();
  });

  return (
    <mesh 
      rotation={[-Math.PI / 2, 0, 0]} 
      scale={[1, 1, 1]} 
      position={[0,0,0]} 
      receiveShadow
    >
      <planeGeometry args={[15, 15]}/>
      <shaderMaterial
        attach="material"
        ref={materialRef}
        uniforms={{
          time: { value: 0 },
          resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          varying vec2 vUv;
          void main() {
            vec2 grid = 2.0 * fract(10.0 * vUv - vec2(time * 0.1, time * 0.1));
            float checker = step(1.0 , mod(floor(grid.x) + floor(grid.y), 2.0));
            vec3 color = mix(vec3(1.0), vec3(0.2), checker);
            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
};

export default Ground;
