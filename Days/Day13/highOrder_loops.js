//----------------------------- Day - 13 11 Dec 2023 ------------------------------

// for Of loop -------------------------- it work specifically on Array , Object , String -----------------------

const arr = [1 , 2 , 3 , 4 , 5]
for (const num of arr) {            // in this no need of declare condition & all. it will fetch all things automatically
 //   console.log(num)
}

const str = "Tanya Ohri"

for (const name of str) {
  //  console.log(`character ${name}`)
}


//===================== Map in for of loop =====================================

const map = new Map()       // map take - key and value -  Key : value

map.set("In" , "India")
map.set("Fr" , "France")
map.set("Br" , "Brazil")
map.set("In" , "India")     // here it will insert this value bcz of duplicate.

//console.log(map)

for (const key of map) {        
  //  console.log(key)        // here it will print in array format, to print in key and value format use below code structure
}
for (const [key , value] of map) {        
 //   console.log(key , value)        // here it will print in array format to print in key and value format use below code structure
}

// const myObj = {
//     py : "Python" ,
//     js : "JavaScript" ,
//     cpp : "C++" ,
//     rb : "Ruby"
// }

// for (const [key , value] of myObj) {
//     console.log(key , value)        // here facing TypeError: myObj is not iterable so we cant use " for of " loop on Object
// }

// so to make object iterable we'll use "for in" loop... 

const myObj = {
    py : "Python" ,
    js : "JavaScript" ,
    cpp : "C++" ,
    rb : "Ruby"
}

for (const lang in myObj) {     // here lang is a var name. and it is working in for in loop...
   
    //    console.log(`${lang} is extension of : ${myObj[lang]}`)
}

const lang = ["Python" ,"JavaScript" , "C++" ,"Ruby", "Java"]

for (const name in lang) {
    
        // console.log(name)       // here if you will print only name then it will give o/p - 0,1,2,3,4(Index number)
        // console.log(lang)       // it will print index[5] times all values in array format.
        // console.log(lang[name])     // it will print single entry like lang[0]..
        
}


//===================== Map in for in loop =====================================

// const myMap = new Map()

// myMap.set("In" , "India")
// myMap.set("Fr" , "France")
// myMap.set("Br" , "Brazil")
// myMap.set("In" , "India")  

// for (const map in myMap) {
//     console.log(map)            // here it will not execute in  - for in loop...

// }


//--------------- for each loop -------------------------------------------

const coding = ["Python" ,"JavaScript" , "C++" ,"Ruby", "Java"]

/* like this we can declare for each loop using call back fun. since this is call back fun hence fun name will not be here. 
    and in () instead of parameter , we'll use any name like i , val , name etc to run in above array and take the value.) */

coding.forEach(function (codingLang) {   

    // console.log(codingLang)
})

// belwo using arrow function also we ca declare for each loop

coding.forEach( (langName) => {     // this is arrow function. no need to declare function name itself.
//    console.log(langName)
   
}) 

coding.forEach( (langName , index , coding ) => {   // we can pass multiple parameter like this
   // console.log(langName,index,coding)      // it will print value , index number and whole array
})


// ----- in one array we can use multiple object like this - [{} , {} , {}]  -------------------

const array = [
    {
        companyName : "Tata" ,
        productName : "Charity"
    },

    {
        companyName : "Mahindra" ,
        productName : "Bolero"
    },

    {
        companyName : "Reliance" ,
        productName : "Jio"
    }]

array.forEach( (iteam) => {
    console.log(iteam.companyName)      // here just using iteam we can fetch any value from object
})

