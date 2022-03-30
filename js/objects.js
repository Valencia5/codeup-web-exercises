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
        firstName: "Moses",
        lastName: "Valencia",
    }


    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.SayHello = function () {
        console.log("Hello from " + person.firstName + " " + person.lastName);
    }
    console.log(person.SayHello());
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

    //1. a create a function that shows how much each person will save using conditionals
    //2. alerts must be made to tell how much each of the three have to pay
    //3. create an array of objects that displays the name, the amount before discount, the discount, the amount
    //after discount.


        var shoppers = [
                {name: 'Cameron', amount: 180},
                {name: 'Ryan', amount: 250},
                {name: 'George', amount: 320}
            ];




    shoppers.forEach(function(shopper) {
            var fullPrice= shopper.amount;
            console.log(shopper.name);
            if (shopper.amount > 200) {
                console.log(shopper.name +" the amount that is due before discount is " + fullPrice);
                console.log("Congrats, the discount provided is 12%!");
                console.log(shopper.name +" , your total due after discount is ", fullPrice -(fullPrice * .12))
            } else {
                console.log(shopper.name + ", you will pay full price which is " + fullPrice)
            }
        });

    /** TODO:
             // * Create an array of objects that represent books and store it in a
             // * variable named `books`. Each object should have a title and an author
             // * property. The author property should be an object with properties
             // * `firstName` and `lastName`. Be creative and add at least 5 books to the
             // * array
             // *
             // * Example:
             // * > console.log(books[0].title) // "The Salmon of Doubt"
             // * > console.log(books[0].author.firstName) // "Douglas"
             // * > console.log(books[0].author.lastName) // "Adams"
             // */
    var books = [
        {title: "Java",
            author: {
            firstName: "Gary",
            lastName: "Jones"
             }
        },
        {
        title: "CSS",
            author: {
            firstName: "Larry",
            lastName: "Bones"
            }
        },
        {
        title: "JavaScript",
            author: {
            firstName: "Jerry",
            lastName: "Homles"
            }
        },
        {
        title: "For Dummies",
            author: {
            firstName: "Terry",
            lastName: "Tones"
            }
        },
        {title: "For Smarties",
            author: {
            firstName: "Berry",
            lastName: "Domes"
            }}

    ]

    console.log(books)
    books.forEach(function(book){
        console.log( "The book title is " + book.title)
        console.log(book.title+ "is number "+ books.indexOf(book))
        console.log( "The Author of "+book.title+ " is " + book.author.firstName + " " + book.author.lastName)

    })

    // for (var i = 0; i < 4; i++) {
    //     console.log(book.indexOf(book) + "is the number of the book")
    // }


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
    // function createBook(bookName, authorFirst, authorLast){
    //     return books.title= bookName, books.firstName = authorFirst, books.lastName =authorLast
    //         }
    // books.createBook = function (bookName, authorFirst, authorLast) {
    //     // return books.title= bookName, books.firstName = authorFirst, books.lastName =authorLast;
    //     return books["title"] = "bookName"
    // };
    var book = {"Nomes"}
    console.log(typeof book)


    // console.log(books)
    // console.log(books.length)

    // function Book(type, author) {
    //     this.type = type;
    //     this.author = author;
    //     this.getDetails = function () {
    //         return this.type + " written by " + this.author;
    //     }
    // }
    //
    // var book = new Book("Fiction", "Peter King");
    //
    // console.log(book.getDetails());        // => Fiction written by Peter King

})();