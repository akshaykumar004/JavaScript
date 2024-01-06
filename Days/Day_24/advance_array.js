//----------------------------- Day-24 , 6th Jan 2024 --------------------------------

// ------------------------- Advance Array  ---------------------------------------

const arr = []
//%DebugPrint(arr)        // this code will run in JSV V8 engine. (in CMD)

/* --------------- Array Types -----------

1 - Continuous 2- Holey Type
these array can have 3 types of elements - 
SMI(Small Integer)
Packed Element      - String , function()
Packed Double Element - Float , NaN , Infinity

Once the array will become Packed Double Element then it cant become Packed SMI Element. Compiler cant optimize to upgrade. 
even after deleting the value.
Optimization works differently on packed SMI,  double or packed elements.. Order matter here... means default will be Packed SMI 
and then Packed Double and packed element...

Order - Packed SMI -> Packed Double -> Packed       
        Holey SMI -> Holey Double -> Holey Packed
-- Optimization can be decide expensive or not according to all this order..
*/

arr.push(1 , 2 , 3 , 4 , 5)     // this is called Packed SMI Element
         
arr.push(6.0)                   // this is called Packed Double Element bcz it contains float value

arr.push('7')                   // this is called Packed Element

//arr[10] = '10'              // at index[7,8,9] no value is defined so it is called Holey Array means there is hole in array. 

console.log(arr);
console.log(arr.length);
console.log(arr[9]);        // giving result as undefined...

/* above we're fetching the value of index[9] but there is no value.. hence here optimization will be costly. 
Why .. let's see -------
How Array checks the element--------

1- Bound Check
2- hasOwnProperty(arr,9)
3- hasOwnProperty(arr.prototype, 10)
4- hasOwnProperty(Object.prototype , 10)

In 1st check - it will check index position which we're fetching exist or not in array length otherwise give o/p as undefined..
In 2nd Check - it will check the element exist or not at 9th position otherwise it will give result as undefined
In 3rd Check - It will check array prototype also means have you defined value inside prototype or not..
In 4th Check - It will check Object Prototype also bcz JavaScript has prototypal nature hence it will check in Object also

so due to this all 4 check, hasOwnProperty check is most expensive check in JS and Holey is called most Costly Check in JS

*/

const arrTwo = new Array(3)     // this is Holey SMI Elements bcz - giving o/p as -- [ <3 empty items> ]
console.log(arrTwo);        

arrTwo[0] = '1'         // Holey Packed Elements    bcz we're inserting value in string format
arrTwo[1] = '2'         // Holey Packed Elements
arrTwo[2] = '3'         // Holey Packed Elements

console.log(arrTwo);

//Now we can optimize above code using below code. bcz above we're declaring an array having 3 empty element but below declaring direct empty arr.

const arrThree = []
arrThree.push('1')      // Packed Elements
arrThree.push('2')      // Packed Elements
arrThree.push('3')      // Packed Elements
console.log(arrThree);

/* 
Summary:
There are two types of arrays: holey arrays and continuous arrays. These arrays can contain three types of elements:-
SMI (Small Integer), Packed Element, and Double.

1. Holey Array:- A holey array is an array that contains missing or empty elements. 
For example, [1, 2, , 4] is a holey array because it has a missing element. Holey arrays are less optimized for performance.

2. Continuous Array:- A continuous array is an array that does not contain missing or empty elements. 
For example, [1, 2, 3, 4] is a continuous array because it has no missing elements. Continuous arrays are more optimized for performance.

In terms of optimization, continuous arrays are more efficient and optimized for various operations compared to holey arrays.
*/