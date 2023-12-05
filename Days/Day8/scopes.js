//--------------------------- Day - 8 , 5 Dec 2023 ---------------------------------------

let num1 = 10
const num2 = 20
var num3 = 40

if (true) {
    let num1 = 100
    const num2 = 200
    var num3 = 300

// console.log(num1);  // this is printing inside value of if statement.   - local scope
// console.log(num2);  // this is printing inside value of if statement    - local scope
// console.log(num3);  
}


// console.log(num1);  // this is printing value of outside of if statement.   - global scope
// console.log(num2);  // this is printing value of outside of if statement    - global scope
// console.log(num3);  // this is printing inside value of if statement that's why we don't use var keyword to define variable. - local scope
// since num3 is defined by var keyword that's why it is taking 300(latest value) instead of 40.

/* global scope means we can use that everywhere but in local scope we can use only inside any function or if-else or any loop condition.

*/

function first() {
    const userNAme = "Akshay"

    function second() {
        const password = "123Abc"
      //  console.log(userNAme)   // here we're checking this scope can access parent scope or not. and it can access. 
    }

    //console.log(password)     // this is out of scope hence giving error like passsword not defined.
    second()    // here second fun will exeute bcz it is child scope can call parent fun(first)
}

first()      // this will print second fun value bcz we're just calling this fun not printing

//-------------- 2nd example -----------------------------

if (true) {
    const user = "Akshay"

    if (user == "Akshay") {
        const surname = " Singh"
        console.log(user + surname)
    }
    
    //console.log(surname)    // this is out of scope of 2nd if condition so it will not execute.
}

//console.log(user)   // this is out of scope of 1st if condition so it will not execute.

// ------------------------- mini hoisting -------------------------------------------------------

console.log(addOne(5))  // here we're executing before defining function but it is executing fine. this is called hoisting.
function addOne(value) {
    return value + 1
}

//console.log(addTwo(6) )   // giving error Cannot access 'addTwo' before initialization bcz we're calling it before initialization
const addTwo = function(value) {     // like this also we can define fun using a variable. but we can't access before initialization (line 63) 
    return value + 2
}
//console.log(addTwo(6) )     // this will execute fine.

