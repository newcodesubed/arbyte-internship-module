import { lazy, Suspense } from "react";
import logo from "../assets/logo.webp";

const FaLinkedinIn = lazy(() =>
  import("react-icons/fa").then(m => ({ default: m.FaLinkedinIn }))
);
const FaGithub = lazy(() =>
  import("react-icons/fa").then(m => ({ default: m.FaGithub }))
);
const FaInstagram = lazy(() =>
  import("react-icons/fa").then(m => ({ default: m.FaInstagram }))
);

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mx-2"
            width={50}
            height={33}
            alt="Logo"
            loading="lazy" 
          />
        </a>
      </div>

      <Suspense fallback={<div className="w-6 h-6 bg-stone-700 rounded-full animate-pulse" />}>
        <div className="m-8 text-2xl flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/subed/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-stone-500"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/newcodesubed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="hover:text-stone-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/learn_and_thrive17/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-stone-500"
          >
            <FaInstagram />
          </a>
        </div>
      </Suspense>
    </nav>
  );
}

export default Navbar;
