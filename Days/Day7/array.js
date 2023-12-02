//-------------------------------------- Day-7 , 2 Dec 2023 ------------------------------------------------

// Using array we can define different-2 type of elements in a single variable.

const arr = [1 , 2 , 3 , 4 , 5 , true , "Akshay"]  // like this we can define array.

//console.log(arr[5]);  // this will print the value of index 5

// const arr2 = new Array(1 , 2 , 3 , 4 , 5 , true , "Akshay")  // here like this also we can define array using object

// console.log(arr2[6]);

//-------------------------- aRRAY mETHODS -------------------------------------

// arr.push(0);        // push will insert value at last index..
// console.log(arr)

// arr.pop()
// console.log(arr)


// arr.unshift(0)  // this will insert value at first index. work like push but insert value in oppposite side i.e start index.
// console.log(arr)    

// arr.shift()     // shift will work like pop. will remove entry of 1st index.
// console.log(arr)


// console.log(arr.includes(9))    // this will give value in boolean type

// console.log(arr.indexOf(9))    // this will return as -1 bcz 9 does not exist.

// console.log(arr.join())       // this will give same o/p but in string format. join convert the array in string type.

// ----------------  Slice and Splice ---------------------------------------

console.log("1st - " , arr)
console.log(arr.slice(1 , 3))   // this will print between range 1 to 3 (excluding 3rd index)
console.log(arr)

console.log("2nd - " , arr)
console.log (arr.splice(1 , 3))
console.log(arr)

/* difference b/w slice & splice are - slice print the value excluding last range element.
but splice print the value including last range element but it cut from the origional array. 
you can see line - 37 printing all the 7 value after performing slice methods but 
during splice operation, line - 41 is not printing all 7 values. it excluded the splice range value*/

