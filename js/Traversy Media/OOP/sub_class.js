class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    // ham summary se o trong prototype neu co return lai gia tri
    getSummary()    
    {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }
 // chi cothe goi khi su dung ten cua class, giong privite trong c++
    static topBookStore(){
        return 'ABCDEFGHIJKLM';
    }
}

//Magazine Subclass
class Magazine extends Book {
    constructor(title, author, year, month)
    {
        // call parent constructor
        super(title, author, year);
        this.month = month;
    }
    
}

//Instantiate Magazine
const mag1 = new Magazine ('Mag one', 'John Doe', '2020', 'Jan');
console.log(mag1);