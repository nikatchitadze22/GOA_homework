fetch('https://fakestoreapi.com/products')
    .then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    })
    .then(data => {
        const product = data[0];
        document.body.innerHTML = `
            <h1>${product.title}</h1>
            <p>${product.description}</p>
            <img src="${product.image}" alt="${product.title}" />
            <p>Price: $${product.price}</p>
        `;
    })
    .catch(error => {
            console.error('Error:', error);
    });
