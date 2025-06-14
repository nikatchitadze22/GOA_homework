import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning) return;

        const timer = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [isRunning]);


    return (
        <>
            <p className="bg-stone-400 m-3 p-3 rounded-2xl border">{time}</p>
            <button onClick={() => setTime(0)} className="bg-stone-300 m-2 p-2 rounded-2xl border">Reset</button><br />
            <button onClick={() => setIsRunning(false)} className="bg-red-300 m-2 p-2 rounded-2xl border">Stop</button><br />
            <button onClick={() => setIsRunning(true)} className="bg-green-300 m-2 p-2 rounded-2xl border">Resume</button>
        </>
    );
    }

export default Timer;
