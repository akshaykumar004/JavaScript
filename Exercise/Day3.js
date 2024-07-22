/* ------------------ 22 - 07 - 2024 11 PM -------------- Day 3: Control Structures ---------------------------------------\

Tasks/Activities:-

Activity 1: If-Else Statements
⚫ Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
⚫ Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

Activity 2: Nested If-Else Statements
⚫ Task 3: Write a program to find the largest of three numbers using nested if-else statements.

Activity 3: Switch Case
⚫ Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 
⚫ Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

Activity 4: Conditional (Ternary) Operator
Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

Activity 5: Combining Conditions
⚫ Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) 
    and log the result to the console.

*/

//------------------------------------------- Activity 1: If-Else Statements -----------------------------------

// Task 1: Check if a number is positive, negative, or zero

let number = 0.09

if (isNaN(number)){
    console.log(("Invalid Number..!"));
}
else if (number > 0 ) {
    console.log("Number is Positive..!");
} 
else if (number == 0) {
    console.log("Number is Zero..!");
}
else {
    console.log("Number is Negative..!");
 }

 
// Task 2: Check if a person is eligible to vote (age >= 18)

let age = 17

if (age < 18 ) {
    console.log("Person age is below 18 hence not elegible to vote.");
}
else {
    console.log("Person age is above 18 hence elegible to vote.");
}


//------------------------------------------- Activity 2: Nested If-Else Statements -----------------------------------

// Task 3: Find the largest of three numbers using nested if-else statements.

let num1 = 101.909
let num2 = 90.908
let num3 = 100.101

if (num1 >= num2 ) {
    if (num1 >= num3) {
        console.log("Num1 is largest..!");
    }
    else {
        console.log("Num3 is largest..!");
    }
    
}

else { 
    if (num2 >= num3) {
        console.log("Num2 is largest..!");
    }
    
    else {
        console.log("Num3 is largest..!");
    }
}
    

//------------------------------------------ Activity 3: Switch Case -----------------------------------

// Task 4: Use switch case to determine the day of the week based on a number (1-7)

let week = 7

switch (week) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Week Day..!");        
        break;
}

// Task 5: Use switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score

let score = 66

switch (true) {
    case (score > 80):
        console.log("Grade A");
        break;
    case (score > 70):
        console.log("Grade B");
        break;
    case (score > 60):
        console.log("Grade C");
        break;
    case (score > 50):
        console.log("Grade D");
        break;
    case (score < 50):
        console.log("Grade F");
        break;
    default:
        console.log("Invalide Score..!");
        break;
}

//------------------------------------------ Activity 4: Conditional (Ternary) Operator -----------------------------------

// Task 6: Use ternary operator to check if a number is even or odd

let num = 83

let result = num % 2 == 0 ? "Even" : "Not Even"

console.log(result);

//------------------------------------------ Activity 5: Combining Conditions -----------------------------------

// Task 7: Check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) 

/* To check if a year is a leap year using multiple conditions in JavaScript, you need to evaluate the following rules:
    1 - A year is a leap year if it is divisible by 4.
    2 - However, if the year is also divisible by 100, it is not a leap year unless it is also divisible by 400. */

let year = 2024

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`${year} is a leap year`);
        }
        else {
            console.log(`${year} is not a leap year`);
        }
    }
    else {          // if not divisible by 100 then its leap year..
        console.log(`${year} is a leap year`);
    }
}
else {              // if not divisible by 4 then its not divisible..
    console.log(`${year} is not a leap year`);
}

/* Here's a detailed explanation of code:

Divisibility by 4: Checks if the year is divisible by 4. If not, the year is not a leap year.
Divisibility by 100: If the year is divisible by 4, it then checks if it is divisible by 100. If so, it needs further checking.
Divisibility by 400: If the year is divisible by 100, it then checks if it is also divisible by 400 to confirm if it is a leap year.

First Condition: if (year % 4 === 0) checks if the year is divisible by 4. If it is not, the year is not a leap year.

Second Condition: if (year % 100 === 0) checks if the year is divisible by 100. If it is, the year is not a leap year unless it meets the 
3rd condition.

Third Condition: if (year % 400 === 0) checks if the year is divisible by 400. If it is, the year is a leap year. If not, it is not a leap year.

Else Cases:----

If the year is divisible by 4 but not 100, it is a leap year.
If the year is not divisible by 4, it is not a leap year.

*/