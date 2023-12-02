//---------------------- Function ---- Day-7 2 Dec 2023 ----------------------------

// console.log(Date())

function firstfunction() {
    console.log("A")
    console.log("K")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("Y")
}

//firstfunction()

// function addNumber(num1 , num2) {
//    console.log(num1 + num2)
// }
// //addNumber(9 , null)
// const result = addNumber(9 , null) // here it is giving o/p as 9 but not storing in result bcz in below line result have nothing.
// console.log("Result : " , result)   // bcz we're just printing the result not returing .

function subNum(num1 , num2) {
    // let output = num1 - num2
    // return output
    return num1 - num2  // direct retur statement will save above two lines of declaring var.
//     //console.log(output) // this line is showing unreachable code bcz it is written after return statement. so it will not print.
// }
// const result = subNum(65 , 80)
// console.log("Output : " , result);

// function greeting(userName) {
//     return (`Hello ${userName} Good Morning..!`)
 }

// return statement only give the output but will not print. for showing the o/p we have to print using console.log(). eg-below.

// greeting("Akshay")  // this will not print anything but it have returned the value.

// console.log(greeting("Akshay"))
// console.log(greeting(""))       // here it is printing the only string interpolation bcz no username is given.
// console.log(greeting())     // here since nothing is given hence it is printing as undefined

// to avoid the undefined value we will use condition.

function greeting(userName) {
//function greeting(userName = "Akshay") { // for default username to avoid undefined username.
    if (userName === undefined) {
        console.log("Please enter your name")
        return
    }

    return (`Hello ${userName} Good Morning..!`)
}

// return statement only give the output but will not print. for showing the o/p we have to print using console.log(). eg-below.
// greeting()
//console.log(greeting())
//console.log(greeting("Samm"))   // it will override default username.

// or if you want to give any default value for username to avoid this situation so you can define default username in function initiation.

// return statement only give the output but will not print. for showing the o/p we have to print using console.log(). eg-above.


//----------------------- Function with Object and Array ----------------------------------------------

/* suppose you're adding things in shopping carts but you don't know how many iteam user will add so in this case how to store all the items
    will see in below function. */

//function addShoppingCart (itemsNum) {
//function addShoppingCart (...itemsNum) {  // this is rest method in function..this will add infinite items in user cart. this is also called spread method.
//    return itemsNum
//}

// function addShoppingCart (iteamOne , itemTwo , ...itemsNum) {
//     return itemsNum
// }

//console.log(addShoppingCart(2))     
//console.log(addShoppingCart(2 , 3 , 4)) // here only one time item value will pick this function. so avoid this issue we can use rest method. see in above 2nd fun.

//console.log(addShoppingCart(2 , 3 , 4 , 5 , 6, 7))  // here first 2 , 3 will assign in iteamOne & iteamTwo and rest all iteam in iteamNum.


//-------------------- Object in Function ---------------------------------------

const userData = {
    userName : "Akshay" ,
    email : "user@google.com"
}

function useObject(handleObj) {
    return console.log(`Username is ${handleObj.userName} and email address is ${handleObj.email}`)
}

console.log(useObject(userData))

//-------------------- Array in Function ---------------------------------------

const array = ["Akshay" , "Capgemini" , "Mumbai"]

function funArray (getValue) {
    return getValue[1]
}

console.log(funArray(array))
console.log(funArray([200 , 400 , 500 , 600]))  // we can define direct array value here also. no need to define seperatly.