class Student {
    constructor(name) {
        this.name = name;
    }
    changeName(newName) {
        this.name = newName;
    }
}
const student = new Student("John");
student.changeName("Alex");
console.log(student.name);
