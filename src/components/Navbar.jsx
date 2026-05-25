import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#e8ddd0]/90 backdrop-blur-md border-b border-stone-300/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-sm font-bold text-stone-900 tracking-tight select-none">
            joseph<span className="text-indigo-600">.</span>
          </a>

          <div
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-stone-900/[0.06] transition cursor-pointer z-50 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Open Menu"
          >
            <span className="text-xl text-stone-500">&#9776;</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {["Home", "About", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-stone-500 hover:text-stone-900 transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-stone-900/[0.05]"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition hover:-translate-y-px"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
