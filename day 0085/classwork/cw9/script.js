function manualReverse(list) {
    let reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}

let numbers = [1, 2, 3, 4, 5];

console.log(manualReverse(numbers)); 