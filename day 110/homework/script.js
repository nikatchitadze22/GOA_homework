// 1) შექმნით ცხოველის, მაქანის და ადამიანისკლასი, თითოეული სამი property-თ და ერთი მეთოდით.
//  თითოეული კლასიდან შექმენით სამ-სამი -ობიექტი და გამოიტანეთ ისინი კონსოლში.წარმატებები (•‿•)

class Animal{
    constructor(weight, height, age){
        this.weight = weight
        this.height = height
        this.age = age
    }

    get_info(){
        console.log(`weight: ${this.weight}`);
        console.log(`height: ${this.height}`);
        console.log(`age: ${this.age}`);
    }
}

const my_animal1 = new Animal(20, 150, 15)
const my_animal2 = new Animal(30, 520, 10)
const my_animal3 = new Animal(15, 50, 5)
my_animal1.get_info()
my_animal2.get_info()
my_animal3.get_info()



class Car{
    constructor(model, color, year){
        this.model = model
        this.color = color
        this.year = year
    }

    get_info(){
        console.log(`model: ${this.model}`);
        console.log(`color: ${this.color}`);
        console.log(`year: ${this.year}`);
    }
}

const my_car1 = new Car("Mercedes", "silver", 2015)
const my_car2 = new Car("Koenigsegg", "white", 2021)
const my_car3 = new Car("Ferrari F40", "red", 1995)
my_car1.get_info()
my_car2.get_info()
my_car3.get_info()


class Human{
    constructor(color, weight, height){
        this.color = color
        this.weight = weight
        this.height = height
    }

    get_info(){
        console.log(`color: ${this.color}`);
        console.log(`weight: ${this.weight}`);
        console.log(`height: ${this.height}`);
    }
}

const my_human1 = new Human("white", 70, 170)
const my_human2 = new Human("red", 50, 130)
const my_human3 = new Human("black", 190, 290)
my_human1.get_info()
my_human2.get_info()
my_human3.get_info()