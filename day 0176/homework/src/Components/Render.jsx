import { useRef } from "react";

function Render() {
    const inputRef = useRef(null)

    function handleClick() {
        localStorage.setItem("input", inputRef.current.value)
        alert("Saved Successfully")
    }

    function focusClick(){
        inputRef.current.focus()
    }

    return (
        <>
            <h1 className="text-2xl" >Task 2</h1>
            <button className="m-2 p-2 bg-amber-300 rounded-2xl border " ref={inputRef} onClick={focusClick} >Focus</button> <br />
            <input className="m-2 p-2 bg-gray-300 rounded-2xl border " type="text" ref={inputRef} /> <br />
            <button className="m-2 p-2 bg-green-400 rounded-2xl border " onClick={handleClick} >Save to LocalStorage</button>
        </>
    )

}

export default Render;