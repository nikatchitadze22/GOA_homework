// Renaming Variables: Rename variables while destructuring to provide clearer names for extracted values.
let person = ["nikoloz", "tchitadze", 15, 1.99]
let [name1, surname1, age1, height1] = person
[name1, surname1, age1, height1] = [height1, age1, surname1, name1];
