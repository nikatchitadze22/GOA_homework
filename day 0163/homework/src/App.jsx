import { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [money, setMoney] = useState("")
  const [items, setItems] = useState([])

  function handleSubmit(){
    if (name && money){
      setItems(prev => [...prev, [name, money]])
      setName("")
      setMoney("")
    }
  }

  return (
    <div className="flex justify-center items-center w-8xl h-screen bg-stone-400" >
      <div>
        <h1 className='m-1' >Personal Expense Tracker</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='bg-stone-500 rounded-2xl m-1 '/> <br />
        <input type="text" value={money} onChange={(ev) => setMoney(ev.target.value)} className='bg-stone-500 rounded-2xl m-1'/> <br />
        <input type="submit" onClick={handleSubmit} className='m-1 ml-15 bg-stone-300 p-2 rounded'/>
        <div>
          {items.map((el, index) => (
            <div key={index} className='bg-stone-300 rounded-2xl m-1 p-3'>
              <h1>{el[0]}</h1>
              <h2>${el[1]}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
