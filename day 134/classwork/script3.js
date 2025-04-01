// 5) გამოგეცემათ მატრიცა და შექმენით ფუნქცია toObj - რომელიც გადააქცევს ამ მატრიცას ობიექტად, ( მატრიცაში თითოეულ მასივს ექნება 2 ელემენტი [key, value] )

function toObj(matrix) {
    let obj = {};
    for (let [key, value] of matrix) {
        obj[key] = value;
    }
    return obj;
}
console.log(toObj([[1,2], [3,4]]));