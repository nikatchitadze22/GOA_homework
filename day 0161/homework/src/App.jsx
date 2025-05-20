import Data from "./components/Data";

function App() {
  console.log(Data);

  return (
    <>
      <div>
        {Data.map((el, index) => (
          <div key={index} className="text-center rounded-3xl bg-stone-400 w-80 h-100 text-2xl flex align-center justify-center m-3 p-3 ml-200" >
            <div className="">
              <h1>{el.name}</h1>
              <br />
              <p>Age - {el.age}</p>
              <br />
              <img className="rounded-4xl" src={el.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
