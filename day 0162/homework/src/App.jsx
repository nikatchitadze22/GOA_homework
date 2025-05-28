import React, { useState } from 'react'
import { Img } from './components/Img'

const App = () => {
    const [value, setValue] = useState("")
    const [info, setInfo] = useState("")
    const [cards, setCards] = useState([])

    console.log(cards);

    function handleClick() {
        setCards([...cards, { value, info }])
    }

    return (
        <>
            <input
                className='m-3 p-3 bg-stone-300 rounded-2xl'
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <input
                className='m-3 p-3 bg-stone-300 rounded-2xl'
                type="text"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
            />
            <input
                className='m-3 p-3 bg-stone-300 rounded-2xl'
                type="submit"
                onClick={handleClick}
                value="Add"
            />

            {cards.map((card, index) => (
                <div className='m-3 p-3 bg-stone-400 w-max rounded-2xl' key={index}>
                    <h1>{card.value}</h1>
                    <p>{card.info}</p>
                    <Img />
                </div>
            ))}
        </>
    )
}

export default App
