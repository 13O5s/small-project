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

// Instantiate Object
const book1 = new Book('Book 1', 'John Doe', '2019');
console.log(book1);