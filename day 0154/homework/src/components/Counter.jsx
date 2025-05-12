import React, { useState } from 'react';

export const Counter = () => {
    let [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center">
            <input
            className={`w-20 text-center m-4 ${count > 0 ? "bg-green-400" : "bg-red-400"}`}
            type="text"
            value={count}
            onChange={(e) => setCount(e.target.value)}
        />
        <div className="flex gap-4">
            <button className="m-2 p-2 bg-green-300 rounded" onClick={() => setCount(count += 1)}>Increment</button>
            <button className="m-2 p-2 bg-red-300 rounded"onClick={() => setCount(count -= 1)}>Decrement</button>
            <button className="m-2 p-2 bg-gray-300 rounded" onClick={() => setCount(count = 0)}>Reset</button>
        </div>
    </div>
    );
};

