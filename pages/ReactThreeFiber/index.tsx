import {
  softShadows,
  MeshWobbleMaterial,
  OrbitControls,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
// import { softShadows } from "drei";
interface Props {
  position: number[];
  args?: any;
  color?: string;
}

// softShadows();
const SpinningMesh = ({ position, args, color }: Props) => {
  const mesh = useRef<THREE.Mesh>(null!);
  //useframe aalways has to be in its own component to avoid infinite calls
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh ref={mesh} position={position} castShadow>
      {/* This is the same as doing new THREE.mesh */}
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={1}
        factor={0.6}
      />
    </mesh>
  );
};

export default function ReactThreeFiber() {
  return (
    <Canvas
      style={{
        height: "80vh",
      }}
      flat
      camera={{ fov: 60, position: [-5, 2, 10] }}
      shadows
    >
      <directionalLight
        position={[0, 10, 0]}
        intensity={1}
        // shadow-mapSize-Width={1024}
        // shadow-mapSize-Height={1024}
        // shadow-camera-far={50}
        // shadow-camera-left={-10}
        // shadow-camera-right={10}
        // shadow-camera-top={10}
        // shadow-camera-bottom={-10}
        castShadow
      />
      <directionalLight
        position={[5, 10, 0]}
        intensity={1}
        // shadow-mapSize-Width={1024}
        // shadow-mapSize-Height={1024}
        // shadow-camera-far={50}
        // shadow-camera-left={-10}
        // shadow-camera-right={10}
        // shadow-camera-top={10}
        // shadow-camera-bottom={-10}
        castShadow
      />
      <ambientLight intensity={0.3} />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />

      <group>
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3, 0]}
        >
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          {/* <shadowMaterial attach="material" opacity={0.5} /> */}
          <shadowMaterial attach="material" opacity={0.3} />
        </mesh>

        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color="lightblue" />
        <SpinningMesh position={[-2, 1, -5]} color="pink" />
        <SpinningMesh position={[5, 1, -2]} color="pink" />
      </group>

      <OrbitControls />
    </Canvas>
  );
}

// const CanvasZone = styled(Canvas)`
//   /* background: red;
//   height: 100vh;
//   width: 500px; */
// `;
