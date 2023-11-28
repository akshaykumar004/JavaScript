//---------------------------------- Day-3 , 24 Nov 2023 -----------------------------------------------------

"use strict";           // this will treat all JS code as newer standard version


/*---------------- data types -------------------------------------
two types of datatypes are in JS. 

1- Primitive 
2- Non-Primitive

Primitive data types - (Call by value)

1 - number => 2^53(max value)
2 - boolean => true/false
3 - string => "Akshay"
4 - null => it is a standalone value itself.
5 - undefined => it is undefined, different from null.
6 - symbol => to define uniqueness
7 - BigInt => used for big value.

Non - Primitive data types - (Call by reference)

1 - Arrays
2 - object - it is a datatype. null is a object datatype.
3 - Function

*/

let name = "Akshay"
let age = 24
let add = undefined
let mobNo = null

console.table([typeof "name", typeof age , typeof mobNo , typeof add]);

//--------------------- Symbol data types --------------------------------
const id = Symbol(123)
const id2 = Symbol(123)

console.log(typeof id , id == id2);  // here value of both id is same but since we are using Symbol hence they are not equal.

// //--------------- bigInt ------------------------------------
// const bigNumber = 1234567890n  // here at last using n is make it bigInt data types.
// console.log(typeof bigNumber);

//-------------------- Non-Primitive --------------------

// const array = ["Akshay" , "Kumar" , 24];
// console.log(array , typeof array)

// const obj = {
//     me : "Akshay" ,
//     age : 24
// }
// console.log(obj , typeof obj);

// const myfunction = function () {
//     console.log("Hello , World");
// }
// console.log(myfunction , typeof myfunction)


/* ---------------------- Notes ----------------------------------------------------------

JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean

On the other hand, statically typed languages require you to declare the variable's type explicitly, 
and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly 
while declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. 
Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

*/