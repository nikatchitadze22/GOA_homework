const mainDiv = document.querySelector('.main');

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            mainDiv.innerHTML += `
                <div>
                    <p>Product name: ${product.title}</p>
                </div>
            `;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
