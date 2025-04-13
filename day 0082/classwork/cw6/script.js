// შექმენით ლოგიკა რომლის მიხედვითაც მომხმარებელს უნდა შემოატანინოთ პაროლი თუ პაროლი სწორია
//  alert-ის საშვალებით გამოიტანეთ რომ მას მიეცა წვდომა, ხოლო თუ არასწორია თავიდან შეეკითხეთ 
//  პაროლი და მოაკელით პაროლის მცდელობა, თავიდან მცდელობები არის 3 თუ მცდელობები ამოიწურა ითიშება 
//  while ციკლი, ყოველ ჯერზე უნდა გამოუტანოთ მცდელობების რაოდენობა (დაგჭირდებათ while ციკლი და if 
//     პირობითი განცხადება


let correctPassword = "Goa_is_best"; 
let attempts = 3;

while (attempts > 0) {
    let password = prompt("Enter password:");

    if (password === correctPassword) {
        alert("Access granted!");
        break;
    } else {
        if (attempts === 1) {
            alert("Access denied. No attempts left.");
        } else {
            alert("Incorrect password. You have " + (attempts - 1) + " attempts left.");
        }
    }

    attempts = attempts - 1;
}
