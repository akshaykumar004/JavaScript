/* --------------------------------- Day 2: Operators - 20 July 2024 01:46 AM ----------------------------------------

Tasks/Activities:-

Activity 1: Arithmetic Operations
⚫ Task 1: Write a program to add two numbers and log the result to the console.
⚫ Task 2: Write a program to subtract two numbers and log the result to the console.
⚫ Task 3: Write a program to multiply two numbers and log the result to the console.
⚫ Task 4: Write a program to divide two numbers and log the result to the console.
⚫ Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

Activity 2: Assignment Operators
⚫ Task 6: Use the += operator to add a number to a variable and log the result to the console.
⚫ Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

Activity 3: Comparison Operators
⚫ Task 8: Write a program to compare two numbers using > and < and log the result to the console.
⚫ Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
⚫ Task 10: Write a program to compare two numbers using == and === and log the result to the console.

Activity 4: Logical Operators
⚫ Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console. 
⚫ Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
⚫ Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

Activity 5: Ternary Operator
⚫ Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console. 

*/

//---------------------------------------------- Activity 1: Arithmetic Operations --------------------------------------------------

//--- Task - 1 ---- Addition

let num1 = 10
let num2 = 20
let add = num1 + num2
console.log("Addition + :", add)

//--- Task - 2 ----- Subtraction

let num3 = 10
let num4 = 20
let sub = num3 - num4
console.log("Subtraction - :", sub)

//--- Task - 3 ---- Multiplication

let num5 = 10
let num6 = 20
let mul = num5 * num6
console.log("Multiplication X :", mul)

//--- Task - 4 ----- Divison

let num7 = 10
let num8 = 20
let div = num7 / num8
console.log("Divison / :", div)

//--- Task - 5 ---- Remainder

let num9 = 10
let num10 = 15
let remain = num10 % num9
console.log("Remainder % :", remain)


//-------------------------------------------- Activity 2: Assignment Operators --------------------------------------------------

//--- Task - 6 ---- Addition using += Operator

let number = 899
 number += 999

console.log("Using += :", number)

//--- Task - 7 ---- Subtraction using -= Operator

let num = 99009
 num -= 99090

console.log("Using -= :", num)


//-------------------------------------------- Activity 3: Comparison Operators --------------------------------------------

//--- Task - 8 ---- Compare two numbers using > and < Operator

let no1 = 90909
let no2 = 80900

result1 = no1 > no2
console.log("Using > :", result1)

result2 = no1 < no2
console.log("Using < :", result2)

//--- Task - 9 ---- Compare two numbers using >= and <= Operator

let no3 = 90.9009
let no4 = 809.800

result1 = no3 >= no4
console.log("Using >= :", result1)

result2 = no3 <= no4
console.log("Using <= :", result2)

//--- Task - 10 ---- Compare two numbers using == and === Operator

let no5 = 9090.0989
let no6 = '9090.0989'

result3 = no5 == no6
console.log("Using == :", result3)

result4 = no5 === no6
console.log("Using === :", result4)

//-------------------------------------------- Activity 4: Logical Operators ------------------------------------------------

//--- Task - 11 ---- Use && operator to combine two conditions  

let no7 = 9070.0989
let no8 = 9080.98009
let no9 = 9890.0909

result5 = no7 > no8 && no7 < no9 
console.log("Using && :", result5)

//--- Task - 12 ---- Use || operator to combine two conditions

result6 = no7 > no8 || no7 < no8 || no7 == no9
console.log("Using || :", result6)

//--- Task - 13 ---- Use ! operator to negate a condition

result7 = !(no8 == no9)
console.log("Using ! Operator:", result7)

//-------------------------------------------- Activity 5: Ternary Operator ------------------------------------------------

//--- Task - 14 ---- Use ternary operator to check if a number is positive or negative

let number1 = -9070.09890

finalresult = number1 >= 0 ? "Positive" : "Negative"

console.log("Using ? : Operator:", finalresult);