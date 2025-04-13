const API_key = "d4008dc8911146618eb0807c62c18fcc";
const display = document.getElementById("displaydiv");
const submitBtn = document.getElementById("submitBtn");

async function weather(city_name) {
    const fetchedData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`);
    const data = await fetchedData.json();
    
    if (data.weather) {
        display.innerHTML = ""; // Clear previous results
        data.weather.forEach(condition => {
            display.innerHTML += `
                <p>Weather ID: ${condition.id}</p>
                <p>Main: ${condition.main}</p>
                <p>Description: ${condition.description}</p>
                <p>Icon: ${condition.icon}</p>
            `;
        });
    } else {
        display.innerHTML = "<p>City not found or invalid API response.</p>";
    }
}

submitBtn.addEventListener("click", () => {
    const city_name = document.getElementById("weatherInput").value;
    if (city_name) {
        weather(city_name);
    } else {
        display.innerHTML = "<p>Please enter a city name.</p>";
    }
});


// const city_name = "Batumi"
// const API_key = "d4008dc8911146618eb0807c62c18fcc" 
// const display = document.getElementById("displaydiv")
// async function weather() {
//     const fetchedData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`);
//     const data = await fetchedData.json();
//     display.innerHTML = data.weather
// }

// weather();


// async function weather() {
//     const fetchedData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=batumi&appid=d4008dc8911146618eb0807c62c18fcc');
//     const data = await fetchedData.json();
//     console.log(data);
// }

// weather();
