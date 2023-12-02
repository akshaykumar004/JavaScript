// ------------------------ Array part -2 - Day-7 2 Dec 2023 ----------------------------------

let arr1 = [1 , 2 , 3 , 4 , 5]
let arr2 = ["Akshay" , "Aman" , "Ayush"]
let arr3 = ["Capgemin" , "Cognizant" , "Accenture"]

// let add = arr1 + arr2
// console.log(typeof add , add)  // it will add the value of 2nd array but not in proper way bcz it will convert into string

// const pushResult = arr1.push(arr2)
// console.log(pushResult)

const concatResult = arr1.concat(arr2 , arr3)
//console.log(concatResult)

// spread method --

// const spreadResult = [...arr1 , ...arr2 , arr3] // last array dont spread using 3 dot so it is showing as whole element in one array.
// console.log(spreadResult)

// flat menthod ---------------------

// let mixArray = [1 , 2 , 3 , 4 , 5 , ["Akshay" , "Aman" , "Ayush"] , 4 ,5, ["Capgemin" , "Cognizant" , "Accenture"] , 1 , 2]

//console.log(mixArray.flat(Infinity)) // here flat will add all diff-2 array into one array. and infinity find the depth of mix array.

let name = "Akshay"

console.log(Array.isArray(name))    // it will check given value is from array or not.

console.log(Array.from(name))       // it will convert into array.

let a = 100
let b = 200
let c = 300

console.log(Array.of(a , b , c))    // Of will add multiple element into one array.