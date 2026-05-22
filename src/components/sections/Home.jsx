import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return <section id='home' className="min-h-screen flex items-center justify-center relative" style={{ background: '#111114' }}>
        <RevealOnScroll>
            <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left column */}
                <div className="space-y-8">
                    <span className="inline-block bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium px-4 py-1.5 rounded-full tracking-wide">
                        CS Student @ University of Houston
                    </span>

                    <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white">
                        Hi, I'm<br />Joseph.
                    </h1>

                    <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                        I build things for the web. Focused on software development,
                        AI, and machine learning. Open to new opportunities.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href='#projects' className="bg-white text-zinc-900 py-3 px-7 rounded-lg font-semibold transition hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                            View Projects
                        </a>
                        <a href='#contact' className="border border-white/20 text-white py-3 px-7 rounded-lg font-medium transition hover:-translate-y-0.5 hover:bg-white/5">
                            Contact Me
                        </a>
                    </div>

                    <div className="flex items-center gap-6 pt-2">
                        <a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors text-sm font-medium">GitHub</a>
                        <span className="text-zinc-700">·</span>
                        <a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors text-sm font-medium">LinkedIn</a>
                        <span className="text-zinc-700">·</span>
                        <a href="#contact" className="text-zinc-500 hover:text-cyan-400 transition-colors text-sm font-medium">Email</a>
                    </div>
                </div>

                {/* Right column — code card */}
                <div className="relative hidden lg:block">
                    <div className="rounded-2xl border border-white/10 bg-[#18181c] p-7 font-mono text-sm leading-7 shadow-[0_0_60px_rgba(0,0,0,0.4)]">
                        <div className="flex gap-2 mb-6">
                            <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
                        </div>
                        <div className="space-y-0.5">
                            <p><span className="text-cyan-400">const</span> <span className="text-white">me</span> <span className="text-zinc-500">=</span> <span className="text-zinc-500">{"{"}</span></p>
                            <p className="pl-6"><span className="text-zinc-300">name</span><span className="text-zinc-500">:</span> <span className="text-zinc-400">"Joseph Yarijarla"</span><span className="text-zinc-500">,</span></p>
                            <p className="pl-6"><span className="text-zinc-300">role</span><span className="text-zinc-500">:</span> <span className="text-zinc-400">"CS Student"</span><span className="text-zinc-500">,</span></p>
                            <p className="pl-6"><span className="text-zinc-300">university</span><span className="text-zinc-500">:</span> <span className="text-zinc-400">"Univ. of Houston"</span><span className="text-zinc-500">,</span></p>
                            <p className="pl-6"><span className="text-zinc-300">focus</span><span className="text-zinc-500">: [</span></p>
                            <p className="pl-12"><span className="text-zinc-400">"Software Dev"</span><span className="text-zinc-500">,</span></p>
                            <p className="pl-12"><span className="text-zinc-400">"AI / ML"</span><span className="text-zinc-500">,</span></p>
                            <p className="pl-6"><span className="text-zinc-500">],</span></p>
                            <p className="pl-6"><span className="text-zinc-300">openToWork</span><span className="text-zinc-500">:</span> <span className="text-cyan-400">true</span><span className="text-zinc-500">,</span></p>
                            <p><span className="text-zinc-500">{"}"}</span></p>
                        </div>
                    </div>
                    <div className="absolute -inset-4 bg-white/2 rounded-3xl blur-2xl -z-10"></div>
                </div>

            </div>
        </RevealOnScroll>
    </section>
}
