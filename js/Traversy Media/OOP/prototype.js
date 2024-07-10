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

Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revise = true;
}

var book1 = new Book('Under the sea', 'John', '2019');
console.log(book1);
console.log(book1.getSummary());