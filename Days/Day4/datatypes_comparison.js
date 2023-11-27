// ----------- Normal Comparison --------------------

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" <= 1);


// console.log(null > 0);
// console.log(null >= 0); 
// console.log(null < 0);
// console.log(null <= 0);
// console.log(null == 0); // here null is not converted to 0 hence it is false.
// console.log(null != 0);

/* here comparison < , >= , < , <=  and == works differently.Comparisons convert null to number and treat as 0 
    but == does not convert. that's why >= , <= , != is true.

null == null;        // true
null == undefined;  // true
Value such as false, '', '0', and [] are subject to numeric type coercion, all of them coerce to zero.
 */


// console.log(undefined > 0);
// console.log(undefined >= 0); 
// console.log(undefined < 0);
// console.log(undefined <= 0);
// console.log(undefined == 0); 
// console.log(undefined != 0); // here the value is not defined that's why it is true.

// --------------------  triple equal === comparison ----------------------------------------

console.log("2" === 2); // here === strictly compare the value. it compare the value as well as check the data types. that's it is false.
console.log(2===2);