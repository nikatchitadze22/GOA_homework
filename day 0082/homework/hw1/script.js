// 3) შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი,
//  start - end, თქვენი მოვალეობაა ამ რიცხვებს შორის
//   ყველა რიცხვის გაგება და მასივში შეტანა, საბოლოოდ
//    დააბრუნეთ მასივი


function nums(start, end) {
    let numbers = []; // Declare the array inside the function
    for(let i = start; i <= end; i++ ) {
        numbers.push(i);
    }
    return numbers;
}