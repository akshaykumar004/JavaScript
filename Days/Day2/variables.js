//------------------------------------------- Day-2 , 22 Nov 2023  ----------------------------------------------------


const accountId = 22112023  // const = can't be re-assigned a value and can't be declared again with same name (block scope)
// accountId = 2023 --- this "accountId" will not take since it is already defined as constant.

let accountName = "Akshay"  // let = can be re-assigned a value but can't be declared again with same name (block scope)
accountName = "Aman"    // it will take latest name.

var accountPass = "123456"  // var = it can be re-assigned a value and it can also be declared again (Global/function scope)
var accountPass = 98765     // it will take latest password.

accountEmail = "akshay@javascript.com"
accountCity = "Mumbai"                  // in JS without const,let or var keyword , we can define variables.
accountCity = "Banglore" 

let accountState;       /* in JS we can define variables without value. this will print "undefined" bcz value is not defined yet.
                            also we can use semicolon or not by choice. */

console.log(accountId)

console.table([accountName,accountPass,accountEmail,accountCity,accountState])
// using console.table --- we can print group of variables together and it will print in table format


/* Here let and Var both are used to define variables. but standard prefer to use only Let. 
bcz of scope issue.(block scope & funtional/global scope). scope means {}. we use this in if else or for loop etc.
using Var "value can be reassigned and it can be declared again with same variable name" but using Let only value can be change. 

*/