import { useState } from 'react'

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  return (
    <>
      <div className="flex justify-center items-center bg-red-400 h-screen">
        <div>
          <div>
            <p className='bg-stone-500 p-1 rounded-2xl' >{result}</p>
            <input className='bg-stone-600 p-3 rounded m-1' type="text" value={input} readOnly />
          </div>

          <div>
            <button className="bg-stone-400 w-12 h-12 p-2 m-2" onClick={() => setInput(input + "1")}>1</button>
            <button className="bg-stone-400 w-12 h-12 p-2 m-2" onClick={() => setInput(input + "2")}>2</button>
            <button className="bg-stone-400 w-12 h-12 p-2 m-2" onClick={() => setInput(input + "3")}>3</button>
          </div>

          <div>
            <button className="bg-stone-400 w-12 h-12 p-2 m-2" onClick={() => setInput(input + "4")}>4</button>
            <button className="bg-stone-400 w-12 h-12 p-2 m-2" onClick={() => setInput(input + "5")}>5</button>
            <button className="bg-stone-400 w-12 h-12 p-2 m-2" onClick={() => setInput(input + "6")}>6</button>
          </div>

          <div>
            <button className="bg-stone-400 w-12 h-12 p-2 m-2" onClick={() => setInput(input + "7")}>7</button>
            <button className="bg-stone-400 w-12 h-12 p-2 m-2" onClick={() => setInput(input + "8")}>8</button>
            <button className="bg-stone-400 w-12 h-12 p-2 m-2" onClick={() => setInput(input + "9")}>9</button>
          </div>

          <div>
            <button className="bg-stone-400 w-12 h-12 p-2 m-2" onClick={() => {
              try {
                setResult(eval(input));
              } catch {
                setResult("Error");
              }
            }}>=</button>

            <button className="bg-stone-400 w-12 h-12 p-2 m-2" onClick={() => setInput(input + "0")}>0</button>

            <button className="bg-stone-400 w-12 h-12 p-2 m-2" onClick={() => {
              setInput("");
              setResult("");
            }}>C</button>
          </div>

          <div>
            <button className="bg-stone-400 w-12 h-12 p-2 m-2 text-2xl" onClick={() => setInput(input + "*")}>*</button>
            <button className="bg-stone-400 w-12 h-12 p-2 m-2 text-2xl" onClick={() => setInput(input + "-")}>-</button>
            <button className="bg-stone-400 w-12 h-12 p-2 m-2 text-2xl" onClick={() => setInput(input + "/")}>/</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
