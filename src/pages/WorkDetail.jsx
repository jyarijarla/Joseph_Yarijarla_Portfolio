import { useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { workItems } from "../data/work"

export const WorkDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const item = workItems.find((w) => w.id === id)

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [id])

    if (!item) {
        return (
            <div className="min-h-screen bg-[#e8ddd0] flex items-center justify-center">
                <div className="text-center">
                    <p className="text-stone-500 mb-4 text-sm">Work not found.</p>
                    <Link to="/" className="text-indigo-600 hover:text-indigo-500 text-sm transition-colors">
                        ← Back to portfolio
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#e8ddd0]">

            <nav className="fixed top-0 w-full z-50 bg-[#e8ddd0]/90 backdrop-blur-md border-b border-stone-300/60">
                <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
                    <Link to="/" className="font-mono text-sm font-bold text-stone-900 tracking-tight select-none">
                        joseph<span className="text-indigo-600">.</span>
                    </Link>
                    <button onClick={() => navigate(-1)} className="text-stone-700 hover:text-stone-900 text-sm font-medium border border-stone-300 hover:border-stone-400 px-3 py-1.5 rounded-lg transition-all cursor-pointer">
                        ← Back
                    </button>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-8 pt-24 pb-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-stone-400 text-xs">{item.role}</span>
                            <span className="text-stone-300">·</span>
                            <span className="text-stone-400 text-xs">{item.org}</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-4 leading-tight">{item.title}</h1>
                        <p className="text-stone-600 text-base leading-relaxed mb-7">{item.summary}</p>

                        <div className="flex flex-wrap gap-2 mb-7">
                            {item.tags.map((tag) => (
                                <span key={tag} className="bg-[#e2d8cc] border border-stone-300/60 text-stone-700 text-xs font-medium px-3 py-1.5 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <a href={item.github} target="_blank" rel="noreferrer"
                                className="flex items-center gap-2 bg-[#f0e9df] hover:bg-[#e8e0d4] border border-stone-300/70 hover:border-stone-400 text-stone-700 hover:text-stone-900 text-sm font-medium px-5 py-2.5 rounded-lg transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                            <a href={item.demo} target="_blank" rel="noreferrer"
                                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                            </a>
                        </div>
                    </div>

                    <div className="rounded-xl bg-[#e2d8cc] border border-stone-300/60 overflow-hidden relative min-h-80 flex items-center justify-center">
                        {item.image ? (
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover absolute inset-0"
                            />
                        ) : (
                            <div className="text-center z-10">
                                <div className="w-10 h-10 rounded-lg bg-[#d4cab9] mx-auto mb-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-stone-500 text-xs">Screenshot coming soon</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="rounded-xl border border-stone-300/70 bg-[#f0e9df] p-8">
                    <h2 className="text-stone-400 text-xs font-semibold uppercase tracking-[0.15em] mb-7">Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {item.highlights.map((point, i) => (
                            <div key={i} className="flex flex-col gap-3">
                                <span className="text-indigo-500 font-mono text-xs select-none">0{i + 1}</span>
                                <p className="text-stone-600 text-sm leading-relaxed">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
