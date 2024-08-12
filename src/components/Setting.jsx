export default function Setting(props) {
    return (
        <div className={"flex flex-col items-center justify-center gap-4 p-2 w-[100%] sm:w-[calc(50%-0.75rem)] border-neutral-900 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 transition-shadow duration-300 hover:ring-4 ring-violet-500"}>
            <div className="flex gap-2">
                <div class="flex items-center">
                    <input
                        checked={props.operation === "add"}
                        id="default-radio-1" type="radio" value="" name="default-radio"
                        class="w-4 h-2 text-blue-600 bg-gray-100 border-gray-300"
                        onChange={() => { props.setOperation("add") }}
                    />
                    <label htmlFor="default-radio-1" class=" ms-2 text-xl font-medium text-gray-100">Add</label>
                </div>
                <div class="flex items-center">
                    <input
                        checked={props.operation !== "add"}
                        id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-2 text-blue-600 bg-gray-100 border-gray-300"
                        onChange={() => { props.setOperation("multiply") }}
                    />
                    <label htmlFor="default-radio-2" class="ms-2 text-xl font-medium text-gray-100">Multiply</label>
                </div>
            </div>

            <div className="flex gap-2">
                <button className="flex items-center text-xl h-8 rounded-xl bg-neutral-950 px-4 text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
                    onClick={() => props.setRate(props.rate - 1)}>-</button>
                <span className="flex justify-center items-center text-xl h-8 w-20 rounded-xl bg-neutral-200 border-4 border-black border-dashed"> {props.rate} </span>
                <button className="flex items-center text-xl h-8 rounded-xl bg-neutral-950 px-4 text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
                    onClick={() => props.setRate(props.rate + 1)}>+</button>
                <button className="flex items-center h-8 rounded-xl bg-neutral-950 px-4 text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
                    onClick={() => { props.setRate(1) }}>Reset</button>
            </div>

            <div className="flex gap-2">
                <button className="flex items-center text-xl h-8 rounded-xl bg-neutral-950 px-4 text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
                    onClick={() => props.setStart(props.start - 1)}>-</button>
                <span className="flex justify-center items-center text-xl h-8 w-20 rounded-xl bg-neutral-200 border-4 border-black border-double"> {props.start} </span>
                <button className="flex items-center text-xl h-8 rounded-xl bg-neutral-950 px-4 text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
                    onClick={() => props.setStart(props.start + 1)}>+</button>
                <button className="flex items-center h-8 rounded-xl bg-neutral-950 px-4 text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95"
                    onClick={() => { props.setStart(1) }}>Reset</button>
            </div>
        </div>
    )
}