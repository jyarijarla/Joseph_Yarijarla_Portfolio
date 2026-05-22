import { useState, useEffect } from "react"

export const LoadingScreen = ({onComplete}) =>{
    
    const [text, setText] = useState("")
    const fullText = "<WELCOME>"

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            
            if(index > fullText.length){
                clearInterval(interval)

                setTimeout(() => {
                    onComplete();
                }, 1000)
            }
        }, 100);
    
        return () => clearInterval(interval)
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-[rgba(17,17,20,0.98)] backdrop-blur-xl text-white flex flex-col items-center justify-center">
            <div className="mb-8 text-5xl font-mono font-bold flex items-center justify-center h-16 min-w-[12ch] text-center tracking-tight select-none">
                <span>{text}</span>
                <span className="animate-blink ml-2 text-cyan-400">|</span>
            </div>
            <div className="w-[220px] h-[3px] bg-zinc-800 rounded-full relative overflow-hidden shadow-lg">
                <div className="w-[40%] h-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.3)] animate-loading-bar rounded-full">
                </div>
            </div>
        </div>
    )
}