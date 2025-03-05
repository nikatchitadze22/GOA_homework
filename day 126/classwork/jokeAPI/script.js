const setup = document.getElementById('setup');
const delivery = document.getElementById('delivery');

fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then(res => res.json())
    .then(res => {
        setTimeout(() => {
            setup.innerHTML = `<p>${res.setup}</p>`;
        }, 1000);

        setTimeout(() => {
            delivery.innerHTML = `<p>${res.delivery}</p>`;
        }, 2000);
    });
