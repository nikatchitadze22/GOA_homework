function sumNumbers(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sumNumbers(1, 2, 3, 4));
