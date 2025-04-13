// Set-ების დავალებები
// ნაკრებების გაერთიანება
// დაწერე ფუნქცია, რომელიც მიიღებს ნაკრებების მასივს და დააბრუნებს მათ გაერთიანებას.
// მაგალითი:
// ნაკრებებისგაერთიანება([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]); 
// // შედეგი: Set {1, 2, 3, 4}



function setJoin(sets) {
    let result = new Set();
    for (let set of sets) {
        for (let val of set) {
            result.add(val);
        }
    }
    return result;
}

console.log(setJoin([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])])); 