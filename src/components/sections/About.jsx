import { RevealOnScroll } from "../RevealOnScroll";

const skills = {
    languages: ["Java", "TypeScript", "JavaScript", "Python", "SQL", "C++"],
    backend: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MySQL", "Redis", "BullMQ", "Docker", "AWS", "Kubernetes", "Git", "CI/CD"],
    testing: ["JUnit 5", "Vitest", "Playwright", "TDD", "Agile", "SDLC"],
}

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-28 bg-[#ddd1c2]">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-6">

                    <p className="text-indigo-600 text-xs font-semibold uppercase tracking-[0.2em] mb-3">About</p>
                    <h2 className="text-4xl font-bold text-stone-900 mb-12">A little about me.</h2>

                    <div className="rounded-xl border border-stone-300/70 bg-[#f0e9df] p-8 mb-4">
                        <p className="text-stone-600 leading-relaxed">
                            I'm a Computer Science student at the University of Houston graduating May 2026,
                            with a minor in Mathematics and a Dean's List honor (Spring 2025). I specialize in
                            full-stack engineering and distributed systems — building production-grade platforms,
                            designing REST APIs at scale, and shipping AI-powered workflows from scratch.
                        </p>
                    </div>

                    <div className="rounded-xl border border-stone-300/70 bg-[#f0e9df] p-6 mb-4">
                        <div className="mb-5">
                            <h3 className="text-stone-400 text-xs font-semibold uppercase tracking-wider mb-3">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.languages.map((s) => (
                                    <span key={s} className="bg-[#e2d8cc] border border-stone-300/60 text-stone-700 text-xs font-medium px-3 py-1.5 rounded-md hover:border-indigo-300 hover:text-indigo-700 transition-colors">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-stone-300/50 pt-5 mb-5">
                            <h3 className="text-stone-400 text-xs font-semibold uppercase tracking-wider mb-3">Backend & Infrastructure</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.backend.map((s) => (
                                    <span key={s} className="bg-[#e2d8cc] border border-stone-300/60 text-stone-700 text-xs font-medium px-3 py-1.5 rounded-md hover:border-indigo-300 hover:text-indigo-700 transition-colors">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-stone-300/50 pt-5">
                            <h3 className="text-stone-400 text-xs font-semibold uppercase tracking-wider mb-3">Testing & Methodology</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.testing.map((s) => (
                                    <span key={s} className="bg-[#e2d8cc] border border-stone-300/60 text-stone-700 text-xs font-medium px-3 py-1.5 rounded-md hover:border-indigo-300 hover:text-indigo-700 transition-colors">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-stone-300/70 bg-[#f0e9df] p-6">
                        <h3 className="text-stone-400 text-xs font-semibold uppercase tracking-wider mb-5">Education</h3>
                        <div className="flex items-start gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                            <div>
                                <p className="text-stone-900 font-medium text-sm">University of Houston — Houston, TX</p>
                                <p className="text-stone-600 text-sm mt-0.5">B.S. Computer Science · Minor in Mathematics · May 2026</p>
                                <p className="text-stone-400 text-xs mt-2 leading-relaxed">
                                    Data Structures & Algorithms · Artificial Intelligence · Software Design (Agile/TDD) ·
                                    Data Science · Machine Learning · OS · Database Systems · Security Analytics
                                </p>
                                <span className="inline-block mt-2 text-xs text-indigo-600 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">
                                    Dean's List — Spring 2025
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
}
