import { useRef, useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const prevCount = useRef(0);

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    return (
        <>
            <h1 className="text-2xl" >Task 1</h1>
            <h1 className="bg-blue-300 m-2 p-2 w-30 h-10 rounded-2xl border" >Count: {count}</h1>
            <h1 className="bg-pink-300 m-2 p-2 w-35 h-10 rounded-2xl border" >Previous: {prevCount.current}</h1>
            <div>{count > prevCount.current ? <p className="bg-green-400 border w-20 h-8 m-1 p-1 rounded-2xl" >Up</p> : <p className="bg-red-400 w-20 h-8 m-2 p-1 rounded-2xl border" >Down</p>}</div>
            <button className="bg-green-500 m-2 p-2 rounded-2xl border" onClick={() => setCount(prev => prev + 1)}>Increase</button>
            <button className="bg-red-500 m-2 p-2 rounded-2xl border" onClick={() => setCount(prev => prev - 1)}>Decrease</button>
        </>
    );
}

export default Counter;
