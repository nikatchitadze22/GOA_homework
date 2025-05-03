import { useState } from 'react'

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  return (
    <div className={theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </h1>
        <button 
          onClick={toggleTheme} 
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  )
}

export default App
