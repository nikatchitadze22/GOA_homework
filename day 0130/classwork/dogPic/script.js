const display = document.getElementById("display");

async function photo() {
    try {
        let fetchedData = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!fetchedData.ok) {
            throw new Error("Failed to fetch image");
        }
        let jsonData = await fetchedData.json();
        display.innerHTML = `
        <img src="${jsonData.message}" width="200px" >
        `
    } catch (err) {
        console.error(err);
    }
}
