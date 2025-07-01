import { useEffect, useRef, useState } from 'react'

function App() {

  function handleClick(){
    alert("clicked")
  }

      const [value, setValue] = useState("");
      const isFirstRender = useRef(true);
  
      useEffect(() => {
          if (isFirstRender.current) {
              isFirstRender.current = false;
              return;
          }
      console.log("Value updated:", value);
      }, [value]);

  useEffect(()=>{
    document.body.addEventListener("click", handleClick)
  }, [])

  return (

  <>
    <div className='w-screen h-screen bg-stone-400 p-4' >
      <p className='p-4 bg-stone-500 rounded-2xl' >hi, click anywhere</p>
    </div>
    <div className='w-screen h-screen bg-stone-400 p-4' >
      <h1 className="text-2xl" >{value}</h1>
      <input className="bg-stone-600 m-2 p-2 rounded-2xl" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type something" />
    </div>

  </>
  )
}

export default App
