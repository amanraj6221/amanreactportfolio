import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <>
      {/* ✅ Balanced Lights (mobile friendly) */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[0, 0, 3]} intensity={1.2} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}   // ✅ better fit mobile
        position={isMobile ? [0, -2.2, 0] : [0, -3.25, -1.5]} // ✅ FIX CENTER
        rotation={[-0.01, -0.2, -0.1]}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px] mt-10">
      <Canvas
        shadows
        frameloop="always"
        dpr={isMobile ? 1 : [1, 2]}  // ✅ performance control
        camera={{
          fov: isMobile ? 55 : 25,   // ✅ mobile wider view
          near: 0.1,
          far: 200,
          position: isMobile ? [0, 1.5, 5.5] : [20, 3, 5], // ✅ KEY FIX
        }}
        gl={{
          preserveDrawingBuffer: true,
          powerPreference: isMobile ? "low-power" : "high-performance", // ✅ smooth mobile
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1.2} // ✅ smoother
            enableDamping
            dampingFactor={0.05}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          <Computers isMobile={isMobile} />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;