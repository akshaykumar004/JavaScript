/* ----------------------------------------- Day 7: Objects -----------------------------------------------
-------------------------------------------- 28-07-2024 01:12 AM -----------------------------

Tasks/Activities:-

Activity 1: Object Creation and Access
⚫ Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
⚫ Task 2: Access and log the title and author properties of the book object.

Activity 2: Object Methods
⚫ Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
⚫ Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

Activity 3: Nested Objects
⚫ Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), 
    and log the library object to the console.
⚫ Task 6: Access and log the name of the library and the titles of all the books in the library.

Activity 4: The this Keyword
⚫ Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, 
    and log the result of calling this method.

Activity 5: Object Iteration
⚫ Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
⚫ Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

*/

// ---------------------------------------- Activity 1: Object Creation and Access ---------------------------------------

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

const obj = {
    title : 'Math',
    author : 'Agarwal',
    year : 2000
}

console.log('Object  : ' , obj);

// Task 2: Access and log the title and author properties of the book object.


console.log(`title is : ${obj.title}`);
console.log(`author is : ${obj.author}`);



// ------------------------------------------- Activity 2: Object Methods ---------------------------------------------------

// Task 3: Add a method to the book object that returns a string with the book's title and author and log the result of calling this method.

const newObj = {
    title : 'Math',
    author : 'Agarwal',
    year : 2000,
    getDetails : function() {
        console.log('result using an method - ',` title : ${this.title} , author : ${this.author}`);
    }

}

newObj.getDetails();



// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property then log the updated object.

let bookObj = {
    title : 'biography',
    author : 'akshay',
    year : 1998 ,
    updateYear : function (year)  {
        this.year = year
        console.log(`Updated Year is ${this.year}`)
    }
}

console.log('New Obj : ', bookObj);
bookObj.updateYear(2024);
console.log('Updated bookObj is : ', bookObj);



// -------------------------------------------- Activity 3: Nested Objects ------------------------------------------------

/* Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), 
and log the library object to the console. */

let library = {
    name: 'City Library',
    books: [
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960 ,
            getDetails : function () {
                console.log(`${this.title} (${this.year})`);
            }
        },
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            year: 1813 ,
            getDetails : function () {
                console.log(`${this.title} (${this.year})`);
            }
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            year: 1925 ,
            getDetails : function () {
                console.log(`${this.title} (${this.year})`);
            }
        }
    ]
};

console.log(library);


// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log('Library name : ' , library.name);
library.books.forEach( (book) => {
   console.log('Book title : ' , book.title) 
})



// ---------------------------------------------- Activity 4: The this Keyword -------------------------------------------
/* Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, 
and log the result of calling this method. */

console.log('Book details :-');
library.books.forEach( (book) => {
    book.getDetails();
})


//----------------------------------------------- Activity 5: Object Iteration -----------------------------------

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

// Libraray object is created in above task - 5.


for (let key in library) {
    if (library.hasOwnProperty(key)) {
        if (Array.isArray(library[key])) {      // if key is array then print key in next line. means here books is array hence 
            console.log(`${key}:`);             // printing key(books) here
            library[key].forEach((item, index) => {
                console.log(`  Book ${index + 1}:`);
                for (let bookKey in item) {
                    if (item.hasOwnProperty(bookKey)) {
                        console.log(`    ${bookKey}: ${item[bookKey]}`);
                    }
                }
            });
        } 
        else {
            console.log(`${key}: ${library[key]}`);  // this line printing 'name : City Libraray' bcz name is not an array.
        }
    }
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

// Library object is created in above task - 5.

console.log('Library Object Keys:');
Object.keys(library).forEach(key => {
    console.log(key);
});

console.log('Library Object Values:');
Object.values(library).forEach(value => {
    if (Array.isArray(value)) {
        console.log(`[Array with ${value.length} elements]`);
        // Iterate over each book in the array and log its keys and values
        value.forEach((book, index) => {
            console.log(`  Book ${index + 1}:`);    // index + 1 using bcz it will take from 0 so it will be not good so increasing by 1
            console.log('    Keys:');
            Object.keys(book).forEach(bookKey => {
                console.log(`      ${bookKey}`);
            });
            console.log('    Values:');
            Object.values(book).forEach(bookValue => {
                if (typeof bookValue === 'function') {
                    console.log('      [Function]');
                } else {
                    console.log(`      ${bookValue}`);
                }
            });
        });
    } else if (typeof value === 'function') {
        console.log('[Function]');
    } else {
        console.log(value);     // this line printing the value of name key which is 'City Library'. bcz name is not an array.
    }
});



/* ------------------------- Explanation of Task - 8 --------------------------------------

1 - for (let key in library) {

This line starts a for...in loop to iterate over all enumerable properties (keys) of the library object.
'key' represents each property name in the library object during the iteration.

2 - if (library.hasOwnProperty(key)) { - 
This line ensures that the property being processed is an "own" property of library, meaning it is not inherited from its prototype chain.

3 - if (Array.isArray(library[key])) {
This checks if the value of the current property (key) is an array. This is useful for differentiating between arrays and 
other types of values.

4 - Next remainig code - 
If the value is an array, it prints the name of the property (key) and then iterates over each item in the array.
For each item in the array, it prints Book X: where X is the index of the book (starting from 1).
Then, it uses another for...in loop to iterate over the keys of each book object, printing out each key-value pair.

5 - else block - 
If the value is not an array, it simply prints the key and its corresponding value.

*/

/* ------------------------- Explanation of Task - 9 --------------------------------------

Object.keys(library) -> returns an array of the property names (keys) of the library object.
.forEach(key => { console.log(key); }) -> iterates over this array and logs each key.

Object.values(library) -> returns an array of the values of the library object properties.
.forEach(value => { ... }) -> iterates over these values and processes each one.

next few lines code -
if (Array.isArray(value)) { 
console.log(`[Array with ${value.length} elements]`);
value.forEach((book, index) => {
    Object.keys(book).forEach(bookKey => {
    Object.values(book).forEach(bookValue => {

If the value is an array (like the books property), it logs the number of elements in the array.
Then, it iterates over each item (book) in the array.
For each book, it logs its keys and values separately.

elseif block - This will check the type of value is function or not if yes then print the value as hardcode 'Function'

else block - If the value is not an array, it simply prints value of key i.e name .



*/