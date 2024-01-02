//======================== Object Literals and this keyword ====================================

const user = {                  // here user is a literal and inside user all details are properties fo literal.
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);       // here this keyword refering to current username. without "this" username will not print.
        // console.log(this);          // here this keyword refering to current context. it will take whole object user{} as current conetxt
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);       // this will take current context as null value inside this. but if you print this in browser console then it will o/p.


// ===========================  Constructor Function =================================

function User(username, loginCount, isLoggedIn){    // here we're creating constructor fun() which will accept three values.
    this.username = username;
    this.loginCount = loginCount;                   // this taking current value of constructor parameter
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

//    return this   // without returning this keyword. it will execute also.
    // bcz without returned "this" gettng value of userOne and userTwo because of new keyword, it is creating instance and returned also.
}

// const userOne = User("hitesh", 12, true)        // here new keyword will create new instance for userOne.
// const userTwo = User("ChaiAurCode", 11, false)  
/* without using new keyword just print above code. o/p will print all this properties and userTwo var will replace userOne bcz 
 it is not creating new instance for this to execute.   */

const userOne = new User("hitesh", 12, true)        // here new keyword will create new instance for userOne and userTwo.
const userTwo = new User("ChaiAurCode", 11, false) 
console.log(userOne);
console.log(userOne.constructor);   // here checking user is constructor or not. so it giving o/p as [Function: User] means it is.
console.log(userTwo);

/* new keyword = First It creating the empty object that is called instance
second constructor function called and it's argument(parameter). After that value of this keyword it fetch and finally it print in empty instance.
*/