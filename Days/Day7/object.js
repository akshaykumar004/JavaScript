// Object can be define using two ways - Constructor and Literals

// Constructor  - Singleton

// ------------------------------ Literals ---------------------------

let mySym = Symbol ("Akshay") 

const myObj = {
    name : "Akshay" ,     // we can define variable within quotes also.
    "full name" : "Akshay Singh" ,  // now we can't access this value using myObj.full name that's why this [] came into picture.
    age : 25 ,
    loc : "Mumbai" ,
    email : "akshay@google.com" ,
    isLoggedIn : false ,
    //mySym : "Akshay" ,  // this is not the correct way to use Symbol data type
    [mySym] : "Akshay"      // this is the correct way to use Symbol data type.

}

// console.log(myObj.name)     // this is way we can fetch the value of Obj but this is not proper way.
// console.log(myObj["full name"])
// console.log(myObj.email)    
// console.log( myObj['email']) // this is correct way to fetch the data of Obj. here email is in '' bcz obj takes var name in string format.

// how to use symbol data type in obj. defined one var above using mySym name. and then define that variable in [] in obj.

//console.log(myObj[mySym])

// we can change the value Obj also.

// myObj.email = "akshay@chatgpt.com"
// console.log(myObj.email)

// // but we can freee also then it will not give error but the value of Obj will not change

// Object.freeze(myObj)
// myObj.email = "akshay@facebook.com"
// console.log(myObj.email)
// console.log(myObj)


// functions in Object ---------------------------------------

myObj.greeting = function () {
    console.log("Hello ! How are you..?")
}
console.log(myObj.greeting())   // here if you see no return type is mentioned that's why during printing o/p it is showing undefined

myObj.greet2 = function() {
    console.log(`How are you ${this.name} ...? `)
}
myObj.greet2(); // here I'm not printing anything just calling the fun that's why it is not showing return type as undefined