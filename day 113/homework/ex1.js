class Initials{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get_initials(){
        return `initials are: ${this.firstname[0]}.${this.lastname[0]}`
    }
}

const person = new Initials("kote", "thimsho")
console.log(person.get_initials());