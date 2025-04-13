const numbers = [5, 3, 8, 1, 2];
// we create custom function
numbers.sort(function(a, b) {
    // 5th line returns numbers from smallest to biggest
    return a - b;
});

console.log(numbers); // [1, 2, 3, 5, 8]
