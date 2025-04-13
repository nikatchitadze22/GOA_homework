function myMap(array) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            result.push(array[i] * 2);
        } else {
            result.push(array[i]);
        }
    }
    
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const customModifiedNumbers = myMap(numbers);
console.log(customModifiedNumbers); // [2, 2, 6, 4, 10, 6, 14, 8, 18, 10]
