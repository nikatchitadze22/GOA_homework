import React from 'react'

export const Img = () => {
    const randomNum = Math.floor(Math.random() * 5) + 1;
    const obj = {
    1: "https://picsum.photos/200?random=452",
    2: "https://picsum.photos/200?random=811",
    3: "https://picsum.photos/200?random=194",
    4: "https://picsum.photos/200?random=635",
    5: "https://picsum.photos/200?random=778"
}
    function handleImg(){
        return <img src={obj[randomNum]} alt="" />
    }

    return (
        <button onClick={handleImg}>Img</button>
    )
}
