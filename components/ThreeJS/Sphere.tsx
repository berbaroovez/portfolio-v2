import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";

const Sphere = (props: any) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  const colorMap = useTexture("./PavingStones092_1K_Color.jpg");
  https: return (
    <mesh position={[-1.5, 0, 0]} ref={mesh}>
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial attach="material" map={colorMap} />
    </mesh>
  );
};

export default Sphere;
