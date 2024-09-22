const student = {
    name: "Alice",
    age: 22,
    address: {
        city: "San Francisco",
        country: "USA"
    }
};

const { address: { city, country } } = student;
console.log(city);
console.log(country);
