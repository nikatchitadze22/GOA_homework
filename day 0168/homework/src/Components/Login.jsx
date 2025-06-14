import { useState } from "react"

export default function Login(){
    const [value, setValue] = useState("")
    const [list, setList] = useState([])
    function handleClick(){
        localStorage.setItem("name", value)
        setList([...list, value])
    }
    return (
        <>
            <input className='bg-stone-400 p-2 m-2 rounded-2xl' type="text" value={value} onChange={(e) => setValue(e.target.value)}/> <br />
            <button className='bg-amber-400 p-2 m-2 rounded-2xl' onClick={handleClick} >Submit</button>
            <div>
                {list.map((el, index) => (
                    <div className="bg-stone-300 m-2 p-2 rounded-2xl w-40" key={index}>
                        <h1>Div Number {index + 1}</h1>
                        <h2 className="bg-stone-400 m-2 p-2 rounded-2xl" >{el}</h2>
                    </div>
                ))}
            </div>
    </>
    )
}