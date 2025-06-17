import { useRef, useState } from 'react'

function App() {
  let countCom = 0
  let countRef = useRef(0)
  const [count, setCount] = useState(0)
  
  
  
  return (
    <>
      <div>
        <h1 className='p-4 m-4 rounded-2xl bg-stone-500' >Common Variable</h1>
        <p className='w-max bg-stone-400 m-3 p-3 rounded-2xl' >{countCom}</p>
        <button className='w-max bg-stone-400 m-3 p-3 rounded-2xl' onClick={() => countCom++} >Increment</button>
        <button className='w-max bg-stone-400 m-3 p-3 rounded-2xl' onClick={() => console.log(`count is: ` + countCom)} >Console log</button>
      </div>

      <div>
        <h1 className='p-4 m-4 rounded-2xl bg-stone-500' >useState Variable</h1>
        <p className='w-max bg-stone-400 m-3 p-3 rounded-2xl' >{count}</p>
        <button className='w-max bg-stone-400 m-3 p-3 rounded-2xl' onClick={() => setCount(prev => prev + 1)} >Increment</button>
        <button className='w-max bg-stone-400 m-3 p-3 rounded-2xl' onClick={() => console.log(`useState count is: ` + count)} >Console log</button>
      </div>

      <div>
        <h1 className='p-4 m-4 rounded-2xl bg-stone-500' >useRef Variable</h1>
        <p className='w-max bg-stone-400 m-3 p-3 rounded-2xl' >{countRef.current}</p>
        <button className='w-max bg-stone-400 m-3 p-3 rounded-2xl' onClick={() => countRef.current = countRef.current + 1} >Increment</button>
        <button className='w-max bg-stone-400 m-3 p-3 rounded-2xl' onClick={() => console.log(`useRef count is: ` + countRef.current)} >Console log</button>
      </div>
    </>
  )
}

export default App
