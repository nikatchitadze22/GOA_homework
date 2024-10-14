class Animal {
    speak() {
        console.log("Animal speaks");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}
const dog = new Dog();
dog.speak();
dog.bark();
