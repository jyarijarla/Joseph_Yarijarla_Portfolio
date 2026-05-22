import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS"]
    const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"]

    return <section id="about" className="min-h-screen flex items-center justify-center py-20" style={{ background: ‘#18181c’ }}>
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
                    <p className="text-zinc-400 mb-6">
                        Hello! I’m a junior at the University of Houston, majoring in Computer Science with a minor in Math.
                        My academic journey has provided me with a solid foundation in problem-solving and algorithm design,
                        and I’m eager to apply my knowledge to real-world areas such as software development, artificial intelligence, and machine learning.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-cyan-400/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-400/15 hover:shadow-[0_2px_8px_rgba(34,211,238,0.15)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-cyan-400/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-400/15 hover:shadow-[0_2px_8px_rgba(34,211,238,0.15)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-zinc-400 space-y-2">
                            <li>
                                <strong className="text-white">B.S. in Computer Science</strong> - University of Houston
                            </li>
                            <li>
                                Relevant CourseWork: Data Structures, Operating Systems, Computer Architecture
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Certifications</h3>
                        <ul className="list-disc list-inside text-zinc-400 space-y-2">
                            <li>
                                <strong className="text-white">B.S. in Computer Science</strong> - University of Houston
                            </li>
                            <li>
                                Relevant CourseWork: Data Structures, Operating Systems, Computer Architecture
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>;

}