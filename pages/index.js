import { Canvas, useThree } from "react-three-fiber";
import { Suspense, useState, useRef, useEffect } from "react"; // Import useRef here

export default function Home() {
  const [sphereSize, setSphereSize] = useState(50);
  const [rotationX, setRotationX] = useState(0.005);
  const [rotationY, setRotationY] = useState(0.005);
  const [sphereX, setSphereX] = useState(100);
  const [sphereY, setSphereY] = useState(0);
  const [sphereZ, setSphereZ] = useState(0);
  const [lineColor, setLineColor] = useState("#00ff00");
  const [canvasColor, setCanvasColor] = useState("#f0f0f0");

  return (
    <div
      style={{
        flex: 1,
        minHeight: "100vh",
      }}
    >
      {/* ... (Input fields for variables) ... */}
      <Canvas
        style={{
          background: canvasColor,
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <Suspense fallback={null}>
          <IntersectingSpheres
            sphereSize={sphereSize}
            rotationX={rotationX}
            rotationY={rotationY}
            spherePosition={[sphereX, sphereY, sphereZ]}
            lineColor={lineColor}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

function IntersectingSpheres({
  sphereSize,
  rotationX,
  rotationY,
  spherePosition,
  lineColor,
}) {
  const { scene } = useThree();

  const sphere1Ref = useRef();
  const sphere2Ref = useRef();

  useEffect(() => {
    sphere1Ref.current.rotation.x = rotationX;
    sphere1Ref.current.rotation.y = rotationY;
  }, [rotationX, rotationY]);

  return (
    <>
      <mesh ref={sphere1Ref} position={spherePosition}>
        <sphereGeometry args={[sphereSize, 32, 32]} />
        <meshBasicMaterial wireframe color={lineColor} />
      </mesh>
      <mesh position={[100, 0, 0]} ref={sphere2Ref}>
        <sphereGeometry args={[sphereSize, 32, 32]} />
        <meshBasicMaterial wireframe color={lineColor} />
      </mesh>
    </>
  );
}
