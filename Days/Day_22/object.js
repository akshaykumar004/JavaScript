//========================== Day-22 2nd Jan 2024 ==========================

// ====================== Prototype ------> Object=====================================

/* Prototype is a property which Points to an object . We can use this object into our object . 
Pototypal inheritance : if array method did not find in its prototype than it check the property in its parent and further grandParrent

Array ----------> Object ---------------> null
String ---------> Object -------------> null
Function--------> Object--------------> null
so we can say all array and string and function refers to object prototype. for ex - open browser console and see after returning array 
there is one prototyperefering to array - [[Prototype]]: Array(0)  - and after opening prototype: array there is one more prototype 
that is refering object -- [[Prototype]]: Object after that opening this it will refer to null that's why no prototype is there..

const array = ["arr1", "arr2" , "arr3"]
undefined           // didn't returned that's wy showing undefined.
array

[[Prototype]]: Array(0)
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
.
.......                 // deleted some method bcz it's too much. you can see in browser console...
.
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}

[[Prototype]]: Object       // you can see after expanding this there is no more prototype. so we can it is refering to null.

constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

*/

//================================= function -----> Object with new keyword ============================

function mulby5 (num) {
    return num * 10
}
mulby5.power = 2                // just to ensure that fun() is working same as object or not?
// console.log(mulby5(19))
// console.log(mulby5.power)       // so here you can see using . we're doing one operetaion so technically fun() also referes to Object.
// console.log(mulby5.prototype)   // it returning as empty {} but is having "this keyword" property..

function something(name,price) {
    this.name = name
    this.price = price
}

something.prototype.increment = function () {     // here prorotype is just like array prototype which having more methods(map,lenght etc)
    this.price++
    
}   

/* above in notes we saw o/p of array having one prototype and prototyoe also having some method(like map(),lenght(),etc) which we can use.
so like that here also we're using prototype and one manually created method increment using ".".It will work like same as array prototype
 same for printPrice..... just checking that function's prototype is also working same as array prototype.  */

something.prototype.printPrice = function () {
    console.log(`price of ${this.name} is ${this.price} Rs only.`);     // printPrice is just name of method.
}

const tea = new something('masala tea',50)     //without using new keyword it will not execute. it will throw - Cannot read properties of undefined
const chai = new something('kulhad chai',100)   // new will create a empty object and then linked to the prototype property of the constructor fun()
tea.printPrice()
tea.increment()     //here we're not using .prototype bcz we can fetch directly using '.' no need of use prototype. JS will take care of it.
tea.printPrice()    // in array prototype we write just array.map/lenght() like that here also we can use .method() directly.

chai.printPrice()
chai.increment()
chai.printPrice()


//-----Notes ================================ new keyword ==============================================

/*

Here's what happens behind the scenes when the new keyword is used:

 - A new object is created: The new keyword initiates the creation of a new JavaScript object.
 - A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
    this means that it has access to properties and methods defined on the constructor's prototype.

 - The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
    if no explicit return value is specified from the constructor, JS assumes this, the newly created object, to be the intended return value.

 - The new Obj is returned: After the constructor function has been called,if it doesn't return a non-primitive value(object, array, function etc.),
    the newly created object is returned.

*/