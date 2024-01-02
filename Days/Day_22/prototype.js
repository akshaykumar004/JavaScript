//========================== Day-22 2nd Jan 2024 ==========================

// ====================== Prototype =====================================

let str = "Akshay      "
str = "  chaiaurcode  "

let len = " hi akshay ! how are you ?"
let greet = "Hello Everyone! welcome to my code"

// console.log(` string is : ${str} and length is = ${str.length}`);            // it will include spaces count
// console.log(` string is : ${str} and trim length is = ${str.trim().length}`);    // it will remove spaces count

/* we can't use trim method bcz if there will be more str then we can't write multiple times trim().
it will be huge load. so to avoid this we'll use trueLength method(it will apply to all). 
diff b/w method and property is - method comes with() and property not.  exp = trim() = method , length = property
After creating truelength() method we can easily trim length of any string, just to call truelength() method using '.'
to understand this code goto below and see example how we're creating methods under prototype for String, Array, Function, Object..
*/

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`length is : ${this.length}`);
    console.log(`After trim, the length of string is : ${this.trim().length}`);
}
str.trueLength()
len.trueLength()
greet.trueLength()



const marvelHero = ["thar" , "spiderman"]

const heroPower = {
    thar: 'hammer',
    spiderman: 'sling',

    myPower: function (){
        console.log(`${marvelHero[0]} is having power of ${this.thar}..`);
    }
    
}
heroPower.myPower()     

function prototypeMethod(mul) {     // this function is for only to check object prototype method is accesible to fun object or not
    return mul * 5
}

console.log(prototypeMethod(5))
/*
In previous example/object.js - we saw function,array and string prototype all are refer to Object prototype and Object prototype - null.. 
and prototype having diff-2 methods for everyone(array,string,function).. so if we want to create a new method inside Object or Array or Function 
or String according to our usage then can we create ? Yes ! we can create our manual method directly and also can use.
if we create the method in Object Prototype then can we access this in remaining three(fun,array&string)? Yes. bcz all three refer to Object only.
during creating of method we give function() bcz every method having fun in prototype(at: ƒ at()) so that we can use directly using '.'

see below example..---

*/

Object.prototype.myMethod = function() {
    console.log('this method is present in all object(fun(),array and string)');
}

Array.prototype.arrayMethod = function(){
    console.log("this method is present in Array prototype object only.");
}
String.prototype.stringMethod = function() {
    console.log("this method is present in String prototype object only.");
}
Function.prototype.functionMethod = function() {
    console.log("this method is present in Function prototype object only.");
}
heroPower.myMethod()        // Obj is using newly created method inside prototype
marvelHero.myMethod()       // it is accesible to array also
str.myMethod()              // it is accesible to string also
prototypeMethod.myMethod()  // it is accesible to function also


// above created Object prototype method is accessible to all object. but arrayObject is accessible to only Array. see below exp.

marvelHero.arrayMethod()
// heroPower.arrayMethod()
// str.arrayMethod()
// prototypeMethod.arrayMethod()        

// ----------------------Same for string also. it is accessible to string only.----------------------------------

str.stringMethod()
// heroPower.stringMethod()
// marvelHero.stringMethod()
// prototypeMethod.stringMethod()


//------------------------- same for function also --------------------------

prototypeMethod.functionMethod()
// stringMethod.functionMethod()
// marvelHero.functionMethod()
// heroPower.functionMethod()


//====================================== Inheritance =============================================
    // below code are old type of syntax.. now days we're using class and constructor....

const user = {
    name : "Akshay",
    email : "akshay@javascript.com"
}

const teacher = {
    makeVideo : true
}
const teachingSupprot = {
    isAvailable : false
}
const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : false,
    __proto__ : teachingSupprot             // using double underscore proto we can inherit properties of any object
}

teacher.__proto__ = user

// modern syntax 

Object.setPrototypeOf(teachingSupprot , teacher)