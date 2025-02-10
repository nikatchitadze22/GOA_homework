// 1) შექმენით წიგნების კლასი ორი ჩვეულებრივი მეთოდით, ერთი გეთერ მეტოით და სამი ფროფერთით.
//  შექმენით სამი წიგნის ჟანრის კლასი (მაგ. სათავგადასავლო, სატირა, ფანტაზია),
//  სამივე მემკვიდრე წიგნის კლასის. თითოეულს უნდა ჰქონდეს ერთი მშობელი კლასის 
// მთლიანად შეცვლილი მეთოდი, მეორე ერთ ერთ მეთოდზე დაშეენებული მეთოდი 
// ( მშობელი კლასის მეთოდი + ახალი ფუნქციონალი ), და ერთი სრულიად ახალი, უნიკალური მეთოდი. 
// ასევე თითოეულს უნდა ჰქონდეს ორი ახალი ფროფერთი. წარმატებები ♡＾▽＾♡

class Books{
    constructor(author, year, genre){
        this.author = author;
        this.year = year;
        this.genre = genre;
    }

    set author(my_author){
        this._author = my_author;
    }

    get author(){
        return this._author;
    }

    set year(my_year){
        if(my_year < 1901){
            return `invalid year that you inputted ${this.year}`
            this._year = "invalid string"
        }else{
            this._year = my_year
        }
    }

    get year(){
        return this._year;
    }

    set genre(my_genre){
        this._genre = my_genre;
    }

    get genre(){
        return this._genre;
    }
}

const book = new Books("J.K. rowling", 1899, "Nigger")
console.log(book.author);
console.log(book.year);
console.log(book.genre);