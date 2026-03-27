import { BrowserRouter } from "react-router-dom";

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
  Education, // ✅ ADDED
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        
        {/* HERO SECTION */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* MAIN SECTIONS */}
        <About />
        <Education />   {/* ✅ ADDED (correct position) */}
        <Experience />
        <Tech />
        <Works />
        <Certificates />

        {/* FOOTER / CONTACT */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas /> {/* ⚠️ remove if THREE error persists */}
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;