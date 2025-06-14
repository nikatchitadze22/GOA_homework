import { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const data = "https://jsonplaceholder.typicode.com/users"
  
  useEffect(()=>{
    async function userList(){
      try{
        const fetched = await fetch(data)
        const fetchedData = await fetched.json()
        setUsers(fetchedData)
      }
      catch(err){
        console.error(err);
      }
    }
    userList()
  },[])

  return (
    <>
      {users.length ? users.map(el => (
        <div className='bg-stone-400 w-80 m-3 p-3 rounded-2xl ' >
          <h1>{el.name}</h1>
          <h1>{el.username}</h1>
          <h2>{el.email}</h2>
          <h2>{el.phone}</h2>
        </div>
        )) : <p className='m-3 p-3 w-80 bg-stone-400 rounded-2xl' >Loading...</p>}
    </>
  )
}

export default App
