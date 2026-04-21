// src/components/canvas/Computers.jsx
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// ✅ preload (important)
uuseGLTF("./desktop_pc/scene.gltf");

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <>
      {/* ✅ LIGHTS (stable for mobile) */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[0, 0, 2]} intensity={1.2} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 0.75}
        position={isMobile ? [0, -1.8, 0] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px]">
      <Canvas
        frameloop="always" // ✅ IMPORTANT (mobile fix)
        dpr={isMobile ? 1 : [1, 2]}
        camera={{
          fov: isMobile ? 60 : 25,
          position: isMobile ? [0, 1.5, 6] : [20, 3, 5],
          near: 0.1,
          far: 200,
        }}
        gl={{
          antialias: !isMobile,
          powerPreference: isMobile ? "low-power" : "high-performance",
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1.2}
            enableDamping
            dampingFactor={0.05}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          <Computers isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;