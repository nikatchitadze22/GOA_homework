// Object Destructuring: Unpack properties from objects into distinct variables with concise syntax.

let obj = {one: 11, two: 22}
let {one:first, two:second} = obj
console.log(first);
console.log(second);