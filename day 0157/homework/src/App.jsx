import parts from './components/Parts'

function App() {
  return (
    <>
      {parts.map(elem => (
        <div className='bg-amber-400 p-2 m-2 rounded-3xl ' key={elem.id}>
          <h1 className=' rounded-3xl hover:bg-amber-500 p-1' >{elem.name}</h1>
          <h2 className=' rounded-3xl hover:bg-yellow-600 p-1' >{elem.descr}</h2>
          <p className=' rounded-3xl hover:bg-amber-300 p-1' >${elem.price}</p>
          <h4 className=' rounded-3xl hover:bg-yellow-300 p-1' >{elem.inStock ? "5 left" : "out of stock"}</h4>
        </div>
      ))}
    </>
  )
}

export default App

