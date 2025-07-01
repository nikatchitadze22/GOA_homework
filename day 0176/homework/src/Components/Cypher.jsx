import { useEffect, useRef, useState } from "react";

function Cypher() {
    const [value, setValue] = useState("");
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
    console.log("Value updated:", value);
    }, [value]);

    return (
        <>
            <h1 className="text-2xl" >Task 4</h1>
            <input className="bg-emerald-400 m-2 p-2 rounded-2xl" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type something" />
            <h1>ამ შემთხვევაში input ის ყოველ შეცვლაზე, ანუ ყოველი ახალი სიმბოლოს დაწერის შემთხვევაში გამოაქვს კონსოლში მნიშვნელობა რაც ჩაიწერება</h1>
        </>
    );
}

export default Cypher;