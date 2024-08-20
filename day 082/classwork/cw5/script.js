// შექმენით for ციკლი რომლითაც გაიგებთ რიცხვებს 0-იდან 10-ის ჩათვლით,
//  თქვენი დავალებაა მასივში დაამატოთ ობიექტი,
//   ობიექტში უნდა გქონდეთ 2
//   კუთვნილება პირველი value (რიცხვი),
//    მეორე type (აქ გაუწერთ ლუწია თუ კენტი)

const numbersArray = [];

for (let i = 0; i <= 10; i++) {
    const numberObject = {
        value: i,
        type: i % 2 === 0 ? 'even' : 'odd'
    };

// ? = if true type will be even if false type will be odd

    numbersArray.push(numberObject);
}

console.log(numbersArray);
