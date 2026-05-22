import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(17,17,20,0.85)] backdrop-blur-xl border-b border-white/10 shadow-[0_2px_16px_rgba(0,0,0,0.3)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="font-mono text-2xl font-bold text-white tracking-tight select-none">
            Joseph<span className="text-cyan-400">.</span>
          </a>

          <div
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10 transition cursor-pointer z-50 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open Menu"
          >
            <span className="text-3xl text-white">&#9776;</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#home"
              className="text-zinc-400 hover:text-white transition-colors font-medium px-2 py-1 rounded hover:bg-white/5"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-zinc-400 hover:text-white transition-colors font-medium px-2 py-1 rounded hover:bg-white/5"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-zinc-400 hover:text-white transition-colors font-medium px-2 py-1 rounded hover:bg-white/5"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-zinc-400 hover:text-white transition-colors font-medium px-2 py-1 rounded hover:bg-white/5"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};