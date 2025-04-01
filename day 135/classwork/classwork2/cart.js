import { getProductById } from "./product.js";
const cartDisplay = document.getElementById("cartDisplayDiv");

function addToCart(id) {
    const product = getProductById(id);

    if (product) {
        cartDisplay.innerHTML += `
        <p>Item: ${product.name}, Price: $${product.price}</p>
        `;
    } else {
        console.log("Product not found.");
    }
}

addToCart("5");