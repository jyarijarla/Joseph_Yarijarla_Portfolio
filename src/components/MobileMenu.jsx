import { useEffect } from "react"

export const MobileMenu = ({menuOpen, setMenuOpen}) =>{

    return(
        <div className={`fixed top-0 left-0 w-full h-screen bg-[rgba(17,17,20,0.97)] backdrop-blur-xl z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 text-white text-4xl focus:outline-none cursor-pointer hover:text-cyan-400 transition" aria-label="Close Menu">
            &times;
        </button>
            <a href='#home' className={`text-3xl font-semibold text-white my-6 tracking-tight transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} hover:text-cyan-400`} onClick={() => setMenuOpen(false)}>
                Home
            </a>
            <a href='#about' className={`text-3xl font-semibold text-white my-6 tracking-tight transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} hover:text-cyan-400`} onClick={() => setMenuOpen(false)}>
                About
            </a>
            <a href='#projects' className={`text-3xl font-semibold text-white my-6 tracking-tight transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} hover:text-cyan-400`} onClick={() => setMenuOpen(false)}>
                Projects
            </a>
            <a href='#contact' className={`text-3xl font-semibold text-white my-6 tracking-tight transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} hover:text-cyan-400`} onClick={() => setMenuOpen(false)}>
                Contact
            </a>
        </div>
    );
};