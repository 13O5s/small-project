function Book(title, author, year)
{
    this.title = title;
    this.author = author;
    this.year = year;
    // this.getSummary = function () {
    //     return `${this.title} was written by ${this.author} in ${this.year}`
    // }
}

// khi dung kieu nay se cho vao prototo
Book.prototype.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
}
// khai bao constructor magazine, theo constructor book
function Magazine(title, author, year, month)
{
    //  thua ke cac thuoc tinh khong o trong prototype
    Book.call(this, title, author, year);
    this.month = month;
}

//Inherit Prototype  (phai tao turoc khi khai bao mot thuoc tinh can ke thua)
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine
var mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan')

// Use Magazine Constructor
// Magazine.prototype.constructor = Magazine;
console.log(mag1);