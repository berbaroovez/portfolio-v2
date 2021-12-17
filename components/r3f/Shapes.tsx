import {
  MeshWobbleMaterial,
  OrbitControls,
  RoundedBox,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { useRef, useState } from "react";
import * as THREE from "three";

interface BoxProps {
  z: number;
}

const Cube = ({ z }: BoxProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  const { viewport, camera } = useThree();
  const positionVector = new THREE.Vector3(0, 0, z);
  const { width, height } = viewport.getCurrentViewport(camera, positionVector);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2), //cuts the number in half to get a random number from negative to positive
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state) => {
    ref.current.rotation.set((data.rX += 0.002), 0, (data.rX += 0.0001));
    ref.current.position.set(data.x * width, (data.y += 0.01), z);
    if (data.y > height / 1.2) {
      data.y = -height / 1.2;
    }
  });
  return (
    <RoundedBox ref={ref} position={[data.x, data.y, z]}>
      {/* @ts-ignore */}
      <MeshWobbleMaterial
        attach="material"
        speed={0.5}
        factor={2}
        color="#cc5f5f"
      />
    </RoundedBox>
    // <mesh ref={ref} position={[data.x, data.y, z]}>
    //   <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
    //   {/* <meshBasicMaterial attach="material" color="#cc5f5f" />
    //    */}

    // </mesh>
  );
};

export { Cube };
