// async function getJoke() {
//     try {
//         let fetchedData = await fetch('https://official-joke-api.appspot.com/random_joke')
//         if (!fetchedData.ok) {
//             throw new Error("Error")
//         }
//         let data = await fetchedData.json()
//         document.querySelector('p').innerHTML = `setup: ${data.setup} <br> punchline: ${data.punchline}`

//     } catch (msg) {
//         console.error(msg)
//     }
// }

const displayDiv = document.getElementById("display");

async function getInfo() {
    try {
        let fetchedData = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!fetchedData.ok) {
            throw new Error("Failed to fetch data");
        }
        let data = await fetchedData.json();
        displayDiv.innerHTML = "";

        data.forEach(user => {
            displayDiv.innerHTML += `
                <div class="user-card">
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                </div>
            `;
        });

    } catch (error) {
        console.error("Error fetching data:", error);
        displayDiv.innerHTML = `<p style="color:red;">Error loading user data</p>`;
    }
}


// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },