// 1

const greet = (name = "guest") => `hello ${name}`
console.log(greet("nigga"));
console.log(greet("chigga"));

// 2

const calc = (a = 0, b = 5) => `sum of nums is: ${a + b}`
console.log(calc(1,2));
console.log(calc(3,4));

// 3

const bigger = (num1 = 10, num2 = 20) => {
    if (num1 > num2) {
        console.log(num1);} 
    else {
        console.log(num2);
    }
};
bigger();   
bigger(30, 25);


// 4

const mult = (a = 1, b = 2, c = 3) => `multiply is: ${a*b*c}`
console.log(mult());
console.log(mult(4,5,6));

// 5

const pharprice = (prc = 40, pctg = prc*0.05) => prc+pctg
console.log(pharprice());
console.log(pharprice(60));

// 6

const mttext = (text = "GOA    ", rep = 3) => text.repeat(rep)
console.log(mttext());
console.log(mttext(`I Hate Niggas.Peter Griffin   `, 2));

// 7

const biggerNum = (a = 5, b = 10) => a > b
console.log(biggerNum());
console.log(biggerNum(20,10));
console.log(biggerNum(60, 70));