
import { lazy, Suspense } from "react";


const Contact = lazy(() => import("./components/Contact"));
const Experience = lazy(() => import("./components/Experience"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Project = lazy(() => import("./components/Project"));
const Technologies = lazy(() => import("./components/Technologies"));

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#000000_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
          <Navbar />
          <Hero />
          <Technologies />
          <Project />
          <Experience />
          <Contact />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
