/* ------------------------------------------- Day 8: ES6+ Features --------------------------------------
---------------------------------------------- 29-07-2024 01:29 AM ------------------

Tasks/Activities:-

Activity 1: Template Literals
⚫ Task 1: Use template literals to create a string that includes variables for a person's name and age and log the string to the console. 
⚫ Task 2: Create a multi-line string using template literals and log it to the console.

Activity 2: Destructuring
⚫ Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
⚫ Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

Activity 3: Spread and Rest Operators
⚫ Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements
    and log the new array to the console.
⚫ Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

Activity 4: Default Parameters
⚫ Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. 
    Log the result of calling this function with and without the second parameter.

Activity 5: Enhanced Object Literals
⚫ Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. 
⚫ Task 9: Create an object with computed property names based on variables and log the object to the console.

*/

// -------------------------------------  Activity 1: Template Literals ---------------------------------------------

// Task 1: Use template literals to create a string that includes variables for a person's name and age and log the string to the console. 

const name = 'Akshay'
const age = 25

console.log(`Hello Everyone ! My name is ${name} and I am ${age} year old.`);

// Task 2: Create a multi-line string using template literals and log it to the console.

const multilineString = `Hello All ! My name is Akshay 
and I am a Software Enginner in a MNC company 
called Capgemini`

console.log(multilineString);


// -------------------------------------  Activity 2: Destructuring ---------------------------------------------

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const array = ['Akshay' , 'Enginner' , '25' , 'Mumbai']

// Destructure the first and second elements
const [first , second] = array
console.log(first , second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console. 

const bookObj = {
    title: 'Book1',
    author: 'abc',
    price: 299
}

// Destructure the title and author from the book object
const {title ,author } = bookObj

console.log(`title : ${title} and author : ${author}`);



// -------------------------------------  Activity 3: Spread and Rest Operators --------------------------------------------

/* Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements
    and log the new array to the console. */

const arr = ['Akshay' , 'Enginner' , '25' , 'Mumbai']

// Create a new array with the spread operator and additional elements
const newArray = [...arr , 'NaviMumbai' , 'Capgemini']

console.log(newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum (...number) {
    return number.reduce( (total , num) => {
        return  total + num
    }, 0)
}

const result = sum(1,2,3,4,5,6,7,8,9,10)

console.log(result);


// -------------------------------------  Activity 4: Default Parameters ------------------------------------------

/* Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. 
Log the result of calling this function with and without the second parameter. */

function fun(num1 , num2=1) {
    return num1 * num2
}

console.log(fun( 80,90));
console.log(fun(80));
 

// ------------------------------------- Activity 5: Enhanced Object Literals -----------------------------------------

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. 

// Define a Symbol for the password property
const passwordSymbol = Symbol('password');      // without this declaration we cant use [passwordSymbol] directly. it will give error.
const greetingSymbol = Symbol('greeting');  // Define the Symbol for the greeting method

const user = {
    name : 'Akshay',
    loc : 'Mumbai',
    email : 'user@google.com',
    isLoggedIn : false ,
    [passwordSymbol] : 'abc@2024',

    details () {
        return (`calling details method :- my name is ${this.name} and my email : ${this.email} and password is : ${this[passwordSymbol]}`)
    },
    [greetingSymbol]() {
        return (`calling greetingSymbol method :- Hello ${this.name}, Good Morning..! calling details function : ${this.details()}`);
    },
    password() {
        return (`calling password method :- my password is : ${this[passwordSymbol]}`)
    }
}

console.log(user);
console.log(user.details());
console.log(user[greetingSymbol]());
console.log(user.password());




// Task 9: Create an object with computed property names based on variables and log the object to the console.

const key1 = 'firstName';
const key2 = 'lastName';
const key3 = 'age';

const userDetail = {
    [key1]: 'John',
    [key2]: 'Doe',
    [key3]: 30
};

console.log('Object with computed property names based on variables is : ' , userDetail);




/* --------------------------------- Notes --------------------
--------------------------------- Rest Operator ----------------------------------
Purpose: Used in function parameters to collect multiple arguments into a single array. It allows a function to accept an arbitrary 
number of arguments.
function exampleFunction(...rest) {
  // 'rest' is an array containing all arguments passed to the function
  console.log(rest);
}
exampleFunction(1, 2, 3, 4); // Output: [1, 2, 3, 4]

Context: Used in function definitions to gather all remaining arguments into an array. It can only be used as the last parameter 
in the function definition.


------------------------------------------------ Spread Operator ------------------------------------
Purpose: Used to expand an array or object into individual elements or properties. It allows you to spread the contents of an array 
or object into a new array or object, or pass elements as arguments to a function.

const array = [1, 2, 3];
const newArray = [...array, 4, 5]; // Expands 'array' and adds new elements
console.log(newArray); // Output: [1, 2, 3, 4, 5]

const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 }; // Expands 'obj' and adds new properties
console.log(newObj); // Output: { a: 1, b: 2, c: 3 }
------------------------------------------------------------------------------------------------------
function exampleFunction(x, y, z) {
  console.log(x, y, z);
}
const args = [1, 2, 3];
exampleFunction(...args); // Output: 1 2 3

Context: Used in array and object literals to create new arrays or objects that include elements or properties from existing 
arrays or objects. It can also be used to pass array elements as arguments to functions.

--- Summary -----------
Rest Operator: Collects multiple values into an array. Used in function parameters.
Spread Operator: Expands an array or object into individual elements or properties. Used in array and object literals and function calls.


----------------------- Enhanced object literals -------------------------------
Enhanced object literals are a feature in JavaScript that simplifies the syntax for defining objects. They provide shorthand syntax and 
additional capabilities for defining properties and methods within an object.

Enhanced Object Literals
Enhanced object literals allow you to:

Use Shorthand Property Names:
When the property name is the same as the variable name, you can use shorthand syntax.

Use Shorthand Method Definitions:
Define methods without using the function keyword.

Use Computed Property Names:
Use expressions in square brackets for dynamic property names.

------------------------------------------

----------------------------------- Computed property -----------------
Computed property names in JavaScript allow you to use expressions to dynamically set the names of properties in an object. 
This feature provides a way to use variables or expressions as keys for object properties, which can be useful in various scenarios.
The syntax for computed property names uses square brackets [] around an expression within an object literal:
const obj = {
    [expression]: value
};


Examples------
1 - Using Variables as Property Names --

const key = 'dynamicKey';
const value = 'dynamicValue';

const obj = {
    [key]: value
};

console.log(obj); // Output: { dynamicKey: 'dynamicValue' }

2 - Using Expressions as Property Names--

const obj = {
    ['key' + 'Name']: 'value'
};

console.log(obj); // Output: { keyName: 'value' }

3 - Combining Properties with Variables --

const prefix = 'user';
const id = 1;

const user = {
    [`${prefix}Id`]: id,        // Computed property name
    [`${prefix}Name`]: 'Alice'
};

console.log(user); // Output: { userId: 1, userName: 'Alice' }

4 - Using Computed Property Names with Functions --

const methodName = 'sayHello';

const obj = {
    [methodName]() {
        return 'Hello, world!';
    }
};

console.log(obj.sayHello()); // Output: Hello, world!

Summary--------
Computed property names in JavaScript provide a powerful feature to dynamically set object keys based on variables or expressions, 
enhancing the flexibility and expressiveness of object literals.


*/