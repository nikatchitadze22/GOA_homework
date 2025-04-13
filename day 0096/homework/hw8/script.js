const user = {
    name: "David",
    age: 28
};

const location = {
    city: "Boston",
    country: "USA"
};

const mergedObject = { ...user, ...location };
console.log(mergedObject);
