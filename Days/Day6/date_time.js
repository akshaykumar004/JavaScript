//----------------- Day-6 30 Nov 2023 --------------------------------------

// For declaring date we have to declare object 

//console.log(Date())

const date = new Date()
//console.log(date)
//console.log(typeof date)  // date is Object data type.

// here we can also use some other methods to define dates

// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())
// console.log(date.toString())

console.log(date.toLocaleString ('default' , {  // like this also we can define date time etc. using "toLocaleString" method.
    hour : "2-digit",
    day : "2-digit",
    month : "long",
    year : "numeric"
}))


// let createdDate = new Date (2023 , 11 , 1 , 0 ,37) // here 11 referring dec bcz in JS month start from 0 as January. 0 = 12AM , 37 = Min
// console.log(createdDate.toLocaleString());

let newformat = new Date("2023-12-01") // you can define any format like dd-mm-yy or yy-mm-dd or etc
// console.log(newformat);
// console.log(newformat.getTime())

//-------------------- timestamp -----------------------------------

// let timestamp = Date.now()
// console.log(timestamp); // result will be in miliseconds since Jan 01, 1970 bcz JS stores dates as number of milliseconds since Jan 01, 1970
// console.log(Math.round(Date.now()/1000)); // this will give in seconds. to convert milisec into sec just divide by 1000.

