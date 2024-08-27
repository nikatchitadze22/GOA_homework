// 1) შექმენით სარეგისტრაციო ფორმა, სადაც მომხმარებელი შემოიტანს 3 მნიშვნელობას,
//  პირველი სახელი, მეორე გვარი და მესამე ემაილი, ჯავასკრიპტის დახმარებით ეს
//   მნიშვნელობები დადასტურებს შემდეგ უნდა წამოიღოთ და შექმნათ ობიექტი რომელსაც 
//   დაამატებთ database მასივში, ობიექტი უნდა შეიქმნასს კონსტრუქტორის დახმარებით,
//  კონსტრუქტორს დააქრვით Account, შემდეგ კი კომენტარებით ახსენით რას აკეთებს new და this 

// Array to store account objects
const form = document.getElementById('myForm');

const database = [];

function Account(firstname, lastname, email){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;

    const acc = new Account(firstname, lastname, email);

    database.push(acc);

    console.log(database);
})