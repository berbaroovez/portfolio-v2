import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Cube } from "./Shapes";

export default function FallingSquares({ count = 100 }) {
  return (
    <Canvas
      style={{
        top: "-200px",
        left: 0,
        width: "100%",
        height: "150vh",
        position: "absolute",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {Array.from({ length: count }, (_, i) => (
        <Cube key={i} z={-i - 5} />
      ))}
    </Canvas>
  );
}
