class Number {
    constructor(number) {
        this._number = number;
    }

    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }

    getsquare_number() {
        console.log(this._number ** 2);
    }

    getsquareroot_number() {
        console.log(this._number ** 0.5);
    }
}

const num = new Number(9);
console.log(num.number);
num.getsquare_number();
num.getsquareroot_number(); 

num.number = 16; 
console.log(num.number); 
num.getsquare_number(); 
num.getsquareroot_number(); 