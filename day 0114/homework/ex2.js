// სტუდენტის შეფასება
// შექმენი ობიექტი, სადაც setter იღებს სტუდენტის
//  ქულას (0-დან 100-მდე) და getter აბრუნებს
//  შეფასებას (A, B, C, D, F).
class Student {
    constructor(grade) {
        this.grade = grade;
    }

    set grade(grade) {
        if (grade >= 0 && grade <= 100) {
            this._grade = grade;
        } else {
            this._grade = null;
        }
    }

    get grade() {
        if (this._grade === null) return "Invalid grade";
        if (this._grade >= 90) return "A";
        if (this._grade >= 80) return "B";
        if (this._grade >= 70) return "C";
        if (this._grade >= 60) return "D";
        return "F";
    }
}

const student1 = new Student(-5);  
console.log(student1.grade);
const student2 = new Student(85);  
console.log(student2.grade);
