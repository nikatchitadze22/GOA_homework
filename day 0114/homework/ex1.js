// თერმომეტრი
// შექმენი ობიექტი, რომელიც ინახავს ტემპერატურას ცელსიუსში, მაგრამ როდესაც იღებ მას (getter), აბრუნებს ფარენჰეიტში გადაყვანილ მნიშვნელობას. setter უნდა იღებდეს მხოლოდ ცელსიუსში მნიშვნელობას


class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return (this.celsius * 9/5) + 32;
    }
}

const temp = new Temperature(25);
console.log(`Temperature in Fahrenheit: ${temp.fahrenheit}`);