import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.currentTarget, import.meta.env.VITE_PUBLIC_KEY)
            .then(() => { alert("Message Sent!"); setFormData({ name: '', email: '', message: '' }) })
            .catch(() => alert("Could not send. Please try again."))
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-28 bg-[#e8ddd0]">
            <RevealOnScroll>
                <div className="max-w-2xl mx-auto px-6 w-full">

                    <p className="text-indigo-600 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Contact</p>
                    <h2 className="text-4xl font-bold text-stone-900 mb-3">Let's work together.</h2>
                    <p className="text-stone-500 mb-2">
                        Have a project in mind or just want to connect? Send me a message.
                    </p>
                    <p className="text-stone-400 text-sm mb-10">
                        Or reach me directly at{" "}
                        <a href="mailto:josephyarijarla@gmail.com" className="text-indigo-600 hover:text-indigo-500 transition-colors">
                            josephyarijarla@gmail.com
                        </a>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-stone-500 text-xs font-medium mb-2 uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your name"
                                    className="w-full bg-[#f0e9df] border border-stone-300/70 rounded-lg px-4 py-3 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/20 transition"
                                />
                            </div>
                            <div>
                                <label className="block text-stone-500 text-xs font-medium mb-2 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="you@example.com"
                                    className="w-full bg-[#f0e9df] border border-stone-300/70 rounded-lg px-4 py-3 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/20 transition"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-stone-500 text-xs font-medium mb-2 uppercase tracking-wider">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={6}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Tell me about your project or just say hi..."
                                className="w-full bg-[#f0e9df] border border-stone-300/70 rounded-lg px-4 py-3 text-stone-900 text-sm placeholder:text-stone-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400/20 transition resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-lg text-sm transition hover:-translate-y-px"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </RevealOnScroll>
        </section>
    )
}
