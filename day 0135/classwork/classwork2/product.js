export const products = [
    { "id": "1", "name": "Decolte", "price": 20 },
    { "id": "2", "name": "Sneakers", "price": 50 },
    { "id": "3", "name": "Running Shoes", "price": 60 },
    { "id": "4", "name": "Leather Jacket", "price": 120 },
    { "id": "5", "name": "Sunglasses", "price": 25 },
    { "id": "6", "name": "Backpack", "price": 40 },
    { "id": "7", "name": "Smartwatch", "price": 150 },
    { "id": "8", "name": "Jeans", "price": 45 },
    { "id": "9", "name": "T-Shirt", "price": 15 },
    { "id": "10", "name": "Hoodie", "price": 35 },
    { "id": "11", "name": "Dress", "price": 55 },
    { "id": "12", "name": "Formal Shoes", "price": 80 },
    { "id": "13", "name": "Wristwatch", "price": 90 },
    { "id": "14", "name": "Handbag", "price": 70 },
    { "id": "15", "name": "Perfume", "price": 65 }
];

export function getProductById(id) {
    return products.find(product => product.id === id) || null;
}

export function renderProducts() {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = "";
    
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart('${product.id}')">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}
