//----------------------- How program executes.. using scope ----------------

// let balance = 5000
// if(balance > 4440) console.log("Yes"), console.log("No");   // like this also we can execute code using implicit scope.. but this is not correct.

// let score = 100
// if (score == 100) {
//     let century = "100"     // this var declaration can use only in this if{} scope. outside of this scope it will give error.
//     console.log(`Score is ${century} so you made a century..`); 

// }

//console.log(`Score is ${century} so you made a century..`); // here giving error is century is not defined bcz it declare within if scope.


//-------------------------- AND(&&) and OR ||

let userLoggedIn = true
let loggedInFrom = "Email"
let loginFrom = "Facebook"

// if (userLoggedIn == true && loggedInFrom == "Email") {
//     console.log("you can login");
// }

// if (userLoggedIn == false || loggedInFrom == "Email") {
//     console.log("you can login");
// }

// if (userLoggedIn == true && loggedInFrom == "Email" && loginFrom == "Facebook") {
//     console.log("you can login");
// }

if (userLoggedIn == true && loggedInFrom == "Email" || loginFrom == "facebook") { // here facebook 'F' is small still it is running bcz of OR cond 
    console.log("you can login");
}

//--------------------------- Switch Case -------------------------------------

const month = 3

switch(month) {
    case 1: 
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;                  // here if break will not be used then after satisfying the condition it will execute all cases.
    case 4:
        console.log("April")
        break;
    default :
        console.log("defualt")
        break;
}


//----------------------------- truthy and falsy ------------------------------------------

/* ----- falsy value --------
    false , 0 , -0 , BigInt 0n, null , "" , udefined , NaN

truthy value -------

'false' , '0' , ' ' , {} , [] , function () {} , --- here false & 0 are in string that's why it is true. and ' ' have space in string. */

//const email = "user@gmail.com "
//const email = ""
//const email = " "
//const email = []
const email = {}    // here using same var multiple times to check all condition.

if (email) {       // here not comparing any value or conditional check... still it is checking value.. execute var one by one and see result
    console.log("Got Input..")
}
else {
    console.log("No Input..")
}

if (email.length == 0) {
    console.log("Array is empty")
}
if (Object.keys(email).length === 0) {
    console.log("Object is empty")
}

//----------------------- Nullish Coalescing Operator ?? : null undefined -------------

// this ?? operator used to avoid the null or undefined value during calling any fun or any other thing..

let val;
val = 5 ?? 10   // taking first value
val = null ?? 20    // taking 2nd value bcz first is null..
val = undefined ?? 30   // taking 2nd value bcz first is undefined..
val = null ?? 40 ?? 50  // taking 2nd value bcz first is null and will not take 3rd one bcz 2nd is already present

console.log(val)


//--------------------- Terniary Operator ------------------------

// syntax ---------- condition ? true : false

const teaPrice = 100

teaPrice > 100 ? console.log("tea Price is out of budget") : console.log("tea Price is under budget")