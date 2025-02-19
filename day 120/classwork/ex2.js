function symmetric(set1, set2) {
    let result = new Set();
    for (let value of set1) {
        if (!set2.has(value)) {
            result.add(value);
        }
    }
    for (let value of set2) {
        if (!set1.has(value)) {
            result.add(value);
        }
    }
    return result;
}

console.log(symmetric(new Set([1, 2, 3]), new Set([3, 4, 5]))); 