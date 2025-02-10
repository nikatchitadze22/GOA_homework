// შექმენი BankAccount კლასი - რომელსაც ექნება პირადი ველი #balance. დაამატე getBalance() მეთოდი, რომელიც აბრუნებს ბალანსს და deposit(amount) მეთოდი, რომელიც ანგარიშზე თანხას დაამატებს. ბალანსზე პირდაპირი წვდომა გარედან არ უნდა იყოს შესაძლებელი.

class BankAcc{
    #balance
    constructor(name, balance){
        this.name = name;
        this.#balance = balance;
    }

    set balance(my_balance){
        this.#balance += my_balance;
    }

    getBalance(){
        return this.balance
    }

    deposit(amount){
        this.balance = amount;
    }

    get balance(){
        return this.#balance
    }
}

const bank = new BankAcc("nika", 1000)
console.log(bank.getBalance());
bank.deposit(500)
console.log(bank.getBalance());