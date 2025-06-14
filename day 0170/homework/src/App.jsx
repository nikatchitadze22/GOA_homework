import { useEffect, useState } from 'react'

function App() {
  const [text, setText] = useState("")

  useEffect(()=>{
    const iText = localStorage.getItem("input")
    if(iText){
      setText(iText)
    }
  },[])
  
  function handleClick(e){
    const newText = e.target.value
    setText(newText)
    localStorage.setItem("input", newText)
  }

  return (
    <>
    <input type="text" value={text} onChange={handleClick} />
    <h1>{text}</h1>
    </>
  )
}

export default App
