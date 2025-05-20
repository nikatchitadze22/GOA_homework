import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const divs = [...' '.repeat(100)].fill(
    <div className="bg-red-400 p-2 m-2 w-4 h-4" />
  );

  const divs1 = [...' '.repeat(25)].fill(
    <div><div className="bg-stone-400 p-2 m-2 w-4 h-4" />
    <div className="bg-blue-400 p-2 m-2 w-4 h-4"/></div>
  );

  return (
    <>
      <div className="grid grid-cols-10">
      {divs}
      </div>
      <div className="grid grid-cols-10" >
        {divs1}
      </div>
      <br /><br /><br />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)} >1</button><br />
      <button onClick={() => setCount(count + 2)} >2</button><br />
      <button onClick={() => setCount(count + 3)} >3</button><br />
      <button onClick={() => setCount(count + 4)} >4</button><br />
      <button onClick={() => setCount(count + 5)} >5</button><br />
      <button onClick={() => setCount(count + 6)} >6</button><br />
      <button onClick={() => setCount(count + 7)} >7</button><br />
      <button onClick={() => setCount(count + 8)} >8</button><br />
      <button onClick={() => setCount(count + 9)} >9</button><br />
      <button onClick={() => setCount(count + 10)} >10</button><br />
      <button onClick={() => setCount(count + 11)} >11</button><br />
      <button onClick={() => setCount(count + 12)} >12</button><br />
      <button onClick={() => setCount(count + 13)} >13</button><br />
      <button onClick={() => setCount(count + 14)} >14</button><br />
      <button onClick={() => setCount(count + 15)} >15</button><br />
      <button onClick={() => setCount(count + 16)} >16</button><br />
      <button onClick={() => setCount(count + 17)} >17</button><br />
      <button onClick={() => setCount(count + 18)} >18</button><br />
      <button onClick={() => setCount(count + 19)} >19</button><br />
      <button onClick={() => setCount(count + 20)} >20</button>
    </>
  );
}

export default App;
