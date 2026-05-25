import { Link } from "react-router-dom"
import { RevealOnScroll } from "../RevealOnScroll"
import { projects } from "../../data/projects"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-28 bg-[#ddd1c2]">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-6">

                    <p className="text-indigo-600 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Work</p>
                    <h2 className="text-4xl font-bold text-stone-900 mb-12">Featured projects.</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group rounded-xl border border-stone-300/70 bg-[#f0e9df] overflow-hidden hover:border-indigo-300 hover:shadow-md transition-all duration-300 flex flex-col"
                            >
                                <div className="w-full aspect-video bg-[#e2d8cc] border-b border-stone-300/50 flex items-center justify-center relative overflow-hidden">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <svg className="w-6 h-6 text-stone-400 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                </div>

                                <div className="p-5 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-stone-400 font-mono text-xs">{project.num}</span>
                                        <span className="text-stone-300">·</span>
                                        <span className="text-stone-400 text-xs">{project.period}</span>
                                    </div>
                                    <h3 className="text-stone-900 font-semibold text-sm mb-1.5 leading-snug">{project.title}</h3>
                                    <p className="text-stone-500 text-xs leading-relaxed mb-4 flex-1">{project.tagline}</p>
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="bg-[#e2d8cc] border border-stone-300/60 text-stone-600 text-xs px-2 py-0.5 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className="text-stone-400 text-xs py-0.5">+{project.tags.length - 3}</span>
                                        )}
                                    </div>
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className="text-indigo-600 hover:text-indigo-500 text-xs font-medium transition-colors"
                                    >
                                        View project →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    )
}
