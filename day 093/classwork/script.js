// 1) შექმენით მაგალითები var, let, const ახსენით მათ შორის სრული განსხვავება,
//  აგრეთვე ახსენით რა არის გლობალური, ლოკალური(ანუ ფუნქციის) და ბლოკის ფარგლები,
//   რა განსხვავებაა მათ შორის,
//  აგრეთვე დაწერეთ მაგალითუი სადაც მუშაობს ლექსიკური ფარგლები და ახსენით რა არის ის


console.log(i);

var i = 10;

// in this case, output will be undefined, not error because of hoisting

let i = 0;


console.log(i)

i = 10

console.log(i)

// in this case, let creates a variable that can be altered


const i = 0;


console.log(i)

// in this case, it will always return 0 because i is constant which can not be altered





// difference between global and local --->

for (var i = 0; i < 5; i++) {
    console.log("hello")
}


console.log(i)


// in this case, i variable will be outputed outside for loop because var has global scope


for (let i = 0; i < 5; i++) {
    console.log("hello")
}


console.log(i)

// in this case, i variable will not be outputed outside for loop because let has no global scope



function outerFunction() {
    const outerVariable = 'I am outside!';

    function innerFunction() {
      console.log(outerVariable); // ამ ფუნქციას აქვს წვდომა outervariable-ზე
}  
    innerFunction(); // innerfunction გამოძახება
}

  outerFunction(); // console-ში დაიბეჭდება: "I am outside!" 