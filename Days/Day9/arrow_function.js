//------------------------ Day-9 06 Dec 2023 -----------------------------------------------------------

//------------------------ Arrow Function and THIS ----------------------------------------------------

const user = {
    userName : "Akshay" ,
    email : "abc@gmail.com" ,

    greeting : function() {
        // console.log(`Hi ${this.userName} , How are you..?`) 
        // console.log(this)   // here current context has greeting method so giving o/p accordingly.
    }
}
//user.greeting()
//user.userName = "Samm"  // here it will change userName to Samm...
// user.greeting()

//console.log(this) // here current context has nothing so giving o/p as empty

// const chai = function () {
//     const name = "Akshay"
//     console.log(this)   // here 'This' is giving some value..
//     console.log(this.name)  // here 'This' is not working like object.. giving o/p as undefined. so we can't use 'This' in function.
// }

// chai()

// const chai = () => {        // this is arrow function.......... just remove fuction keyword and type => after ()
//     let email = "abc@gmail.com"
//     console.log(this)   // here 'This' is giving empty object.
//     console.log(this.email)  // here 'This' is not working like object.. giving o/p as undefined. so we can't use 'This' in function.
// }
// chai()

// const multi = (num1 , num2) => {     // here we're using explicit return hence {} needed
//     return num1 * num2
// }
// console.log(multi(44 , 22))

// const multi = (num1 , num2) =>  num1 * num2     // like this also we can define (implicit return) for one line. no need to give return and {}

// console.log(multi(44 , 22))

// const multi = (num1 , num2) =>  (num1 * num2)    // like this also(inside parenthesis() we can define implicit return without giving return and {}.

// console.log(multi(44 , 22))

const multi = (num1 , num2) =>  {user:"Akshay"}   // here without using (paranthesis) it will not return anything.
console.log(multi(4 , 5))
const Num = (num1 , num2) =>  ({user:"Akshay"})   // here after using (parenthesis) it will return object.
console.log(Num(4 , 5))


