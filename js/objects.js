(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {
    firstName: "Jose",
    lastName: "Diaz"
    };
console.log(person.lastName);
console.log(person.firstName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
person.sayHello = function() {
    return 'Hello from ' + this.firstName + " " + this.lastName;
    }
 console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];
function array(arr) {
    arr.forEach(function(shopper) {
        if (shopper.amount > 200) {
            console.log(shopper.name + " spent " + shopper.amount.toFixed(2) + " so will get a discount of " + (shopper.amount * .12).toFixed(2) + " giving a total of " + (shopper.amount - (shopper.amount *.12)).toFixed(2));
        }else {
            console.log(shopper.name + " spent " + shopper.amount.toFixed(2) + " so does not qualify for discount");
        }
    });
}
    array(shoppers);
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [
        {title: 'The Hobbit',
         author: {firstName: 'J.R.R',
         lastName: 'Tolkein'}
        },
        {title: 'A song of Ice and Fire',
         author: {firstName: 'George R.R.',
         lastName: 'Martin'}
        },{title: 'Of Mice and Men',
         author: {firstName: 'John',
         lastName: 'Steinbeck'}
        },{title: 'Harry Potter',
         author: {firstName: 'J.K.',
         lastName: 'Rowling'}
        },{title: 'Meg',
         author: {firstName: 'Steve',
         lastName: 'Alten'}
        },
    ]
    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
for(var i = 0; i < books.length; i++){
    console.log("Books # " + (i + 1) + "\nTitle: " + books[i].title + "\nAuthor: " + books[i].author.firstName + " " + books[i].author.lastName);
}
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
var array =[];
function createBook(title, author){
    var names = author.split(" ");
        var book = {
            title: title,
            author: {
                firstName: names[0],
                lastName: names[1]
            }
        }
    return array.push(book);
}
createBook("Lord of the Rings","J.r.r. Tolkein")
    console.log(array);

function showBookInfo(arr) {
    for(var x = 0; x < arr.length; x++ ){
        console.log("Books # " + (x + 1) + "\nTitle: " + array[x].title + "\nAuthor: " + array[x].author.firstName + " " + array[x].author.lastName);
    }
}
showBookInfo(array);
})();
