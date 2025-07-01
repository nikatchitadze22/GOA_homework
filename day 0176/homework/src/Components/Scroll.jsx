import { useEffect, useRef, useState } from "react";

function Scroll() {
    const [direction, setDirection] = useState("");
    const lastScrollY = useRef(0);

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                setDirection("down");
            } else if (currentScrollY < lastScrollY.current) {
                setDirection("up");
            }

            lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <h1 className="text-2xl" >Task 3</h1>
            <div className=" p-2 bg-cyan-300 shadow-md w-45 rounded-4xl">
                Scroll direction: <strong>{direction}</strong>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
}

export default Scroll;
