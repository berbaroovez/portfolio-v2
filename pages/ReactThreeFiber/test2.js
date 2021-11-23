import { Suspense, useRef } from "react";
import { useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";

const Model = ({ url, ...rest }) => {
  const { scene } = useGLTF(url);
  return <primitive {...rest} object={scene} />;
};

const Sphere = () => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  const colorMap = useTexture("/PavingStones092_1K_Color.jpg");
  return (
    <mesh position={[-1.5, 0, 0]} ref={mesh}>
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};

const Test = () => {
  return (
    <>
      {/* <img src="/PavingStones092_1K_Color.jpg" /> */}
      <Canvas
        style={{
          width: "100%",
          height: "80vh",
        }}
        shadowMap
        dpr={[1, 2]}
        gl={{ physicallyCorrectLights: true }}
        camera={{ position: [-6, 0, 16], fov: 36 }}
      >
        <color attach="background" args={["green"]} />
        <ambientLight />
        <directionalLight intensity={1.1} position={[0.5, 0, 0.866]} />
        <directionalLight intensity={0.8} position={[-6, 2, 2]} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Suspense fallback={null}>
          {/* <Environment preset="city" />
        <Model scale={1.2} url="/iPhone 12.glb" /> */}
          <Sphere />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Test;
