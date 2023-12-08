//---------------------------- Day-10, 8 Dec 2023 -------------------------------

let val1 = 10       
let val2 = 20       
function addNum(num1 , num2) {
    let total = num1 + num2
    return total
}

const result1 = addNum(val1 , val2)
console.log(result1)
const result2 = addNum(10 , 5)
console.log(result2)

function one() {
    console.log("One")
    two()               // here we're calling fun two also and it will execute & will be in stack
}
function two() {
    console.log("Two")
    three()             // here we're calling fun three also to execute. and it will execute & will be in stack
}
function three() {
    console.log("Three")
}
one()       // here I'm calling only fun one() and it giving o/p remaining for both fun also after calling them.
two()
three()


/*  How JavaScript codes executes -------------

phases - Global Execution Context
         Functional Execution Context
         Eval Execution Context
         
1. First JS creates Global excution context (1st phase)
2. Next it creates memory creation phase (2nd phase)
    Memory phase - In this phase, the variables are set to undefined until the "Execution phase(next phase)"
    and the functions are set to their definitions.
    examples -
    val1 = undefined
    val2 = undefined
    addNum = Defination
    result1 = undefined
    result2 = undefined

3. Next it creates the Execution Phase (3rd phase)
    Execution phase - In this phase variables are initialsed to given values and when the function are called,
    it creates a memory phase and execution phase for the function just like the main one.
  
    val1 = 10
    val2 = 20
    result1 = 30    // here it will call function addNum so for this it will again create memory and execution phase
    result2 = 15
    addNum = here it will create a new memory phase and execution phase for the function.
    Memory phase -  
                val1 = undefined    // here it is calling fun addNum (num1=val1 , num2=Val2) that's why it is undefined
                val2 = undefined
                total = undefined
    Execution phase -
                num1 = 10
                num2 = 20
                total = 30

For live demo:
browser > inspect > Sources
create a snippet with few functions like above fun one() and visually experience the call stack.

*/

/* 

Creation of the Global Execution Context:
When a JavaScript program starts running, it creates the global execution context. 
This context consists of two phases: the Memory phase and the Execution phase.

➡Memory Phase:
During the creation phase, the JavaScript engine sets up the global object (which is the window object in a browser environment), 
the 'this' keyword, and the outer environment reference.
It also scans through the code and sets up memory space for variables and functions through a process called "hoisting." 
Variables are set to undefined, and functions are stored in their entirety.

➡Execution Phase:
After the memory creation phase, the execution phase begins. This is where the actual code is executed line by line.

➡Function Execution:
When a function is called, a new execution context is created for that function. This includes its own memory space for variables and parameters.
The function goes through its own creation and execution phases.
After the function finishes executing, its execution context is popped off the call stack.

➡Call Stack:
The call stack is a data structure that keeps track of the execution context of the program. It follows the Last In, First Out (LIFO) principle.
As functions are called, their execution contexts are added to the top of the call stack.
When a function completes its execution, its context is removed from the top of the call stack.

Example - when we'll call fun one() then o/p will be one() - two() - three() bcz it will call all function as written in above code.
        but while deleting the stack it will delete in this order(LIFO) -  three() - two() - one()

➡Global Execution Completion:
Once the global execution context completes, the program finishes its execution.

Note:  the returned value being passed to the global environment, it's more accurate to say that the returned value is passed to the calling context. 
If a function is called within another function, the returned value is typically used in the context of the calling function.

*/