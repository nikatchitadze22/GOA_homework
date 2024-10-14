// ემკვიდრეობა და მრავალჯერადი გამართვა: შექმენი ძირითადი კლასი Appliance,
//  რომელსაც ექნება თვისებები brand და power, და მეთოდი turnOn(), რომელიც კონსოლში დაბეჭდავს 
//  "The appliance is now on." შემდეგ შექმენი ორი შვილი კლასი WashingMachine და Microwave.
//  WashingMachine დაამატებს მეთოდს washClothes(), ხოლო Microwave დაამატებს მეთოდს heatFood().
//   თითოეულ შვილკლასში შეამოწმე მშობლის turnOn() მეთოდის მუშაობა.class Shape {

class Appliance {
    constructor(brand, power) {
        this.brand = brand;
        this.power = power;
    }

    turnOn() {
        console.log("The appliance is now on.");
    }
}

class WashingMachine extends Appliance {
    washClothes() {
        this.turnOn();
        console.log("The washing machine is now washing clothes.");
    }
}

class Microwave extends Appliance {
    heatFood() {
        this.turnOn();
        console.log("The microwave is now heating food.");
    }
}

// მაგალითი
const washingMachine = new WashingMachine('LG', 2000);
washingMachine.washClothes();

const microwave = new Microwave('Samsung', 1200);
microwave.heatFood();
