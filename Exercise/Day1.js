/*
--------------------------------------- Day 1: Variables and Data Types ----------------------------
Tasks/Activities:-

Activity 1: Variable Declaration
Task 1: Declare a variable using var, assign it a number, and log the value to the console.
Task 2: Declare a variable using let, assign it a string, and log the value to the console. */

// Task - 1 
var num = 2024
console.log(num)

//Task - 2
let str = 'akshay'
console.log(str)

/* Activity 2: Constant Declaration
Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console. */

// Task - 3           
const bool = true
console.log(bool)

/* Activity 3: Data Types
Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator. */

// task - 4

var number = 2024
let naam = 'akshay'
const hello = true
obj = {
    me : 'akshay',
    age : 24
}
array = [2024,'akshay',true ,]

console.log(number , typeof number)
console.log(naam , typeof naam)
console.log(hello , typeof hello)
console.log(obj , typeof obj)
console.log(array , typeof array)


/* Activity 4: Reassigning Variables
Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console. */

// Task - 5

let value = 12345
value = 54321
console.log(value)  //------ here taking latest value only not initial value bcz using let keyword we can reassign value but not redeclare.
console.log(value)  // thats why we're getting same output two times.

/* Activity 5: Understanding const
Task 6: Try reassigning a variable declared with const and observe the error. */

// Task - 6

const company = 'capgemini'
company = 'robot'           // here getting type error that means we can not declare new value using same var name for const keyword.

console.log(company)


