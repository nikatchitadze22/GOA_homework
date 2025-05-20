import React, { useState } from 'react';

export const Input = () => {
    const [value, setValue] = useState("");

    function handleClick() {
        localStorage.setItem("username", value);
    }

    return (
        <div>
            <input className='bg-stone-400 m-2 p-4' type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <input className='bg-stone-400 m-2 p-4' type="submit" onClick={handleClick} />
        </div>
    );
};
