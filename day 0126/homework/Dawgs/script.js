const display = document.getElementById('displaydiv')

fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(res => {
        display.innerHTML += `
            <img src = "${res.message}">
`
    })