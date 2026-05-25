import { Link } from "react-router-dom"
import { RevealOnScroll } from "../RevealOnScroll"

const PlaceholderImage = ({ className = "" }) => (
    <div className={`rounded-lg bg-[#e2d8cc] border border-stone-300/60 flex items-center justify-center relative overflow-hidden ${className}`}>
        <div className="text-center z-10">
            <div className="w-8 h-8 rounded-md bg-[#d4cab9] mx-auto mb-2 flex items-center justify-center">
                <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
            <p className="text-stone-500 text-xs">Coming soon</p>
        </div>
    </div>
)

export const RelevantExperience = () => {
    return (
        <section id="experience" className="py-28 bg-[#e8ddd0]">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-6">

                    <p className="text-indigo-600 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Experience</p>
                    <h2 className="text-4xl font-bold text-stone-900 mb-12">Relevant experience.</h2>

                    <div className="space-y-4">

                        <div className="rounded-xl border border-stone-300/70 bg-[#f0e9df] p-6">
                            <div className="flex gap-6 items-stretch">
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <p className="text-stone-900 font-semibold text-base">Multitracks Hub Lead Developer</p>
                                            <p className="text-stone-400 text-xs mt-0.5">Non-profit Mission</p>
                                        </div>
                                        <span className="text-stone-400 text-xs shrink-0 ml-4">Jul 2025 – Present</span>
                                    </div>
                                    <ul className="space-y-2 mt-3">
                                        <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                                            <span className="text-indigo-500 mt-1.5 shrink-0">·</span>
                                            Built a Next.js + PostgreSQL + Supabase platform with Google Drive integration for 50+ audio files.
                                        </li>
                                        <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                                            <span className="text-indigo-500 mt-1.5 shrink-0">·</span>
                                            Improved file upload efficiency by 40% through backend optimization.
                                        </li>
                                    </ul>
                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {["Next.js", "PostgreSQL", "Supabase", "Google Drive API"].map((tag) => (
                                            <span key={tag} className="bg-[#e2d8cc] border border-stone-300/60 text-stone-600 text-xs px-2.5 py-1 rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <PlaceholderImage className="w-48 shrink-0" />
                            </div>
                        </div>

                        <div className="rounded-xl border border-stone-300/70 bg-[#f0e9df] p-6">
                            <div className="flex gap-6 items-stretch">
                                <div className="flex-1 min-w-0 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <p className="text-stone-900 font-semibold text-base">Web Administrator</p>
                                                <p className="text-stone-400 text-xs mt-0.5">Austin Christian Fellowship of India</p>
                                            </div>
                                            <span className="text-stone-400 text-xs shrink-0 ml-4">Jul 2024 – Present</span>
                                        </div>
                                        <p className="text-stone-400 text-xs font-semibold uppercase tracking-[0.15em] mb-3">Stack</p>
                                        <div className="flex flex-wrap gap-2">
                                            {["React.js", "MySQL", "JavaScript", "Google Sheets API", "REST APIs"].map((tag) => (
                                                <span key={tag} className="bg-[#e2d8cc] border border-stone-300/60 text-stone-600 text-xs px-2.5 py-1 rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-48 shrink-0 flex flex-col gap-2">
                                    <p className="text-stone-400 text-xs font-semibold uppercase tracking-[0.15em]">Featured Work</p>
                                    <Link
                                        to="/work/acfi-project"
                                        className="group flex-1 flex flex-col rounded-lg border border-stone-300/70 bg-[#e2d8cc] overflow-hidden hover:border-indigo-300 hover:shadow-sm transition-all duration-300"
                                    >
                                        <div className="flex-1 overflow-hidden">
                                            <img
                                                src="/CFCWebsite.png"
                                                alt="ACFI Web Platform"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="px-3 py-2 flex items-center justify-between border-t border-stone-300/50">
                                            <span className="text-stone-600 text-xs font-medium group-hover:text-stone-900 transition-colors">ACFI Web Platform</span>
                                            <span className="text-indigo-500 text-xs group-hover:text-indigo-600 transition-colors">→</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
