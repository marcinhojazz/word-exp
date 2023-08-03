import { useGLTF } from '@react-three/drei';
import React from 'react'

const City = () => {
  const model = useGLTF("../../city_v1.glb");

  model.scene.scale.set(0.004, 0.004, 0.004);
  model.scene.position.x = 35.5
  model.scene.position.z = 41


  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  })

  return (
    <>
        <primitive castShadow object={model.scene} />
    </>
  )
}

export default City