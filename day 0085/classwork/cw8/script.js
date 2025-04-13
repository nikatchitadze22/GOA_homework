function manualIndexOf(value, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === value) {
            return i;
            }
        }
    return -1;
}

let numbers = [10, 20, 30, 40, 50];


console.log(manualIndexOf(30, numbers));
console.log(manualIndexOf(25, numbers)); 
console.log(manualIndexOf(10, numbers));
console.log(manualIndexOf(40, numbers));