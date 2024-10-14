// მემკვიდრეობის გამოყენება კონსტრუქტორის მეშვეობით: შექმენი კლასი Shape, რომელსაც ექნება კონსტრუქტორი,
//  რომელიც იღებს ორ პარამეტრს: name და sides. შემდეგ შექმენი შვილი კლასი Triangle,
//  რომელიც მემკვიდრეობით მიიღებს Shape-ს, დაამატებს ახალ თვისებას base და height და შექმნის მეთოდს
//   calculateArea(), რომელიც გამოთვლის სამკუთხედის ფართობს.


class Shape {
    constructor(name, sides) {
        this.name = name;
        this.sides = sides;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super('Triangle', 3);
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return (this.base * this.height) / 2;
    }
}

// მაგალითი
const triangle = new Triangle(10, 5);
console.log(`Shape: ${triangle.name}`);
console.log(`Sides: ${triangle.sides}`);
console.log(`Area: ${triangle.calculateArea()}`);