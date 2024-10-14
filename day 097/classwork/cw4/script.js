class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        console.log(`${this.name} barks`);
    }
}
const dog = new Dog("Buddy");
dog.bark();
