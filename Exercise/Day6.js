/* ------------------------------------ Day 6: Arrays -------------------------------------------
   --------------------------------- 27/07/2024 04:45 PM --------------------------------

Tasks/Activities:--

Activity 1: Array Creation and Access
⚫ Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
⚫ Task 2: Access the first and last elements of the array and log them to the console.

Activity 2: Array Methods (Basic)
⚫ Task 3: Use the push method to add a new number to the end of the array and log the updated array.
⚫ Task 4: Use the pop method to remove the last element from the array and log the updated array.
⚫ Task 5: Use the shift method to remove the first element from the array and log the updated array.
⚫ Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array. 

Activity 3: Array Methods (Intermediate)
⚫ Task 7: Use the map method to create a new array where each number is doubled and log the new array.
⚫ Task 8: Use the filter method to create a new array with only even numbers and log the new array.
⚫ Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

Activity 4: Array Iteration
⚫ Task 10: Use a for loop to iterate over the array and log each element to the console.
⚫ Task 11: Use the forEach method to iterate over the array and log each element to the console.

Activity 5: Multi-dimensional Arrays
⚫ Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
⚫ Task 13: Access and log a specific element from the two-dimensional array.

*/

// -------------------------------- Activity 1: Array Creation and Access ----------------------------

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

const array = [1,2,3,4,5]       // this array is using for all tasks........

console.log('array : ',array);

// Task 2: Access the first and last elements of the array and log them to the console.

console.log("array length : ", array.length)
console.log('first element : ', array[0]);
console.log('last element : ', array[array.length-1]);

// -------------------------------- Activity 2: Array Methods (Basic) ----------------------------

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

array.push(6)
console.log('new array using push method : ', array);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.

array.pop()
console.log('updated array using pop method : ', array);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

array.shift()
console.log('new updated array using shift method : ', array);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array. 

array.unshift(7)
console.log('latest updated array using unshift method : ', array);



// -------------------------------- Activity 3: Array Methods (Intermediate) ----------------------------

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const mapArray = array.map((num) => {           // num is element of array..
    return num * 2
})

console.log('new array using map method : ', mapArray);


// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const filterArray = array.filter( (num) => {        // num is element of array..
    return num % 2 === 0;
})

console.log('new array using filter method : ', filterArray);


// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result. 

const reduceArray = array.reduce( (sum , num) => {
    return sum + num
}, 0)

console.log('new array using reduce method : ', reduceArray);
console.log('latest array is : ', array);


// -------------------------------- Activity 4: Array Iteration ----------------------------

// Task 10: Use a for loop to iterate over the array and log each element to the console.

for (let i=0; i < array.length; i++) {
    console.log(`array element using for loop at index ${i} : `, array[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console. 

array.forEach( (num , index) => {
    console.log(`array element using forEach loop at index ${index} : `, num);
})



// -------------------------------- Activity 5: Multi-dimensional Arrays ----------------------------

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

//let arr = [[1 , 2 , 3] , [4 , 5 , 6] , [7 , 8 , 9]]  

// or we can write this type also for better unerstanding

let arr = [
    [1 , 2 , 3] ,       //    Index : [0]    ,    Index : [1]    ,    Index : [2]
    [4 , 5 , 6] ,       // Row 1 : [1, 2, 3] , Row 2 : [4, 5, 6] , Row 3 : [7, 8, 9]
    [7 , 8 , 9]         // Col 1 : [1, 4, 7] , Col 2 : [2, 5, 8] , Col 3 : [3, 6, 9]
]

console.log(arr);


// Task 13: Access and log a specific element from the two-dimensional array. 

const element = arr[2][2]   // this is taking only 2nd index of 3rd row and 3rd col
const elements = arr[2,2]   // this is taking whole array from starting index to ending index means - from row index 2(7) to col index 2(9)
const elemnt = arr[1][1]

console.log('element from multi dimensional array [2][2] is : ' , element);
console.log('element from multi dimensional array [2,2] is : ' , elements);
console.log('element from multi dimensional array [1][1] is : ' , elemnt);


















/* ---------------------------- Notes --------------
push: Adds one or more elements to the end of the array.
pop: Removes the last element from the end of the array.

shift: Removes the first element from the beginning of the array.
unshift: Adds one or more elements to the beginning of the array.

Reduce() - The reduce method's callback function takes two main arguments: the accumulator (which accumulates the sum) and 
the current value (the current element being processed).
*/