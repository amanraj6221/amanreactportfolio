import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      
      {/* ===== TEXT ===== */}
      <div
        className={`absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX}
        flex flex-col sm:flex-row items-start gap-5`}
      >
        <div className="flex flex-row sm:flex-col justify-center items-center mt-5 sm:mt-0">
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]" />
          <div className="w-20 h-1 sm:w-1 sm:h-80 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Aman Raj</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Developer | 3× Smart India Hackathon Finalist 🏆
            <br className="hidden sm:block" />
            React • Django • Node.js
          </p>
        </div>
      </div>

      {/* ===== 3D / FALLBACK ===== */}
      <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex justify-center items-center">
        
        {isMobile ? (
          // ✅ MOBILE SAFE (NO CRASH)
          <img
            src="/logo.svg"
            alt="preview"
            className="w-[180px] sm:w-[220px] object-contain opacity-90"
          />
        ) : (
          // ✅ DESKTOP FULL 3D
          <ComputersCanvas />
        )}

      </div>

      {/* ===== SCROLL ===== */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[55px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;