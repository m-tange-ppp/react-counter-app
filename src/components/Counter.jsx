import { useState } from "react"

export default function Counter(props) {
    const [count, setCount] = useState(props.start);

    return (
        <div className={`flex flex-col items-center justify-center gap-2 p-2 w-[calc(50%-0.25rem)] border-neutral-900 rounded-xl bg-gradient-to-r ${count % 2 == 0 ? `from-blue-600 to-violet-700` : `from-yellow-600 to-red-700`}`}>
            <p> {props.method.name == "addN" ? "Add" : "Multiply"} by {props.n} starting from {props.start}</p>
            <button className=" h-12 rounded-xl bg-neutral-950 px-6 text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95" onClick={() => { setCount(props.method(props.n, count)) }}>Click Me !!</button>
            <p className="flex h-12 w-16 text-4xl rounded-xl items-center justify-center ">{count}</p>
            <button className="relative overflow-hidden rounded-xl bg-neutral-950 px-5 py-2.5 text-white duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90" onClick={() => { setCount(props.start) }}>Reset</button>
        </div>
    )
}