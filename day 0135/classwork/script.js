const mySet = new Set([1, 2, 3, 4]);

console.time("addTime"); 
mySet.add(5);
console.timeEnd("addTime");

const arr = [1,2,3,4]
console.time("append")
arr.push(5)
console.timeEnd("append")