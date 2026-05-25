export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`fixed inset-0 bg-[#e8ddd0]/98 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-all duration-300
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-5 right-6 text-stone-400 hover:text-stone-900 text-3xl transition cursor-pointer focus:outline-none"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <nav className="flex flex-col items-center gap-8">
                {["Home", "About", "Projects"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setMenuOpen(false)}
                        className={`text-2xl font-semibold text-stone-700 hover:text-stone-900 transition-all duration-300
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        {item}
                    </a>
                ))}
                <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className={`bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-300
                    ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                    Contact
                </a>
            </nav>

        </div>
    );
};
