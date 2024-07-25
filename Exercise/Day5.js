/* ------------------------------------ Day 5: Functions -------------------------------------------
   --------------------------------- 26/07/2024 12.32 AM --------------------------------

Tasks/Activities:-

Activity 1: Function Declaration
⚫ Task 1: Write a function to check if a number is even or odd and log the result to the console.
⚫ Task 2: Write a function to calculate the square of a number and return the result.

Activity 2: Function Expression
⚫ Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
⚫ Task 4: Write a function expression to concatenate two strings and return the result.

Activity 3: Arrow Functions
⚫ Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
⚫ Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

Activity 4: Function Parameters and Default Values
⚫ Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
⚫ Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

Activity 5: Higher-Order Functions
⚫ Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
⚫ Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, 
    and then applies the second function to the result.

*/

//----------------------------------------  Activity 1: Function Declaration -------------------------------

// Task 1: Write a function to check if a number is even or odd

function checkNumber(number) {
    if(number % 2 == 0) {
        console.log(`${number} is a Even Number.`);
    }
    else {
        console.log(`${number} is a Odd Number.`);
    }
}

checkNumber(27)
checkNumber(84)

// Task 2: Write a function to calculate the square of a number and return the result.

function square(number) {
    return number ** 2          // or number * number
}

console.log(square(88));


//----------------------------------------  Activity 2: Function Expression -------------------------------

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function maxNumber(num1 , num2) {
    if (num1 > num2 ) {
        return `Max number is Num1 : ${num1}`
    }
    else {
        return `Max number is Num2 : ${num2}`
    }
}

console.log(maxNumber(99 , 999));

//Task 4: Write a function expression to concatenate two strings and return the result.

function string(str1,str2) {
    // str1 = "hello "
    // str2 = "akshay"
    return str1 + str2
}

console.log(string("hello " , "akshay"));



//----------------------------------------  Activity 3: Arrow Functions -------------------------------

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

// const sum = (num1 , num2) => {
//     return num1+num2
// }

// console.log(sum(78,58));

// ------------------------ OR ----------------

const sum = (num1 , num2) =>  num1+num2     // directly we can return without return keyword.

console.log(sum(78,58));


// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const str = (str,char) => {
   return str.includes(char)        // includes will check char in string it is present or not.
}
console.log(str("abcd",'a'));       // this contains char 'a' in string
console.log(str("abcd",'e'));       // this does not contains char 'e' in string



//----------------------------------- Activity 4: Function Parameters and Default Values -------------------------------

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function parameter(parm1 , parm2=85) {
    return parm1 * parm2
}

console.log(parameter(59,85));
console.log(parameter(59));         // this will take default value of parm2

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name,age=18) {
    return `hello ${name} , happy birthday! now you're ${age}.`
}

console.log(greet('aman'));
console.log(greet('aman',20));



//----------------------------------- Activity 5: Higher-Order Functions -------------------------------


// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function higherFun(fun,num){
    for(let i = 0; i < num; i++) {
        fun()
    }
}

function sayHello() {
    console.log("Hello Akshay, Good Morning !");
}

higherFun(sayHello,5);


/* Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, 
    and then applies the second function to the result. */

function higherFunction(fn1,fn2,value){

    return fn2(fn1(value));     // func1(value) -> func1 to value. func2(func1(value)) -> func2 to the result of func1(value).

}

const mul = (i) => {        // fn1
    return i * i
}

const double = (j) => {     // fn2
    return j * 2
}

const result = higherFunction(mul,double,5)
console.log(result);
