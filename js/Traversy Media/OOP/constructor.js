function Book(title, author, year)
{
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

var book1 = new Book('Under the sea', 'John', '2019');
console.log(book1);
console.log(book1.getSummary());