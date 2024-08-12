import { useState, useEffect } from "react"

export default function Counter(props) {
    const [count, setCount] = useState(props.start);
    const [flagBg, setFlagBg] = useState(true);

    useEffect(() => {
        if (Math.random() < 0.5) {
            setFlagBg(false);
        } else {
            setFlagBg(true);
        }
    }, [count]);

    return (
        <div className={`flex flex-col items-center justify-center gap-2 p-2 w-[100%] sm:w-[calc(50%-0.25rem)] border-neutral-900 rounded-xl bg-gradient-to-r ${flagBg ? `from-blue-600 to-emerald-400` : `from-yellow-600 to-red-700`}`}>
            <p> <span className="inline-block w-14 text-center">{props.method.name == "addN" ? "Add" : "Multiply"}</span> by <span className="text-xl bg-neutral-200 border-4 border-dashed border-black inline-block p-2 w-12 text-center  rounded-lg">{props.n}</span> starting from <span className="text-xl bg-neutral-200 border-4 border-black border-double inline-block p-2 w-12 text-center rounded-lg">{props.start}</span></p>
            <button className=" h-12 rounded-xl bg-neutral-950 px-6 text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95" onClick={() => { setCount(props.method(props.n, count)) }}>Click Me !!</button>
            <p className="flex h-12 w-16 text-4xl rounded-xl items-center justify-center ">{count}</p>
            <button className="relative overflow-hidden rounded-xl bg-neutral-950 px-5 py-2.5 text-white duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90" onClick={() => { setCount(props.start) }}>Reset</button>
        </div>
    )
}