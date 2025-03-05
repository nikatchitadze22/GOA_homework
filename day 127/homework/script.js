const display = document.getElementById('displaydiv');

fetch('https://fakestoreapi.com/products')
    .then(res => {
        let color;

        if (res.status === 200) {
            color = 'green';
        } else if ([301, 302, 304].includes(res.status)) {
            color = 'blue';
        } else if ([400, 401, 403].includes(res.status)) {
            color = 'orange';
        } else if (res.status >= 500) {
            color = 'red';
        } else {
            color = 'gray';
        }

        display.innerHTML += `
            <p style="color: ${color}; font-weight: bold;">Status: ${res.status}</p>
        `;
    })
    .catch(err => {
        display.innerHTML += `
            <p style="color: red; font-weight: bold;">Error: Failed to fetch data</p>
        `;
    });
























// .then(res => {
//     if (!res.ok) {
//         throw new Error(res.status);
//     }
//     return res.json();
// })
// .then(data => {
//     const product = data[0];
//     document.body.innerHTML = `
//         <h1>${product.title}</h1>
//         <p>${product.description}</p>
//         <img src="${product.image}" alt="${product.title}" />
//         <p>Price: $${product.price}</p>
//     `;
// })
// .catch(error => {
//         console.error('Error:', error);
// });