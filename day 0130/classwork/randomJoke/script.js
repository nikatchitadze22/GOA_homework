const setup = document.getElementById("setup");
const delivery = document.getElementById("delivery");
async function joke() {
    try{
        let fetchData = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
        if (!fetchData.ok){
            throw new Error("error")
        }
        let jsonData = await fetchData.json();
        setup.innerHTML = `
            <p>setup: ${jsonData.setup}</p>
        `
        delivery.innerHTML = `
            <p>punchline: ${jsonData.delivery}</p>
        `
    }catch(err){
        console.error(err);
    }
}



// const display = document.getElementById("display");

// async function photo() {
//     try {
//         let fetchedData = await fetch("https://dog.ceo/api/breeds/image/random");
//         if (!fetchedData.ok) {
//             throw new Error("Failed to fetch image");
//         }
//         let jsonData = await fetchedData.json();
//         display.innerHTML = `
//         <img src="${jsonData.message}" width="200px" >
//         `
//     } catch (err) {
//         console.error(err);
//     }
// }
