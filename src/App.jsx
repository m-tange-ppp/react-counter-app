import { useState } from "react";
import Counter from "./components/Counter";
import Setting from "./components/Setting";

export default function App() {
    const [operation, setOperation] = useState("add");
    const [n, setN] = useState(1);
    const [start, setStart] = useState(1);

    const addN = (n, count) => {
        return count + n;
    };

    function multiplyN(n, count) {
        return count * n;
    };

    return (
        <div>
            <h1 className="text-4xl text-center m-4 font-bold bg-gradient-to-r from-pink-500 to-violet-700 bg-clip-text text-transparent">
                React Counter App
            </h1>
            <div className="flex flex-wrap gap-2 justify-center">
                <Counter
                    method={operation === "add" ? addN : multiplyN}
                    n={n}
                    start={start}
                />
                <Setting
                    operation={operation}
                    setOperation={setOperation}
                    n={n}
                    setN={setN}
                    start={start}
                    setStart={setStart}
                />

            </div>
        </div>
    )
}