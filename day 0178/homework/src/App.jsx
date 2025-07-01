import { useState, createContext } from 'react'
import ComponentA from './Components/ComponentA'

export const TextContent = createContext();

function App() {
  const count = useState("Nika") 

  return (
    <div className='bg-stone-400 rounded-2xl m-2 p-2 border' >
      <TextContent.Provider value={count}>
        <h1>Hello</h1>
        <ComponentA />
      </TextContent.Provider>
    </div>
  )
}

export default App;
