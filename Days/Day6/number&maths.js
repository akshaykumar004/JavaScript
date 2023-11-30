// //----------------------------- Day-6 30 Nov 2023 -----------------------------------------

// //----------------------  Number -------------------------------------------------------- 

// let num = 100                    // this gives the simple output as 100 .. not defining data type..
// let number = new Number(100)    // It classifies the data type of number. giving output 100 with specification

// console.log(num); 
// console.log(number); // we can convert into string and also can use multiple methods.

// const value = new Number(100.234)

// console.log(value.toString()); // after converting into string it don't give o/p as "Number" even though it is defined as Number.

// console.log(value.toFixed(2)); // it will fix the value according to your position value like here it is fixing for 2 .
// console.log(value.toPrecision(3)); // it will precise the value very specifically. use properly.
// console.log(value.toPrecision(4));  // here it is taking till 4 position.
// console.log(value.toPrecision(5));  // here it is taking till 5 position.
// console.log(value.toPrecision(2));  // here it pricising till only 1 and then converting them into decimal

// let bigNum = 10000000;
// console.log(bigNum.toLocaleString()); // converting 0 into American standard
// console.log(bigNum.toLocaleString('en-IN')); // converting 0 into Indian standard

// // there are some methods we can use for Number data type - MAX_Value , MIN_Value , toString , length , isInteger etc. 
// // we can see all the methods in browser console.



// -----------------------------------  Maths ---------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

console.log(Math); // in browser console we can see all the methods of Math.

// console.log(Math.abs(-4));      // it will convert into positive value.
// console.log(Math.round(4.567)); // it will round of value
// console.log(Math.ceil(5.2))     // it will round of as max value
// console.log(Math.floor(6.9))    // it will round of as min value(i.e before decimal)

// console.log(Math.sqrt(144));    // it will give square root of value
// console.log(Math.pow(12,2))     // it will give power of value

// console.log(Math.min(2 , 4 , 7 , 1));       // it will give min value in array.
// console.log(Math.max(2 , 4 , 9 , 0 , 1))    // it will give max vaue in array.

// console.log(Math.random()); // this will give value between 0 to 1 only.

// console.log(Math.random() * 10) /* now it will give after 1 means not 0. bcz after multiply with 10 decimal value will shift
//                                  right to left but sometimes it will give with 0 so to avoid this we will add +1. */

//console.log((Math.random() * 10) + 1 ); //now it will give after 1 means not 0. bcz after multiply with 10 it will add 1 so ..

//console.log(Math.round(Math.random() * 10 )) + 1;  // to avoid decimal values. we will use round method.

// but if we want specifically between some numbers so for that we need to define variable of that numbers.

const min = 15
const max = 25

console.log(Math.round(Math.random() * (max - min + 1))+ min )