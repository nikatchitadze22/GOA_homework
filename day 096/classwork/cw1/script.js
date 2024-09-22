// my own clone

function myReduce(array, initialValue) {
    let accumulator = initialValue;
    
    for (let i = 0; i < array.length; i++) {
        accumulator += array[i];
    }
    
    return accumulator;
}
const numbersArray = [1, 2, 3, 4, 5];

const customSum = myReduce(numbersArray, 0);
console.log('Custom Sum:', customSum);

// function itself

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum:', sum);

const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log('Product:', product);
