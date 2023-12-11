//-------------------- Filter Map and Reduce ---------------------

const coding = ["Python" ,"JavaScript" , "C++" ,"Ruby", "Java"]

const langName = coding.forEach( (iteam) => {   // to return the value of for each loop we have to store this into a variable.
   // console.log(iteam);
    return iteam        // it will not returning anything..
} )

//console.log(langName);    // it will not returning anything.. giving undefined


//=========================== filter =========================================

const numArray = [1, 1, 3, 4, 5, 6, 7, 8, 9]

// const number = numArray.filter( (num) => num > 4)   // this single line will execute and will give o/p after satisfying condition
// console.log(number)

const number = numArray.filter( (num) => {   // if you want to use {} then must use return keyword
    return num > 4
})

 //console.log(number)

// ------------- how to use this condition in for each loop ---------------------------

const newNum = []   // to store the value , we've to initialize new array as empty..

numArray.forEach( (num) => {
    if (num > 4) {
        newNum.push(num)
    }
})

//console.log(newNum)     // getting same result but after some line of code.


//+++++++++++++++++++++++++ Filter +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'Fiction')
    userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre == "History"
})
//console.log(userBooks)
// console.log(userBooks)

const num = [1, 2, 3 ,4 ,5 ,6 ,7 ,8]

const newNumb = num.map((addNum) => addNum + 10)    // map is also call back fun so we can use like this..

// console.log(newNumb)


//=========================== double map() with filter =====================================

const num1 = [1, 2, 3, 4, 5, 6 , 7, 8]

const newNumb1 = num1.map((mulNum) => mulNum * 10)
.map( (num1) => num1 + 5)               // o/p of first map wil be in 2nd map
//.filter((num1) => num1 >= 40)         // filter will work on o/p of 2nd map value

// console.log(newNumb1)

//=============================== Reduce method ========================================

const arr = [1, 2, 3, 4, 5, 6 , 7]

const totalValue = arr.reduce( (accumulator , currentValue) => {    // here reduce taking two values - acc as 0 and currVal of array
    // console.log(`acc value : ${accumulator} and currVal : ${currentValue}`)
    return accumulator + currentValue
} , 0)                                                          // here accumulator will pick 0 as initial value.

console.log(`total Sum is : ${totalValue}`)


const shoppingCart = [
    {
        iteamName : "Iphone 15 Pro" ,
        price : 149999
    },
    {
        iteamName : "Shirt" ,
        price : 999
    },
    {
        iteamName : "Laptop" ,
        price : 99999
    },
    {
        iteamName : "Sunglasses" ,
        price : 1599
    },
    {
        iteamName : "Shoes" ,
        price : 4999
    }]

    const totalCost = shoppingCart.reduce( (cost , value) => {
        return cost + value.price
    }, 0)

    console.log(`total price is : ${totalCost}`)


