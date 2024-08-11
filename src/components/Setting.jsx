export default function Setting(props) {
    return (
        <div className={"flex flex-col items-center justify-center gap-4 p-2 w-[calc(50%-0.25rem)] border-neutral-900 rounded-xl bg-gradient-to-r from-blue-600 to-red-600"}>
            <div className="flex gap-2">
                <div class="flex items-center">
                    <input
                        checked={props.operation === "add"}
                        id="default-radio-1" type="radio" value="" name="default-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        onChange={() => { props.setOperation("add") }}
                    />
                    <label for="default-radio-1" class=" ms-2 text-4xl font-medium text-gray-300">Add</label>
                </div>
                <div class="flex items-center">
                    <input
                        checked={props.operation !== "add"}
                        id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        onChange={() => { props.setOperation("multiply") }}
                    />
                    <label for="default-radio-2" class="ms-2 text-4xl font-medium text-gray-300">Multiply</label>
                </div>
            </div>
            <div className="flex gap-2">
                <button className="flex content-center text-4xl h-12 rounded-xl bg-neutral-950 px-6 text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
                    onClick={() => props.setN(props.n - 1)}>-</button>
                <span className="inline-block text-4xl mx-4"> {props.n} </span>
                <button className="flex content-center text-4xl h-12 rounded-xl bg-neutral-950 px-6 text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
                    onClick={() => props.setN(props.n + 1)}>+</button>
            </div>
        </div>
    )
}