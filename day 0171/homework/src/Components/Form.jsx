import React, { useState } from "react";

function Form() {
    const [value, setValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const Obj = { 0: value };
        console.log(Obj);
        localStorage.setItem("input", JSON.stringify(Obj[0]));
    }

    return (
        <form className="border bg-stone-400 m-3 p-3 rounded-2xl" onSubmit={handleSubmit}>
            <input
                className="border bg-red-400 m-2 p-2 rounded-2xl"
                placeholder="Write Here..."
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                name="input"
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default Form;

// 2) შექმენით 1 component-ი სადაც გექნებათ Form Handling-ი გამოყენებული, შექმენით 1 სარეგისტრაციო ფორმა, როდესაც მომხმარებელი დარეგისტრირდება მაშინვე შეინახეთ მისი მონაცემი localStorage-ში.


