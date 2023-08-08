import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { Sphere } from "@react-three/drei";

export default function Home() {
  return (
    <Canvas style={{ background: "#f0f0f0" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <Suspense fallback={null}>
        <IntersectingSpheres />
      </Suspense>
    </Canvas>
  );
}

function IntersectingSpheres() {
  return (
    <>
      <Sphere args={[50, 32, 32]}>
        <meshBasicMaterial wireframe color={0x00ff00} />
      </Sphere>
      <Sphere position={[100, 0, 0]} args={[50, 32, 32]}>
        <meshBasicMaterial wireframe color={0x00ff00} />
      </Sphere>
    </>
  );
}
