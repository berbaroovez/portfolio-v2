import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import dynamic from "next/dynamic";

const TextureLoader = dynamic(() => import("three/src/loaders/TextureLoader"), {
  ssr: false,
});
// TextureLoader = require("three/src/loaders/TextureLoader");

// All textures are CC0 textures from: https://cc0textures.com/
const name = (type) => `PavingStones092_1K_${type}.jpg`;

function Scene() {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      name("Color"),
      name("Displacement"),
      name("Normal"),
      name("Roughness"),
      name("AmbientOcclusion"),
    ]
  );
  // const [
  //   colorMap,
  //   displacementMap,
  //   normalMap,
  //   roughnessMap,
  //   aoMap
  // ] = useTexture([
  //   name("Color"),
  //   name("Displacement"),
  //   name("Normal"),
  //   name("Roughness"),
  //   name("AmbientOcclusion")
  // ]);
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        {/* Width and height segments for displacementMap */}
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshStandardMaterial
          displacementScale={0.2}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </mesh>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </div>
  );
}
