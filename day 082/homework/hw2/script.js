// დაბრუნებული მასივი გადაეცით ფუნქციას რომელსაც დაარქმევთ calculateAverage
//  ამ ფუნქციაში გამოითვლით იმ რიცხვების საშუალოს რომელიც მოთავსებულია სიაში, 
//  მიღებული საშულა დააბრუნეთ ფუნქციიდან

function calculateAverage(list1) {
    let listLength = list1.length;
    let listSum = 0;

    for (let i = 0; i < listLength; i++) {
        listSum += list1[i];
    }

    let average = listSum / listLength;
    
    return average;
}