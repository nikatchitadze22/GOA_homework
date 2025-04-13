function manualSlice(array, startIndex, endIndex) {
    let slicedArray = [];
    
    for (let i = startIndex; i < endIndex; i++) {
        slicedArray.push(array[i]);
    }
    
    return slicedArray;
}

let numbers = [10, 20, 30, 40, 50];

console.log(manualSlice(numbers, 1, 4));