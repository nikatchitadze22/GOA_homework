class Account {
    constructor(firstName, lastName, email, password, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.city = city;
    }

    printDetails() {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Email: ${this.email}`);
        console.log(`City: ${this.city}`);
        console.log(`Password: ${this.password}`);
    }
}

const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const city = document.getElementById('city').value;

const accounts = [];

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newAccount = new Account(firstName, lastName, email, password, city);
    accounts.push(newAccount);

    newAccount.printDetails();

    document.getElementById('registrationForm').reset();
});


console.log(accounts)
