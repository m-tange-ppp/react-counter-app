import Counter from "./components/Counter";

export default function App() {
    return (
        <div>
            <h1 className="text-2xl text-center m-4">
                React Counter App
            </h1>
            <div className="flex gap-2">
                <Counter />
                <Counter />
            </div>
        </div>
    )
}