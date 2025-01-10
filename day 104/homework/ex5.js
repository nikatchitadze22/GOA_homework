// Destructuring in Loops: Iterate over an array of objects and destructure each object's properties directly in the loop declaration.

const users = [
    { name: 'Nika', age: 25 },
    { name: 'Lasha', age: 30 },
    { name: 'Kote', age: 35 }
    ];  

for (const { name, age } of users) {
    console.log(`name: ${name} ; age: ${age}`);
}