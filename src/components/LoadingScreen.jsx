import { useState, useEffect } from "react"

export const LoadingScreen = ({ onComplete }) => {

    const [text, setText] = useState("")
    const fullText = "<WELCOME>"

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval)
                setTimeout(() => { onComplete(); }, 1000)
            }
        }, 100);
        return () => clearInterval(interval)
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-200 bg-[#e8ddd0] flex flex-col items-center justify-center">
            <div className="mb-8 text-4xl font-mono font-bold flex items-center justify-center h-14 min-w-[12ch] text-center tracking-tight select-none text-stone-900">
                <span>{text}</span>
                <span className="animate-blink ml-1 text-indigo-600">|</span>
            </div>
            <div className="w-48 h-[2px] bg-stone-300 rounded-full relative overflow-hidden">
                <div className="w-[40%] h-full bg-indigo-500 animate-loading-bar rounded-full shadow-[0_0_12px_rgba(99,102,241,0.4)]"></div>
            </div>
        </div>
    )
}
