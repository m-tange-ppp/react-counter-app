import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import Setting from "./components/Setting";

export default function App() {
    const [operation, setOperation] = useState("add");
    const [rate, setRate] = useState(1);
    const [start, setStart] = useState(1);
    const [num, setNum] = useState(start);
    const [flagBg, setFlagBg] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        resetCounter();
    }, [start, rate, operation]);

    useEffect(() => {
        if (Math.random() < 0.5) {
            setFlagBg(false);
        } else {
            setFlagBg(true);
        }
    }, [num]);

    function resetCounter() {
        setNum(start);
        setCount(0);
    }

    const addN = (rate, count) => {
        return count + rate;
    }

    const multiplyN = (rate, count) => {
        return count * rate;
    }

    return (
        <div>
            <h1 className="text-4xl text-center m-4 font-bold bg-gradient-to-r from-pink-500 to-violet-700 bg-clip-text text-transparent">
                React Counter App
            </h1>
            <div className="flex flex-wrap gap-2 justify-center">
                <Counter
                    method={operation === "add" ? addN : multiplyN}
                    rate={rate}
                    start={start}
                    num={num}
                    setNum={setNum}
                    flagBg={flagBg}
                    setFlagBg={setFlagBg}
                    count={count}
                    setCount={setCount}
                    resetCounter={resetCounter}
                />
                <Setting
                    operation={operation}
                    setOperation={setOperation}
                    rate={rate}
                    setRate={setRate}
                    start={start}
                    setStart={setStart}
                />

            </div>
        </div>
    )
}