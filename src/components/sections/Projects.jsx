import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20" style={{ background: '#111114' }}>
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">
                    Featured Projects</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_4px_20px_rgba(34,211,238,0.07)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Video Player</h3>
                        <p className="text-zinc-400 mb-4">
                            Designed a mock interview platform leveraging AI that generates 3-5 personalized interview questions per interview and
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                <span key={key} className="bg-cyan-400/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-400/15 hover:shadow-[0_2px_8px_rgba(34,211,238,0.15)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href='#' className="text-cyan-400 hover:text-white transition-colors font-medium">View Project →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_4px_20px_rgba(34,211,238,0.07)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Video Player</h3>
                        <p className="text-zinc-400 mb-4">
                            Designed a mock interview platform leveraging AI that generates 3-5 personalized interview questions per interview and
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                <span key={key} className="bg-cyan-400/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-400/15 hover:shadow-[0_2px_8px_rgba(34,211,238,0.15)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href='#' className="text-cyan-400 hover:text-white transition-colors font-medium">View Project →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_4px_20px_rgba(34,211,238,0.07)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Video Player</h3>
                        <p className="text-zinc-400 mb-4">
                            Designed a mock interview platform leveraging AI that generates 3-5 personalized interview questions per interview and
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                <span key={key} className="bg-cyan-400/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-400/15 hover:shadow-[0_2px_8px_rgba(34,211,238,0.15)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href='#' className="text-cyan-400 hover:text-white transition-colors font-medium">View Project →</a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_4px_20px_rgba(34,211,238,0.07)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Video Player</h3>
                        <p className="text-zinc-400 mb-4">
                            Designed a mock interview platform leveraging AI that generates 3-5 personalized interview questions per interview and
                        </p>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                <span key={key} className="bg-cyan-400/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-400/15 hover:shadow-[0_2px_8px_rgba(34,211,238,0.15)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href='#' className="text-cyan-400 hover:text-white transition-colors font-medium">View Project →</a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}