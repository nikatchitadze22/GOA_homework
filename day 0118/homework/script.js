// DAY 118
// პირადი ველების შექმნა – შექმენი კლასი, რომელიც შეიცავს ერთ ან მეტ პირად ველს და უზრუნველყოს მათი ინკაფსულაცია.
// getter და setter მეთოდები – დაამატე getter და setter მეთოდები პირადი ველებისთვის, რათა მათთან წვდომა კონტროლდეს.
// მხოლოდ წაკითხვადი ველი – შექმენი კლასი, სადაც პირადი ველი შესაძლებელია მხოლოდ წაკითხვად იყოს და მისი შეცვლა კლასის გარედან შეუძლებელი იყოს. 
// შექმენი BankAccount კლასი - რომელსაც ექნება პირადი ველი #balance. დაამატე getBalance() მეთოდი, რომელიც აბრუნებს ბალანსს და deposit(amount) მეთოდი, რომელიც ანგარიშზე თანხას დაამატებს. ბალანსზე პირდაპირი წვდომა გარედან არ უნდა იყოს შესაძლებელი.
// (🔥◡🔥)🔥 წარამატებები! *:･ﾟ🌟.


class Car{
    #owner
    #year
    constructor(owner, year, model){
        this.#owner = owner;
        this.#year = year;
        this.model = model
    }

    set owner(my_owner){
        this.#owner = my_owner;
    }

    get owner(){
        return this.#owner
    }

    set year(my_year){
        this.#year = my_year
    }

    get year(){
        return this.#year
    }
}

const car = new Car("me", 1999, "mercedes")
console.log(car);
console.log(car.owner);
console.log(car.year);