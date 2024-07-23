//--------------------------------- 23/07/2024 11.48 PM --------------------------------

/* ------------------------------- Day 4: Loops -----------------------------------------------

Tasks/Activities:--------

Activity 1: For Loop
⚫ Task 1: Write a program to print numbers from 1 to 10 using a for loop.
⚫ Task 2: Write a program to print the multiplication table of 5 using a for loop.

Activity 2: While Loop
⚫ Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop. 
⚫ Task 4: Write a program to print numbers from 10 to 1 using a while loop.

Activity 3: Do...While Loop
⚫ Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
⚫ Task 6: Write a program to calculate the factorial of a number using a do...while loop.

Activity 4: Nested Loops
⚫ Task 7: Write a program to print a pattern using nested for loops:
    * 
    * *
    * * *
    * * * *
    * * * * *
Activity 5: Loop Control Statements
⚫ Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
⚫ Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement. 

*/

//--------------------------------------- Activity 1: For Loop --------------------------------------------

// Task 1: Print numbers from 1 to 10 using a for loop.

for (let num = 1; num <= 10; num++) {
    //console.log(num);
    
}

// Task 2: Print the multiplication table of 5 using a for loop.

let table = 5
for (let number=1 ; number <= 10; number++){
    //console.log(table + " * " + number + " = " + table * number  );
}

//--------------------------------------- Activity 2: While Loop --------------------------------------------

// Task 3: Calculate the sum of numbers from 1 to 10 using a while loop

let n = 1
let sum = 0

while (n <= 10) {
    sum = sum + n
    n++;
}
console.log("The sum of numbers from 1 to 10 is:" , sum);

// Task 4: Print numbers from 10 to 1 using a while loop.

let i = 10
while(i) {
    //console.log(i);
    i--
}

//--------------------------------------- Do...While Loop --------------------------------------------

// Task 5: Print numbers from 1 to 5 using a do...while loop.

let num1 = 1
do {
   // console.log(num1);
    num1++;
} while (num1 <= 5)


// Task 6: Calculate the factorial of a number using a do...while loop.

let j = 6
let demoNum = j
factorial = 1

do {
    factorial = j * factorial
    j--
} while (j >= 1)

console.log(`factorial of ${demoNum} is :`, factorial);

//--------------------------------------- Activity 4: Nested Loops --------------------------------------------

// Task 7: Print a * Left Triangle Pattern till 5 using nested for loops:

let pattern = 5;
//let string = "";   Using this initialization it will print in 1,3,5,7,9 format bcz it ---> see below explanation

/* prints a pattern of stars with increasing numbers of stars per line, but it doesn’t reset the string variable between lines. 
As a result, each line accumulates the stars from previous lines, leading to a cumulative pattern like *, * * *, * * * * *, etc. 
To print the pattern in the format of 1, 2, 3, 4, 5 stars on each line, you need to reset the string variable to an empty string at the 
beginning of each outer loop iteration. This ensures that each line starts fresh.
*/

for (let i = 1; i <= pattern; i++) {
    let string = ""; // Reset the string for each row
    for (let j = 0; j < i; j++) {
        string += "* "; // Concatenate a single star with a space
    }
    console.log(string); 
}


//--------------------------------------- Activity 5: Loop Control Statements --------------------------------------------

// Task 8: Print numbers from 1 to 10, but skip the number 5 using the continue statement.

let num = 10

for (let i = 1 ; i <= num ; i++) {
    
    if(i == 5) continue     // Skip the number 5
    
    //console.log(i);
    
}

// Task 9: Print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement. 

let numb = 10

for (let i = 1 ; i <= num ; i++) {
    
    if(i == 7) break;     // Stop the loop when the number is 7
    
    console.log(i);
    
}