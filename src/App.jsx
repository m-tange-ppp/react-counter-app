import Counter from "./components/Counter";

export default function App() {
    const plusN = (n, count) => {
        return count + n;
    };

    function multipleN(n, count) {
        return count * n;
    };

    return (
        <div>
            <h1 className="text-4xl text-center m-4 font-bold bg-gradient-to-r from-pink-500 to-violet-700 bg-clip-text text-transparent">
                React Counter App
            </h1>
            <div className="flex flex-wrap gap-2">
                <Counter method={plusN} n={1} start={0} />
                <Counter method={plusN} n={2} start={0} />
                <Counter method={multipleN} n={2} start={1} />
                <Counter method={plusN} n={3} start={0} />
                <Counter method={multipleN} n={-3} start={1} />
            </div>
        </div>
    )
}