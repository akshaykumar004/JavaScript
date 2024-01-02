//------------------------------------- Jan 2nd 2024 : 10:18PM --------------------------------------------

function setUserName(username) {            // here ...setUsername is showing that means it can convert into class i.e latest style of code
    this.username = username
    //console.log("called");
}

function createUser(username,email,password) {      //...createUser can convert into class and constructor i.e. latest ES2015 class syntax..
    //setUserName(username)
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@google.com",2024)
console.log(chai);   

/* only email and password are coming in above code. bcz for username we're using setUserName(username) that's why it's not coming.
to make this working we've to call above setUserName() context by using call keyword. but still it will not work. it is calling 
but not giving value to createUser(username) so to do this we've to call setUserName 'this'. so that it will take setUserName context
and will pass to createUser (username) context. previoulsy this was taking current context not global context.. 
so when we'll write 'this' in createUser() context then it will take setUserName() context..

*/