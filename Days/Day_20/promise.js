//========================================== Day-19 Dec 30 2023 ====================================
// ----------------------- Promises in JavaScript -----------------------------------

/* 
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
A Promise have three states:

Pending:-  initial state, neither fulfilled nor rejected.
Fulfilled:-  meaning that the operation was completed successfully.
Rejected:-  meaning that the operation failed.

*/

const promiseOne = new Promise(function(resolve,reject){   

    //promise takes call back fun() and resolve & reject is part of this means promise will work or not.

    // what kind of task promise uses(Async task) - DB calls (data insertion , rejection , deletion etc) , cryptography , network call

    setTimeout(function(){
        console.log('Promise works on Async task')
        resolve()       // this will connect with then state..
    },1000)
})

// how to connect resolve with then. here then is resolve.

promiseOne.then(function(){        // then also accept call back fun..
    console.log("Promise consumed and then() connected with resolve..")
})

// actually we can declare promise without storing in any variable and perform all method.

new Promise(function(resolve , reject) {
    setTimeout(function(){
        console.log("Execute Async task..");
        resolve()
    },1000)
}).then(function(){
    console.log("Async task executed");
})

const promisethree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({name:'Akshay', email: 'akshay@example.com'})   // here we can assign data in any format like object , array or function.
    },1000)
})

promisethree.then(function(userData){     // here you can see userdata automatically taking resolve value. so we can say any parameter will accept 
    //console.log(userData)                 // resolve value. since it is connected with then and resolve.
});

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false
        if(!error) {  
            resolve({username:"Akshay", place:"Mumbai"})
        }
        else {
            reject("Error ! Something went wrong..")
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user)
    return user.place       // here we want to fetch only place value so returning user.place and we'll call it in next then()
})
.then(function(place){      // here place is just a parameter you can give any parameter name. it will take value from above then().
    console.log(place)
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("Promise either resolved or rejected..!");
})

//========================= Using Async Await ====================================

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error) {
            resolve({username: "Tanya", place: "Punjab"})
        }
        else {
            reject('Error! Async is not working..!')
        }
    },1000)
})

async function consumePromiseFive() {     // Async await works same as then() but it don't execute until the previous function fully executed. see below exp- getAlluser()
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}
consumePromiseFive()


async function getAllUser() {
    // const allUSerData = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log(allUSerData)

    // if you see above code is giving o/p but not in proper format.. we'll put this in try catch block and format will change to object.

    try {
        const allUSerData = await fetch('https://api.github.com/users/akshaykumar004')
       // const changedFormat = allUSerData.json()    // here we're changing the o/p into object format.
        const changedFormat = await allUSerData.json()  // without adding await o/p is showing in pending state.
        console.log(changedFormat)      // o/p is showing- promise is pending bcz it is taking time to load data. to avoid this will add await infront of allUserData
    } catch (error) {
        console.log('Error : ' , error);
    }
}
getAllUser()


// ------------ same work using then ()....

fetch('https://api.github.com/users/akshaykumar004').then(function(data){

    return data.json()
    
}).then(function(formatData){
   // console.log(formatData);
})
.catch((error) => console.log(error));      // arrow function

    
