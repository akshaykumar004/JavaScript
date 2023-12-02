//---------------------- Constructor Object Or Singleton --------------------------------------------

let twitter = new Object()
// console.log(twitter)     // it is same as Literas Object.... no change in value or anything..

twitter.id = '123Abc'
twitter.name = "Akshay"
twitter.isLoggedIn = false

//console.log(twitter)

const facebook = {
    fullName : {  
        userName : {
            firstName : "Akshay" ,
            lastName : "Singh"
        }
    }
}

// console.log(facebook)
// console.log(facebook.fullName);     // we can use multiple object in single object and also can fetch the value using dot.
// console.log(facebook.fullName.userName);

//-------------------- adding two objects --------------------------

let obj1 = {user1: 'Akshay' , loc : "Mumbai" , email : 'user@js.com'}
let obj2 = {user2: 'Singh' , loc2 : "Lucknow" , mail : 'user@cg.com'}

//let obj3 = {obj1 , obj2}

//console.log(obj3);  // it will give the result obj1 = .... and obj2 = ... both object will combine but not together

// const objOutput = Object.assign(obj1 , obj2)
const objOutput = Object.assign({} , obj1 , obj2)  // this is the standard way to assign two or more than two objects. {} at starting.
//console.log(objOutput)

const newOutput = {...obj1 , ...obj2}   //using spread method also we can add Obj.
//console.log(newOutput)

//----------------- Keys and values method---------------------------------

// console.log(Object.keys(obj1))  // using Keys we can fetch the keys name from obj. also this is giving the o/p in array format
// console.log(Object.values(obj2))    // using values we can fetch values of keys.
// console.log(Object.entries(obj1))   // this will give all keys and values in seperate-2 arrays.

//console.log(obj1.hasOwnProperty("user1"))   // hasOwnProperty will check existance of value in object.

// ----------------- Array Object --------------------------

const userObj = [
        {                
            firstName : "Akshay" ,
            lastName : "Singh"
        } ,

         {
            id : '12345' ,
            email : 'abc@gmail.com'
        }
]

// console.log(userObj[1].email)   // like this we can fetch the value of array object
// console.log(userObj[1].firstName)
// console.log(userObj[1].id);
// console.log(userObj[1].lastName)
    


// --------------------- Object destructure --------------------------------------------------

const destructure = {
    userId : "123Abc" ,
    userName : "Akshay" ,
    userMail : "user@gmail.com"
}

/* console.log(destructure.userId)  // this is the way we fetch the value of any userId.
but after destructure=ing the obj we use different way bcz we can't write multiple time same line console.log(destructure.userId) */

//const {userId} = destructure
const {userId : Id} = destructure   // or if you want to sort the variable name or redefine as per your convenience then also you can define
console.log(Id)


//----------------------------------- JSON API ---------------------------------------------------------------------

// Syntax ------------- It is same like Object but just var name will be in quotes 

// {
//     "name" : "Akshay" ,
//     "loc" : "Capgemini" ,
//     "course" : "Javascript"
// }

// JSON also will be in Array Object. like below we can fetch the value.

[
    {} ,
    {} ,
    {} ,
    {}
]