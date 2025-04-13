const numbers = [5, 3, 8, 1, 2];
// we create our function
numbers.sort(function(a, b) {
    // next line returns numbers from biggest to smallest
    return b - a;
});
// then we log the massive
console.log(numbers); // [8, 5, 3, 2, 1]
