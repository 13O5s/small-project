// Object of Protos
const bookProtos = {
    getSummary: function()
    {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

// tao object 
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'John Doe';

const book2 = Object.create(bookProtos,{
    title: {value: 'Book Two'},
    author: {value : 'John Doe'}
})
console.log(book1);
console.log(book2);
