//========================  Day-23 3rd Jan 2024 ==================================================->

//================================== Math.PI =================================================  -->

console.log(Math.PI)        // this is fixed value..

// there is one method - getOwnPropertyDescriptor() through which we can see properties of any key:value of object.

//console.log(Object.getOwnPropertyDescriptor(Math,'PI')) 
 Math.PI = 4
console.log(Math.PI)    // this will be original value 3.14... it will not override

/* ------------ Interview question - can we change the value of PI or can we override. ------ Ans is NO..... why ... see below

value: 3.141592653589793,
writable: false,            // this means we can't change or override value of PI
enumerable: false,          // can't loop
configurable: false         // can't configure

  */

//---------- then can we make our 

const chai = {
    name : 'Ginger_Chai',
    price : 100,
    location : 'Navi Mumbai',
    
    orderChai: function () {
        console.log("Yess...! It is available..");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,'name')); // here explicitly 'name' is given bcz it works like that only. we've to give which propertyKey you want to get description

// if you want ot restrict your object propertyKey then you can do..

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false,
})

chai.name = 'Green Tea'
console.log(chai.name);     //here you can see chai name is not changing..

console.log(Object.getOwnPropertyDescriptor(chai,'name'));  // now you can see property is false so Noone can change/override the name of chai{}


// for (let [key,value] of chai) {         // giving error -  chai is not iterable bcz it is object. to make working see below exp...
//     console.log(`${key} : ${value}`);
// }

for (let [key,value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);           // here loop is running but it is printing fun() also. isavailable() that is not good.
}
    
for (let [key,value] of Object.entries(chai)) {
    if( typeof value !== 'function'){               // to avoid fun we'll do type check using if.. now it's good.  
        console.log(`${key} : ${value}`);      // you can see name is not printing in loop bcz enumerable is false for this...          
    }
}