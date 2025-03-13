document.getElementById("getJoke").addEventListener("click", async () => {
    const category = document.getElementById("category").value;
    const jokeElement = document.getElementById("joke");

    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`);
        const data = await response.json();

        if (data.type === "single") {
            jokeElement.textContent = data.joke;
        } else if (data.type === "twopart") {
            jokeElement.textContent = `${data.setup} - ${data.delivery}`;
        }
    } catch (error) {
        jokeElement.textContent = "Failed to load a joke. Try again!";
    }
});

document.getElementById("getAdvice").addEventListener("click", async () => {
    const adviceElement = document.getElementById("advice");

    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        adviceElement.textContent = data.slip.advice;
    } catch (error) {
        adviceElement.textContent = "Failed to load advice. Try again!";
    }
});
