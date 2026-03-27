// CANVAS
import {
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from "./canvas";

// CORE COMPONENTS
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Contact from "./Contact";
import CanvasLoader from "./Loader";

// NEW SECTIONS
import Certificates from "./Certificates";
import Education from "./Education"; // ✅ ADDED

// EXPORT ALL
export {
  // sections
  Hero,
  Navbar,
  About,
  Education,   // ✅ ADDED HERE
  Experience,
  Tech,
  Works,
  Certificates,
  Contact,

  // loaders
  CanvasLoader,

  // canvas
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
};