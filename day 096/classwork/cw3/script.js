function myFilter(array) {
    const result = [];
    
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
        if (array[j] === array[i]) {
            count++;
        }
    }
        if (count === 2) {
            result.push(array[i]);
        }
    }
    
    return result;
}

const numbers = [1, 2, 3, 4, 5, 1, 6, 7, 8, 3];
const customFilteredNumbers = myFilter(numbers);
console.log(customFilteredNumbers);