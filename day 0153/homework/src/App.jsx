import { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialSpotify } from "react-icons/sl";


function App() {
  let [count, setCount] = useState(0)

  return (
    <>
      <br />
      <header className='text-center bg-gray-300' >
        <h1>Hi my name is Nikoloz Tchitadze</h1>
      </header>
      <br />
      <main className='text-center bg-gray-200 ' >
        <p>i live in tbilisi, curently work at GOA</p>
        <button className=' m-4 p-2 bg-gray-400' onClick={() => {setCount(count += 1)}} >{count}</button>  
      </main>
      <footer className='text-center bg-gray-200 h-16' >
        <div className="flex justify-center items-center ">
          <FaGithub className="w-10 h-10" />
          <FaInstagram className="w-10 h-10"/>
          <CiLinkedin className="w-10 h-10"/>
          <SlSocialTwitter className="w-10 h-10"/>
          <SlSocialSpotify className="w-10 h-10"/>
        </div>
      </footer>

    </>
  )
}

export default App
