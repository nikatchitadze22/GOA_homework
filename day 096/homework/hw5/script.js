const product = {
    name: "Laptop",
    price: 1200
};

const { name, category = "general" } = product;
console.log(name);
console.log(category);
