//-------------------------- Day-4, 27 Nov 2023 ----------------------------------------

//------------- data type conversion -------------------------------------------


/* 

let age = 25
console.log(typeof age)

let number = "25"
console.log(typeof number)

let mix = "25Abc"
console.log(typeof mix)
let data = Number(mix)          // here "Number" is used to convert the value of mix into number data type.
console.log(typeof data)        // here type of data is showing number but when we print the value of data then it is showing NaN. 
console.log(data)
                       */ 

/* 
let score = null
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)          // here type of valueInNumber is showing number but when we print then it is showing 0. 

*/

/*

let nothing = undefined
console.log(typeof nothing)

let value = Number(nothing)
console.log(typeof value)
console.log(value)                  // here type of value is showing number but when we print the value of "value" then it is showing NaN.

*/

/*

let pass = true
console.log(typeof pass)

let bool = Number(pass)
console.log(typeof bool)
console.log(bool)                 // here type of bool is showing number but when we print the value of bool then it is showing 1.

*/

 let loggedIn = 1     // here value of loggedIn is 1 but after conversion it is showing true.

// let loggedIn = ""       // here value of loggedIn is blank but after conversion it is showing false.

// let loggedIn = "Akshay"     // here value of loggedIn is string but after conversion it is showing true.

let valueloogedIn = Boolean(loggedIn)
console.log(valueloogedIn)      


let number = 234

let stringNum = String(number)
console.log(stringNum)          // here output is showing as number but it is converted into string when we checked typeof this.
console.log(typeof stringNum) 

