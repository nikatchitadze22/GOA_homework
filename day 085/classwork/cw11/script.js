// 7) შექმენით ფუნქცია სახელად manualFilter რომელსაც პირველი გადაეცემა ფუნქცია და მეორე მასივი,
//  ამ ფუნქციაში უნდა გამოიყენოთ for ციკლი და გადაუარეთ გადმოცემულ მასივს, გამოიყენეთ if და
//   გამოიძახეთ გადმოცემული ფუნქცია ამჟამინდელ ინდექსზე მდგომი მნიშნელობით, თუ დაბრუნებული
//    მნიშნელობა არის true დაამატეთ ახალ მასივში და თუ არის false არ დაამატოთ ახალ მასივში,
//     როცა მორჩება for ციკლის მუშაობა დააბრუნეთ ახალი მასივი=, გადაცემული ფუნქციიდან აუცილებლად
//      უნდა ბრუნდებოეს boolean მნიშვნელობა, და უნდა იღებდეს ერთ მნიშნელობას გადაცემულ ფუნქციაში
//       რას შეამოწმებთ თქვენზეა დამოკიდებული


function manualFilter(filterFunction, array) {
    let filteredArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if (filterFunction(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    
    return filteredArray;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(number) {
    return number % 2 === 0;
}

console.log(manualFilter(isEven, numbers));
