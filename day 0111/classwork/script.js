// 1) შექმენით ოთკუთხედის კლასი სიგრძის და სიგანის ფროფერთით და გეთერ მეთოდი მისი პერიმეტრისთვის

class Rectangle{
    constructor(width, height){
    this.width = width
    this.height = height
    }

    perimeter(){
        return `perimeter: ${this.width * this.height}`
    }

    get area(){
        return this.perimeter()
    }
}

const rect = new Rectangle(5, 10)
console.log(rect.area);


// 2) შექმენით ცხოველის კლასი,  შემდეგ მისი შთამომავალი ძუძუმწოვრის 
// კლასი და ძუძუმწოვრის შთამომაცალი ძაღლის კლასი.
//  თითოეული კლასის კონტრუკტორი უნდა იყოს მის მშობელ კლასზე დაფუძენბული.


class Animal{
    constructor(type, weight){
        this.type = type
        this.weight = weight
    }
}

class Mammal extends Animal{
    constructor(type, weight, mammal){
        super(type, weight)
        this.mammal = mammal
    }
}

class Dawg extends Mammal{
    constructor(type, weight, mammal, barks){
        super(type, weight, mammal)
        this.barks = barks
    }
}

my_dawg = new Dawg("big", 10, true, true)
console.log(my_dawg);



// 3) შექმენით მანქანის და ელექტტონული მანქანის კლასი, გამოიყენეთ extends.
//  ელექტროუნული კლასში შეცვალეთ ერთი მისი მშობელის მეთოდი და 
//  მეორე მეთოდზე დააშენეეთ ახალი ფუნქციონალი


class Car {
    constructor(color, model, year) {
        this.color = color;
        this.model = model;
        this.year = year;
    }

    get_info() {
        return `Car ${this.model}, which is ${2024 - this.year} years old, is color: ${this.color}`;
    }

    engine_start(){
        return `engine has started`
    }
}

class Electric_car extends Car {
    constructor(color, model, year, btrCpct) {
        super(color, model, year);
        this.btrCpct = btrCpct;
    }

    get_info() {
        return `${super.get_info()} and has a battery capacity of ${this.btrCpct} kWh.`;
    }

    engine_start(){
        return `engine can't start, it is an electric car`
    }
}

const myCar = new Car("red", "Mercedes", 2020, 75);
const myElectricCar = new Electric_car("red", "Tesla Model 3", 2020, 75);
console.log(myElectricCar.get_info());
console.log(myElectricCar.engine_start());
console.log(myCar.get_info());
console.log(myCar.engine_start());