// const API_KEY = '800f76e';  // Use your actual API key here


const form = document.querySelector('form');
const main = document.querySelector('main');

const apiKey = '800f76e';

const fetchInfo = async (movieName) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);
        const data = await response.json();
        console.log(data);
        console.log(data.Actors)

    } catch (error) {
        console.log(`My code error: ${error}`);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchInfo(form.movie.value);
});
