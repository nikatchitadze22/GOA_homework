class minutes{
    constructor(age){
        this.age = age;
    }

    set age(my_age){
        this._age = my_age;
        if (my_age > 0){
            return _age;
        }else{
            return `invalid year`
        }
    }

    get age(){
        return _age
    }
}


const min = new minutes(15)
const min1 = new minutes(-15)
console.log(min.age);
console.log(min1.age);