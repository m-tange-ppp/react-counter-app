import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div className="text-center w-40 bg-blue-500 border border-blue-900 rounded-xl">
            <button className="" onClick={() => { setCount(count + 1) }}>Click Me !!</button>
            <p>{count}</p>
            <button onClick={() => { setCount(0) }}>Reset</button>
        </div>
    )
}