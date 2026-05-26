import { useState, useEffect } from "react"
import { RevealOnScroll } from "../RevealOnScroll"

const ROLES = ["Software Engineer", "Full Stack Developer", "Systems Builder", "AI Developer"]

const useTypewriter = (strings) => {
    const [text, setText] = useState("")
    const [idx, setIdx] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const current = strings[idx]
        const atEnd = !deleting && text === current
        const delay = atEnd ? 1800 : deleting ? 40 : 80

        const timer = setTimeout(() => {
            if (atEnd) {
                setDeleting(true)
            } else if (deleting) {
                if (text.length > 0) {
                    setText(text.slice(0, -1))
                } else {
                    setDeleting(false)
                    setIdx((i) => (i + 1) % strings.length)
                }
            } else {
                setText(current.slice(0, text.length + 1))
            }
        }, delay)

        return () => clearTimeout(timer)
    }, [text, deleting, idx, strings])

    return text
}

export const Home = () => {
    const role = useTypewriter(ROLES)

    return (
        <section id="home" className="min-h-screen flex items-center bg-[#e8ddd0] relative overflow-hidden">

            <div className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #a89c8d55 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }} />

            <div className="absolute -top-40 -right-40 w-175 h-175 rounded-full bg-indigo-400/[0.07] blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-8 py-24 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <RevealOnScroll>
                        <div>
                            <div className="flex items-center gap-2.5 mb-10">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-stone-500 text-sm tracking-wide">Open to full-time opportunities · May 2026</span>
                            </div>

                            <h1 className="font-bold text-stone-900 leading-none tracking-tight mb-6"
                                style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}>
                                Joseph<span className="text-indigo-600">.</span>
                            </h1>

                            <div className="flex items-center gap-1.5 mb-4 h-9">
                                <span className="text-stone-700 text-xl font-medium">{role}</span>
                                <span className="animate-blink text-indigo-500 text-xl font-light select-none">|</span>
                            </div>

                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-8">
                                <span className="text-stone-500 text-base">CS Graduate @ University of Houston</span>
                            </div>

                            <p className="text-stone-600 text-base leading-relaxed max-w-md mb-10">
                                Building full-stack platforms, distributed systems, and AI-powered tools
                                from scratch — end-to-end, production-ready.
                            </p>

                            <div className="flex items-center gap-3 mb-12">
                                <a
                                    href="#projects"
                                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg text-sm font-medium transition hover:-translate-y-px"
                                >
                                    View Projects
                                </a>
                                <a
                                    href="#contact"
                                    className="border border-stone-300 hover:border-stone-400 text-stone-700 hover:text-stone-900 px-6 py-3 rounded-lg text-sm font-medium transition hover:-translate-y-px"
                                >
                                    Get in Touch
                                </a>
                            </div>

                            <div className="flex items-center gap-5 text-sm text-stone-400">
                                <a href="https://linkedin.com/in/joseph-yarijarla" target="_blank" rel="noreferrer" className="hover:text-stone-900 transition-colors">LinkedIn</a>
                                <span className="text-stone-300">·</span>
                                <a href="mailto:josephyarijarla@gmail.com" className="hover:text-stone-900 transition-colors">Email</a>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="hidden lg:block">
                            <div className="rounded-2xl border border-stone-300/80 bg-[#f0e9df] overflow-hidden shadow-sm">

                                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-stone-300/60 bg-[#e8ddd0]">
                                    <span className="w-3 h-3 rounded-full bg-red-400/70"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-400/70"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-400/70"></span>
                                    <span className="ml-3 text-stone-400 text-xs font-mono">joseph.config.ts</span>
                                </div>

                                <div className="p-4 font-mono text-xs leading-6">
                                    <p>
                                        <span className="text-indigo-500">const</span>
                                        <span className="text-stone-800 font-medium"> engineer </span>
                                        <span className="text-stone-400">= {"{"}</span>
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-amber-700">name</span>
                                        <span className="text-stone-400">: </span>
                                        <span className="text-emerald-700">"Joseph Yarijarla"</span>
                                        <span className="text-stone-400">,</span>
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-amber-700">role</span>
                                        <span className="text-stone-400">: </span>
                                        <span className="text-emerald-700">"Software Engineer"</span>
                                        <span className="text-stone-400">,</span>
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-amber-700">focus</span>
                                        <span className="text-stone-400">: [</span>
                                    </p>
                                    <p className="pl-8">
                                        <span className="text-emerald-700">"Full Stack"</span>
                                        <span className="text-stone-400">,</span>
                                    </p>
                                    <p className="pl-8">
                                        <span className="text-emerald-700">"Production-Facing Systems"</span>
                                        <span className="text-stone-400">,</span>
                                    </p>
                                    <p className="pl-8">
                                        <span className="text-emerald-700">"AI Engineering"</span>
                                        <span className="text-stone-400">,</span>
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-stone-400">],</span>
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-amber-700">graduated</span>
                                        <span className="text-stone-400">: </span>
                                        <span className="text-emerald-700">"May 2026"</span>
                                        <span className="text-stone-400">,</span>
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-amber-700">open_to_work</span>
                                        <span className="text-stone-400">: </span>
                                        <span className="text-indigo-500">true</span>
                                        <span className="text-stone-400">,</span>
                                    </p>
                                    <p><span className="text-stone-400">{"}"}</span></p>
                                </div>

                                <div className="border-t border-stone-300/60 grid grid-cols-3 divide-x divide-stone-300/60">
                                    {[
                                        { label: "Projects", value: "5+" },
                                        { label: "APIs Built", value: "40+" },
                                        { label: "Technologies", value: "14+" },
                                    ].map(({ label, value }) => (
                                        <div key={label} className="py-3 flex flex-col items-center gap-0.5">
                                            <span className="text-stone-900 font-bold text-base">{value}</span>
                                            <span className="text-stone-400 text-xs">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                </div>
            </div>
        </section>
    )
}
