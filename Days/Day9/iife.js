//------------------------------------ Immediately Invoked Function Expressions (IIFE) ---------------------------------------

// function js() {
//     console.log("Hello World !")
// }
// js()    // here like this we can call function and can execute. but if we want to execute immediately then we can do below changes.


(function js() {
    console.log("Hello World !")
} ) () ;    /* here without using ; below arrow function will not execute. but after giving ; it will execute. so ; is important here.
             bcz fun don't know where it should stop so for stopping this we have to give ; manually to stop this. 
so for executing two IIFE we have to give ; to seperate and execute them  */


/* here if you see we're using ()before function keyword and at last and after closing paranthesis -  () - this is calling fun js.

 this will execute function immediately. we can use this in Arrow Function also. */

( (name) => {                       // here name is working like parameter for function.
    console.log(`Hello ${name} !`)
} ) ("Akshay")                      // this is working like - js("Akshay") so without giving fun name we're giving directly value inside.

