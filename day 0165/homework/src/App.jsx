// import { useState } from 'react'
import Data from './Components/Data'
import { FaStar } from "react-icons/fa";



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {Data.map((el) => (
          <div className='p-4 m-4 bg-stone-400 rounded-3xl w-80' >
            {console.log(el)}
            <h1>{el.name}</h1>
            <h2>{el.email}</h2>
            <h2>{el.phone}</h2>
            <button>{el.isFavorite ? <FaStar color='yellow' /> : <FaStar />
}</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
