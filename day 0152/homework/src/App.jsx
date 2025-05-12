import Box from "./components/Box"

function App() {
  const massive = ["hi", "hello", "welcome"]
  return (
    <>
      <div>
        {massive.map((el, index) => (
          <h1 key={index} >{el}</h1>
        ))}
      </div>
      <Box num={15} color="green" />
    </>
  )
}

export default App
