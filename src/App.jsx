import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Certificates,
  Education,
} from "./components";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-x-hidden">
        
        {/* HERO SECTION */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero isMobile={isMobile} />
        </div>

        {/* MAIN SECTIONS */}
        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        <Certificates />

        {/* FOOTER */}
        <div className="relative z-0">
          <Contact />

          {/* 🚀 3D only for desktop */}
          {!isMobile && <StarsCanvas />}
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;