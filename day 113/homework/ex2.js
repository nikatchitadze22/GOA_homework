class AgeInMonths{
    constructor(age){
        this.age = age;
    }

    get_months(){
        return `age: ${this.age} in months will be: ${this.age*12}`
    }
}

const person = new AgeInMonths(15)
console.log(person.get_months());