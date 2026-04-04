import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf"); // ✅ FIXED PATH

  return (
    <mesh>
      {/* LIGHTS (optimized) */}
      <hemisphereLight intensity={0.3} groundColor="black" />
      <pointLight intensity={0.8} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.7}
        position={isMobile ? [0, -3.5, -2] : [0, -4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
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

  // 🔥 HARD STOP for mobile (best practice)
  if (isMobile) {
    return (
      <div className="w-full h-[300px] flex justify-center items-center">
        <img
          src="/logo.svg"
          alt="preview"
          className="w-[200px] object-contain"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] mt-10">
      <Canvas
        frameloop="demand"
        dpr={[1, 1.5]} // ✅ optimized
        camera={{ position: [20, 3, 5], fov: 25 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            autoRotate
            enableDamping
            dampingFactor={0.05}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          <Computers isMobile={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;