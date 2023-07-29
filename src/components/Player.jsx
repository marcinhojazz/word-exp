import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react";
import { useInput } from "../hooks/useInput";

const Player = () => {
  const { forward, backward, left, right, jump, shift } = useInput();
  
  const model = useGLTF("../../playertest.glb");
  const { actions } = useAnimations(model.animations, model.scene);

  model.scene.scale.set(0.5, 0.5, 0.5);

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  })

  console.log(model)

  const currentAction = useRef("");

  useEffect(() => {
    // teste actions
    // actions?.walking?.play();
    
    // Consoles for testing
    // console.log("forward: ", forward);
    // console.log("backward: ", backward);
    // console.log("left: ", left);
    // console.log("right: ", right);
    // console.log("jump: ", jump);
    // console.log("shift: ", shift);

    let action = "";

    if(forward || backward || left || right) {
      action = "walking";
      if(shift) {
        action = "running";
      }
    } else if (jump) {
    } else {
      action = "idle";
    }

    if (currentAction.current != action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right, jump, shift])

  return <primitive object={model.scene} />
  
}

export default Player
